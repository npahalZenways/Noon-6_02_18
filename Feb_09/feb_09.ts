class school {
    protected schoolName;
    constructor(school) {
        this.schoolName = school;
    }
    getschoolName(){
        return this.schoolName;
    }
}

class student extends school{
    name : string;
    class;
    constructor(myname, classname, school){
        super(school);
        this.name = myname;
        this.class = classname;
    }
    getSchoolName(){
        console.log(super.getschoolName())
    }
}

var nitin = new student('nitin', 12, 'ABC school');
var amit = new student('Amit', 11, 'BCD school');
// console.log(nitin.schoolName);

interface carinfo{
    carMake;
    carModel;
    carHp;
    carYear;
}

class car implements carinfo{
    carMake;
    carModel;
    carHp;
    carYear;
}

// Modules are collection of classes

export module m1{
    export class colony {
        colonyArea;
        constructor() {
            
        }
    }
}

var dwarka = new m1.colony();