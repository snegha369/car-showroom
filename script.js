class car{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    age(){
        const date=new date();
        return date.getFullyear()-this.year;
    }
}
const mycar=new car("Ford",2014);
document.getElementById("demo").innerHTML="My car is" +mycar.age()+"years old.";