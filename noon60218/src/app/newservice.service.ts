import { Injectable } from '@angular/core';

@Injectable()
export class NewserviceService {
  myname = "nitin";
  constructor() { }
  setname(name){
    this.myname = name;
  }
}
