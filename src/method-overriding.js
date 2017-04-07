// ======= Method Overriding ======== //
class classA {
    _print() {
        console.log("This is class A");
    }
    _printSuper() {
        console.log("calling using super");
    }
}

export default class classB extends classA {
    _print() {
        // child class can invokes its parent class data member
        // using super keyword
        super._printSuper();
        console.log("This is class B");
    }
}