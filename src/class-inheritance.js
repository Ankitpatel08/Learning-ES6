import ClassCar from "./class";
// Inheritance : create new entities form existing entities
// parent class -> child class
// using extends keyword  : class child extends parent
export default class ClassCategory extends ClassCar {
    _printCategory(category) {
        console.log(`this is of ${category} category`);
    }
}

//Type of inheritance
// 1. Single : class can at the most extend from one parent class
// 2. multilevel : superchild
//                     ^
//                     |
//                   child
//                     ^
//                     |
//                   parent
// class child extends parent & class superchild extends child