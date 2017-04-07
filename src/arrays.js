// array : homogenous collection of values

export default class arrays {
    constructor() {
        var numbers = [1, 2, 3, 4, 5];
        console.log("first element", numbers[0]);

        //array.length property
        console.log("array length", numbers.length);

        //Array object
        var arrayNew = new Array(5);
        for (let index; index < arrayNew.length; index++) {
            arrayNew[index] = index * 2;
            console.log(arrayNew[index]);
        }

        //array constructor accepts comma separated values
        var employees = new Array('person1', 'person2', 'person3');

        //ES6 Array Methods
        //Array.prototype.find : iterates through array, find first element which
        //satisfy given condition in callback function
        var number = [2, 3, 4, 5, 6],
            oddNumber = number.find((x) => x % 2 == 1);
        console.log("array oddNumber", oddNumber);

        //Array.prototype.findIndex : return index of element
        var numberIndex = [5, 5, 3, 2, 5, 6],
            oddNumberIndex = numberIndex.findIndex((x) => x % 2 == 1);
        console.log("array index of oddNumber", oddNumberIndex);

        //Array.prototype.entries : returns array of arrays
        // : child array [index, value]
        var arrayEntries = [1, 2, 3],
            resultArray = arrayEntries.entries();
        console.log("array Entries - 1", resultArray.next().value);
        console.log("array Entries - 2", [...resultArray]);

        //Array.from : create array from array like values, object, Iterables : Set/Map
        var Str1 = "Hello Ankit",
            arrayFrom = Array.from(Str1);
        for (let index of arrayFrom) {
            console.log("arrayFrom", index);
        }

        //Array.from.keys() : returns the array indexes
        var arrayKeys = Array.from(arrayFrom.keys());
        console.log("Array.from.keys()", arrayKeys);

        // destructure the array and store in individual variable
        var arrayDestruct = ['a', 'b', 'c'],
            [x, y, z] = arrayDestruct;
        console.log("arrayDestruct x", x);
        console.log("arrayDestruct y", y);

    }
}