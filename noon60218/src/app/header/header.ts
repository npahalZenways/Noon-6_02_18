import { Component, Input, Output, EventEmitter } from "@angular/core";

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
export class HeaderComp{
    @Input('name') myname;

    @Output() myoutput = new EventEmitter();
    myarray = [1,2,3,4,5]
    giveOutput(){
        this.myoutput.emit(this.myarray);
    }
}