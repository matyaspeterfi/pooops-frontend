export class Shit {
  id:number;
  thereOrNot:number;
  type:string;
  addedById:number;
  removedById:number;
  timestamp:number;
  lat:number;
  lng:number;
  name:string;
  label:string;
  draggable:boolean;

  constructor(shit) {
    this.id = shit.id;
    this.thereOrNot = shit.thereOrNot;
    this.type = shit.type;
    this.addedById = shit.addedById;
    this.removedById = shit.removedById;
    this.timestamp = shit.timestamp;
    this.lat = shit.lat;
    this.lng = shit.long;
    this.name = shit.name;
    this.label = shit.label;
    this.draggable = shit.draggable;
  }
}