import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    template: '<p>This is admin</p>'
})
export class AdminComponent{

}

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        RouterModule.forChild([{
            path:'',
            component: AdminComponent
        }])
    ]
})
export class AdminModule{

}