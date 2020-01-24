export class Shit {
  id:number;
  thereOrNot:number;
  type:string;
  addedById:number;
  removedById:number;
  timestamp:number;
  lat:number;
  long:number;
  name:string;

  constructor(shit) {
    this.id = shit.id;
    this.thereOrNot = shit.thereOrNot;
    this.type = shit.type;
    this.addedById = shit.addedById;
    this.removedById = shit.removedById;
    this.timestamp = shit.timeStamp;
    this.lat = shit.lat;
    this.long = shit.long;
    this.name = shit.name;
  }
}