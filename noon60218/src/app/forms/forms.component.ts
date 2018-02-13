import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.html'
})
export class FormsComponent{
    @ViewChild('myForm') form;
    submit(){
        console.log('form submitted');
        // this.form.reset();
        this.form.form.markAsUntouched();
    }
}