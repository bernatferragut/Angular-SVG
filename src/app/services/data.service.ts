import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  // creating ant data object list
  myData: any[];
  //getting the data through Htttp
  constructor( private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  getData(){
    return this.myData;
  }

}
