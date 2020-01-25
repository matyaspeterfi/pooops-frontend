export class User {
  id: number;
  username: string;
  shitsReported: number;
  shitsRemoved: number;

  constructor(id?: number, shitsReported?:number, shitsRemoved?:number, username?:string) {
    this.id = id;
    this.username = username || `User ${id}`;
    this.shitsReported = shitsReported;
    this.shitsRemoved = shitsRemoved;
  }
}