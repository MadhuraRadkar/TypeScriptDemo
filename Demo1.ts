// let message = "Hello Typescript";
// console.log(message)




class Date1
{
    day:Number;
    month:String;
    year:Number;
    constructor(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
    Print(){
        console.log(this.day+"/"+this.month+"/"+this.year);
    }
}

const d = new Date1(23,"Nov",2023);
