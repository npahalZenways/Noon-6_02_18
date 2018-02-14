import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'custom'
})
export class MyPipe implements PipeTransform{
    transform(value, arg){
        if(arg){
            return value.filter(item => {
                return item.name.toLowerCase().indexOf(arg.toLowerCase()) != -1;
            })
        } else {
            return value;
        }
    }
}