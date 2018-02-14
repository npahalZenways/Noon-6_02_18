import { Component, OnInit } from '@angular/core';
import { NewserviceService } from "../newservice.service";
import { Http, URLSearchParams, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  header;
  parameters;
  options;
  mybase;
  str = "even";
  date = new Date();
  query;
  myarray = [{
    name: 'nitin',
    marks:5555
  },{
    name: 'amit',
    marks: 223
  },{
    name: 'sachin',
    marks: 99
  },{
    name: 'ashish',
    marks: 998
  }];
  mynumber = 1234.8;
  constructor(private nservice: NewserviceService, private http:Http) { 
    this.header = new Headers();
    this.parameters = new URLSearchParams();
    
  }

  callAPI(){
    this.parameters.set('base', this.mybase);
    this.options = new RequestOptions({
      headers: this.header,
      params: this.parameters
    })
    this.http.get('https://api.fixer.io/latest', this.options).subscribe(function (data) {
      console.log(data.json());
    });
  }

  ngOnInit() {
    // console.log('Api call started')
    
    // this.http.post().subscribe(data=>{

    // }, err => {
    //   console.error('Below mentioned is the error')
    //   console.log(err);
    // })
  }

}
