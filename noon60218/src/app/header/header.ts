import { Component } from "@angular/core";

@Component({
    selector: 'header',
    // template: `
    //     <p>This is header component in separate file</p>
    // `
    templateUrl: './header.html',
    // styles: ['p{color: blue}', 'div{background-color: yellow; color: green}']
    styleUrls: ['./header.css']
})
export class HeaderComp{

}