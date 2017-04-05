//object is an instance which contains a set of key 'value' pair
//'value's can be scalar or functions or even array of other objects

export default class objects {
    constructor() {
        // properties : content of object
        // property : key -> 'value' pair
        // case-sensitive
        var object1 = {
            key1: 'value',
            key2: function() {

            },
            key3: ["value1", "value2"]
        }

        //access the object 'value'
        object1.key1
        object1.key2()

        //####################################################################//

        //ES6 implicicitly assigns the 'value' of obj1 to the obj2's key obj1
        var obj1 = 'test'
        var obj2 = { obj1 }
        obj2.obj1

        //The object() constructor
        var objConst = new Object();
        objConst.prop = 'value';
        objConst["key"] = 'value';

        //unassigned properties of an object are undefined

        //####################################################################//

        //Objects can be created using two methods
        // 1. constructor function
        function function1() {
            this.prop1 = 'value';
        }

        //example
        function Person() {
            this.firstName = "Ankit";
            this.lastName = "Patel";
        }

        var person1 = new Person();
        console.log("constructor function", person1.firstName);
        console.log("constructor function", person1.lastName);

        // - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - - - - - //

        //2. create instance of object using new syntax
        var objNew = new function() {
            //access the property 'value'
        }

        objNew.prop = 'value'

        //####################################################################//

        //Object can be created using Object.create Method
        var company = {
            sector: 'IT',
            estYear: '1995',
            displayDetails: function() {
                console.log("object using new", this.sector, this.estYear);
            }
        }

        var company1 = Object.create(company);
        company1.displayDetails();

        //override the default properties
        var company2 = Object.create(company);
        company2.sector = 'Manufacturing';
        company2.estYear = '2000';
        company2.displayDetails();

        //####################################################################//
        //Object.assign()
        //used to copy the 'value's of n number of src objects to target object

        //copy object
        var objCopy1 = { key1: 'value1', key2: 'value2' };
        var objCopy2 = Object.assign({}, objCopy1);
        for (let val in objCopy2) {
            console.log("copy object",objCopy2[val]);
        }

        //Merging object
        var objMerge1 = { 'key1': 'value1' };
        var objMerge2 = { 'key2': 'value2' };

        var objMerge = Object.assign(objMerge1, objMerge2);
        console.log("Merging object", objMerge);

        //Merged object holds reference to the property contained in object
        //change in prop of original object reflacts in merged object

        //Deleting properties
        //removing property using delete
        var objDelete1 = { 'key1': 'value1', 'key2': 'value2' };

        delete objDelete1.key1;
        console.log("Delete property",'key1' in objDelete1);

        //####################################################################//

        //Comparing objects
        //two distinct objects are never equal
        var objCompare1 = { 'key1': 'value1' };
        var objCompare2 = { 'key1': 'value1' };
        console.log("obj compare + == ",objCompare1 == objCompare2);  //false
        console.log("obj compare + === ",objCompare1 === objCompare2);  //false

        //single object reference
        var objCompare1 = { 'key1': 'value1' };
        var objCompare2 = objCompare1;
        console.log("obj compare + == ",objCompare1 == objCompare2);  //true
        console.log("obj compare + === ",objCompare1 === objCompare2);  //true

        //####################################################################//

        //object De-structuring
        //extract data from arrays or objects into distinct variables
        var person = { 'firstName': 'Ankit', 'lastName': 'Patel', 'age': 22 };
        var {firstName, lastName} = person;
        console.log("object De-structuring | firstName", firstName);
        console.log("object De-structuring | lastName", lastName);
        //console.log("object De-structuring | age", age);
    }
};
