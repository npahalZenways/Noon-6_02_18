import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HeaderComp } from "./header/header";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { RoutingComponent } from './routing/routing.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from "./forms/forms.component";
import { NewserviceService } from "./newservice.service";
// import { MyService } from "./service/myservice";
import { HttpModule, Http } from "@angular/http";
import { MyPipe } from "./Pipes/mypipe";
import { MyDirective } from "./directive/mydirective";

const route : Route[] = [{

}]

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
    HeaderComp,
    RoutingComponent,
    AboutusComponent,
    LoginComponent,
    DashboardComponent,
    FormsComponent,
    MyPipe,
    MyDirective
  ],
  imports: [
    // All modules
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },{
      path: 'login',
      component: LoginComponent
    },{
      path: 'dashboard/:username/:password',
      component: DashboardComponent,
      children: [{
        path: 'header',
        component: HeaderComp
      }, {
        path: 'about',
        component: AboutusComponent
      }]
    }, {
      path: 'admin',
      loadChildren:'./admin.module#AdminModule'
    }])
  ],
  providers: [
    // all services
    // MyService,
    NewserviceService,
  ],
  bootstrap: [AboutusComponent]
})
export class AppModule { }
