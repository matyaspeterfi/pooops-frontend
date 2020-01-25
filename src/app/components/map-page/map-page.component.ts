import { Component, OnInit } from '@angular/core';
import { ShitService } from 'src/app/services/shit-service/shit.service';
import { Shit } from 'src/app/models/shit';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {
  latitude: number = 50.755117;
  longitude: number = -2.227547;
  userMarker: Shit;
  mapType = 'roadmap';
  zoom: number = 15;
  pooIcon: string = '../../assets/images/emojipoo_icon.svg';
  clusterIcon: string = 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m';
  userIcon: string = '../../assets/images/userIcon_small.png';
  shits: Shit[]
  mapReady = false;
  clickedMarker: any = {};
  minutesAgo: number = 0;
  previousInfo: any;
  poopname: string;
  types: any[];
  selectedtype: any;
  message: string;

  constructor(private shit: ShitService, private loc: LocationService) {
    this.shits = [];
  }

  ngOnInit() {

    this.jumpToUser();

    this.displayUser();

    this.populateShits();

    this.shit.getShits().subscribe(res => {
      this.shits = res;
      this.mapReady = true;
    });

    this.types = [
      { name: 'Dog', value: 'Dog' },
      { name: 'Cat', value: 'Cat' },
      { name: 'Horse', value: 'Horse' },
      { name: 'Bird', value: 'Bird' },
      { name: 'Human', value: 'Human' }];
  }

  markerClicked(shit: Shit, infoWindow) {
    this.clickedMarker = new Shit(shit);
    this.minutesAgo = this.clickedMarker.minutesAgo();
    if(this.previousInfo) {
      this.previousInfo.close()
    }
    this.previousInfo = infoWindow;

  }

  mapClicked($event: MouseEvent) {
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

  populateShits() {
    this.shit.getShits().subscribe(res => {
      this.shits = res;
      this.mapReady = true;
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

  pickUpShit() {
    this.shit.putShit(this.clickedMarker['id']).subscribe(res => {
      this.previousInfo = '';
      this.populateShits();
    })
  }

  shitPost() {
    let newShit = new Shit(this.userMarker);
    newShit.name = this.poopname;
    newShit.type = this.selectedtype;
    newShit.lng = this.userMarker.lng;
    this.shit.postShit(newShit).subscribe(res => {
      this.populateShits();
      this.message = 'Pooop added!'
    });
  }
}  
