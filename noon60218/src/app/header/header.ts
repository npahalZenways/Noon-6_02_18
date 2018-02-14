import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NewserviceService } from "../newservice.service";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";
@Component({
    selector: 'header',
    // template: `
    //     <p>This is header component in separate file</p>
    // `
    templateUrl: './header.html',
    // styles: ['p{color: blue}', 'div{background-color: yellow; color: green}']
    styleUrls: ['./header.css'],
    // inputs: ['name']
})
export class HeaderComp implements OnInit{
    login = new LoginComponent(this.r);
    constructor(private nserv: NewserviceService, private r:Router){

    }
    @Input('name') myname;

    @Output() myoutput = new EventEmitter();
    myarray = [1,2,3,4,5]
    giveOutput(){
        this.myoutput.emit(this.myarray);
    }

    ngOnInit(){
        console.log('from header',this.nserv.myname)
        console.log('initial from header: ', this.login.initial)
        setTimeout(() => {
            console.log(this.nserv.myname);
            console.log('initial from header: ', this.login.initial)
            
        }, 10000);
    }
}