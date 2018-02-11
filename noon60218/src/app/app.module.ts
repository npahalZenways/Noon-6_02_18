import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HeaderComp } from "./header/header";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

// @Component({
//   selector: 'header',
//   template: `
//     <p>This is my header</p>
//   `
// })
// class HeaderComponent {

// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComp
  ],
  imports: [
    // All modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // all services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
