import { Component, OnInit, OnDestroy } from '@angular/core';
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
  userMarker: Shit;
  mapType = 'roadmap';
  zoom: number = 12;
  pooIcon: string = '../../assets/images/emojipoo_icon.svg';
  clusterIcon: string = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m';
  userIcon: string = '../../assets/images/userIcon_small.png';
  shits: Shit[]
  mapReady = false;


  constructor(private shit: ShitService, private loc: LocationService) { 
    this.shits = [];
  }

  ngOnInit() {

    this.jumpToUser();

    this.displayUser();

    this.shit.getShits().subscribe(res => {
      this.shits = res;
      this.mapReady = true;
    })
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label && index}`)
  }

  mapClicked($event: MouseEvent) {
      console.log($event['coords'].lat);
      console.log($event['coords'].lng);
  }

  displayUser() {
    this.loc.trackPosition().subscribe(loc => {
      let newShit = {
        id: 0,
        thereOrNot: false,
        type: 'poo',
        addedById: 0,
        removedById: 0,
        timestamp: 0,
        lat: loc.coords.latitude,
        long: loc.coords.longitude,
        name: '',
        label: '',
        draggable: false,
      }
      this.userMarker = new Shit(newShit);
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
