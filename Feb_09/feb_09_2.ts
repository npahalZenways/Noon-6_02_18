// import { m1 } from './feb_09';
// import * as feb09 from './feb_09';

// data types

var num : number;
var str : string;
var isTrue : boolean;
var numArray : number[];
// numArray.push(10);
var strArray : string[] = [];
var x : any;
var anyArray : any[] = [1, "", true];

// Tuple
var myTuple : [number, string, number];

myTuple = [1, "", 1, "", "", 2,2,2,2,2,2];

// enum
enum myEnum {Milk = 21, Coffee = 20, Tea};
let myobj = myEnum[21];
// console.log('myobj', myobj);
let newobj = myEnum.Milk;
// console.log('newobj', newobj);

function myFunction(name:string):number {
    console.log(name);
    return 1;
}

// myFunction('nitin');

// Unions
function returnPadding(padding: string | number){
    if(typeof padding == "number"){
        console.log(padding + 'px');
    } else {
        console.log(padding);
    }
}

returnPadding(10);
returnPadding('20px');
// returnPadding(true);

// Generics
function abcd <T>(param:T) {
    console.log(typeof param);
}

abcd<number>(1);
abcd<string>('hello');
abcd<boolean>(true);

// var saket = new feb09.m1.colony();

// Decorators - function

// Class decorators
// Method decorators
// Property decorators
// Parameter decorators

// Class decorator

function setSkill(target) {
    target.prototype.skill = 'batting';
}

@setSkill
class game{
    skill;
}

function setnewskill(param) {
    return function (target) {
        target.prototype.skill = param;
    }
}

@setnewskill('front')
class football {
    skill;
}
var myplayer = new football();
console.log(myplayer.skill);