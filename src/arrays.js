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
        var number = [2, 3, 4, 5, 6];
        var oddNumber = number.find((x) => x % 2 == 1);
        console.log("array oddNumber", oddNumber);

        //Array.prototype.findIndex : return index of element
        var numberIndex = [5, 5, 3, 2, 5, 6];
        var oddNumberIndex = numberIndex.findIndex((x) => x % 2 == 1);
        console.log("array index of oddNumber", oddNumberIndex);
    }
}