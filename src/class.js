// object : real time representation of any entity
// class : blueprint for creating onject
// syntax class Class_name
// ** in class **
// constructors : Responsible for allocating memory for the objects of the class
// functions : actions an object can take
export default class ClassCar {
    constructor(manufacturer, year) {
        this.manufacturer = manufacturer;
        this.year = year;
    }
    _printDetails() {
        console.log(`This is ${this.year} ${this.manufacturer}`);
    }

    //static method : can be called using class name
    //do not require object
    static staticFunction() {
        console.log("static function called");
    }
}