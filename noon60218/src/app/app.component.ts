import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';

  imageSource = "http://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png";

  myStyle = "red";

  condition = true;

  myarray: number[] = [1,2,3,4,5,6,7];

  students = [
    {
      name: 'Nitin',
      phone: 1234567
    },
    {
      name: "Amit",
      phone: 345678
    },
    {
      name: "Gaurav",
      phone: 345678
    },
    {
      name: "Saurav",
      phone: 345698765
    }
  ]

  @ViewChild('para') para;

  getTitle(){
    return this.title;
  }

  clickevent(e){
    console.log('clicked', this.para);
  }
}
