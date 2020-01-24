import { Component, OnInit } from '@angular/core';
import { marker } from 'src/app/models/marker';
import { ShitService } from 'src/app/services/shit-service/shit.service';
import { Shit } from 'src/app/models/shit';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  latitude: number;
  longitude: number;
  mapType = 'roadmap';
  zoom: number = 8;
  pooIcon:string = '../../assets/images/emojipoo_icon.svg';
  clusterIcon:string = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m';


  constructor(private shit:ShitService) { }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition(success => {
      this.latitude = success.coords.latitude;
      this.longitude = success.coords.longitude;
    });

    this.shit.getShits().subscribe(res => {
      this.generateMarkers(res);
    })
    
  }

  generateMarkers(shits:Shit[]){
    shits.forEach(e => {
      let newMarker:marker = {
        lat: e.lat,
        lng: e.long,
        label: '',
        draggable: false
      }
      this.markers.push(newMarker);
    })
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event['coords'].lat,
      lng: $event['coords'].lng,
      draggable: false
    });
    console.log($event['coords']);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: this.latitude,
      lng: this.longitude,
      label: 'A',
      draggable: true
    },
  ]

}
