"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var school = (function () {
    function school(school) {
        this.schoolName = school;
    }
    school.prototype.getschoolName = function () {
        return this.schoolName;
    };
    return school;
}());
var student = (function (_super) {
    __extends(student, _super);
    function student(myname, classname, school) {
        var _this = _super.call(this, school) || this;
        _this.name = myname;
        _this.class = classname;
        return _this;
    }
    student.prototype.getSchoolName = function () {
        console.log(_super.prototype.getschoolName.call(this));
    };
    return student;
}(school));
var nitin = new student('nitin', 12, 'ABC school');
var amit = new student('Amit', 11, 'BCD school');
var car = (function () {
    function car() {
    }
    return car;
}());
var m1;
(function (m1) {
    var colony = (function () {
        function colony() {
        }
        return colony;
    }());
    m1.colony = colony;
})(m1 = exports.m1 || (exports.m1 = {}));
var dwarka = new m1.colony();
//# sourceMappingURL=feb_09.js.map