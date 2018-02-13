import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  error;
  constructor(private myrouter: Router) { }
  login(){
    if(this.username == 'admin' && this.password == 'admin@123'){
      this.myrouter.navigate(['dashboard/' + this.username + '/' + this.password]);
    } else{
      this.error = 'invalid credentials';
    }
  }
  ngOnInit() {
  }

}
