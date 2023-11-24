class Student{
    rollno:number;
    name:string;
    maths:number;
    physics:number;
    chemistry:number;
    total:number;
    Percentage:Number;
     constructor(rollno,name,maths,physics,chemistry){
         this.rollno = rollno;
         this.name=name;
         this.maths=maths;
         this.physics=physics;
         this.chemistry=chemistry;
     }
    calculate(){
        this.total=this.maths + this.physics+this.chemistry;
        this.Percentage=this.total/3;
    }
    print()
    {
        console.log(this.total);
        console.log(this.Percentage);
    }
 }

 const s = new Student(1,"Shreya",80,60,50);
 s.calculate();
   s.print();
