import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[type]',
    host: {
        '(mouseenter)': 'changeColor($event)',
        '(mouseleave)': 'changeBack()'
    }
})
export class MyDirective{

    @Input('mydirective') color;

    constructor(private element: ElementRef){
        // this.element.nativeElement.style.color = 'red';
    }

    changeColor(e){
        // console.log(e)
        this.element.nativeElement.style.color = this.color;
    }

    changeBack() {
        this.element.nativeElement.style.color = 'black';
    }
}