// let message = "Hello Typescript";
// console.log(message)
var Date1 = /** @class */ (function () {
    function Date1(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Date1.prototype.Print = function () {
        console.log(this.day + "/" + this.month + "/" + this.year);
    };
    return Date1;
}());
var d = new Date1(23, "Nov", 2023);
