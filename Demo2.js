var Student = /** @class */ (function () {
    function Student(rollno, name, maths, physics, chemistry) {
        this.rollno = rollno;
        this.name = name;
        this.maths = maths;
        this.physics = physics;
        this.chemistry = chemistry;
    }
    Student.prototype.calculate = function () {
        this.total = this.maths + this.physics + this.chemistry;
        this.Percentage = this.total / 3;
    };
    Student.prototype.print = function () {
        console.log(this.total);
        console.log(this.Percentage);
    };
    return Student;
}());
var s = new Student(1, "Shreya", 80, 60, 50);
s.calculate();
s.print();
