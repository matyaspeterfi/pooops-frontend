import { Component, OnInit, OnDestroy } from '@angular/core';
import { marker } from 'src/app/models/marker';
import { ShitService } from 'src/app/services/shit-service/shit.service';
import { Shit } from 'src/app/models/shit';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  latitude: number;
  longitude: number;
  userMarker: marker;
  mapType = 'roadmap';
  zoom: number = 16;
  pooIcon: string = '../../assets/images/emojipoo_icon.svg';
  clusterIcon: string = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m';
  userIcon: string = '../../assets/images/userIcon_small.png';
  markers: marker[] = []
  mapReady: boolean;


  constructor(private shit: ShitService, private loc: LocationService) { }

  ngOnInit() {

    this.jumpToUser();

    this.displayUser();

    this.shit.getShits().subscribe(res => {
      this.generateMarkers(res);
    })
  }

  generateMarkers(shits: Shit[]) {
    shits.forEach(e => {
      let newMarker: marker = {
        lat: e.lat,
        lng: e.long,
        label: '',
        draggable: false
      }
      this.markers.push(newMarker);
    })
    this.mapReady = true;
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
  }

  displayUser() {
    this.loc.trackPosition().subscribe(loc => {
      this.userMarker = {
        lat: loc.coords.latitude,
        lng: loc.coords.longitude,
        label: "",
        draggable: false,
      }
    })
  }

  jumpToUser() {
    this.loc.getPosition()
      .then(res => {
        this.longitude = res['longitude'];
        this.latitude = res['latitude'];
      })
      .catch(err => {
        console.log(err);
      })
  }
}
