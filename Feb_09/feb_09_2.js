var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var num;
var str;
var isTrue;
var numArray;
var strArray = [];
var x;
var anyArray = [1, "", true];
var myTuple;
myTuple = [1, "", 1, "", "", 2, 2, 2, 2, 2, 2];
var myEnum;
(function (myEnum) {
    myEnum[myEnum["Milk"] = 21] = "Milk";
    myEnum[myEnum["Coffee"] = 20] = "Coffee";
    myEnum[myEnum["Tea"] = 21] = "Tea";
})(myEnum || (myEnum = {}));
;
var myobj = myEnum[21];
var newobj = myEnum.Milk;
function myFunction(name) {
    console.log(name);
    return 1;
}
function returnPadding(padding) {
    if (typeof padding == "number") {
        console.log(padding + 'px');
    }
    else {
        console.log(padding);
    }
}
returnPadding(10);
returnPadding('20px');
function abcd(param) {
    console.log(typeof param);
}
abcd(1);
abcd('hello');
abcd(true);
function setSkill(target) {
    target.prototype.skill = 'batting';
}
var game = (function () {
    function game() {
    }
    game = __decorate([
        setSkill
    ], game);
    return game;
}());
function setnewskill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
var football = (function () {
    function football() {
    }
    football = __decorate([
        setnewskill('front')
    ], football);
    return football;
}());
var myplayer = new football();
console.log(myplayer.skill);
//# sourceMappingURL=feb_09_2.js.map