//Number object represents numerical data, integers or floating-point numbers

 export default class numbers {
    constructor() {
        //creating number object
        var number = 10;
        var val1 = new Number(number);
        console.log("Numbers | val1", val1);

        //argument which can not be converted into number. it returns NaN
        number = "Ankit";
        var val2 = new Number(number);
        console.log("Numbers | val2", val2);
    }
 }

 //============================ Number Properties ============================//
 // 1. Number.EPSILON : smallest interval between two representable numbers
 // 2. Number.MAX_SAFE_INTEGER : 2^53 - 1
 // 3. Number.MAX_VALUE : largest representable number
 // 4. MIN_SAFE_INTEGER : (-(2^53 - 1))
 // 5. Number.MIN_VALUE : positive number closest to zero
 // 6. Number.Nan : not a number
 // 7. Number.NEGATIVE_INFINITY : negative infinity; return on overflow
 // 8. Number.POSITIVE_INFINITY : positive infinitu; return on overflow
 // 9. Number.prototype : infinity; return on overflow

 //============================= Number Methods ==============================//
 // 1. Number.isNaN() : passed value is NaN
 // 2. Number.isFinite()
 // 3. Number.isInteger()
 // 4. Number.isSafeInteger()
 // 5. Number.parseFloat()
 // 6. Number.parseInt()

 //========================= Number Instance Methods =========================//
 // 1. toExponential()
 // 2. toFixed()
 // 3. toLocaleString()
 // 4. toPrecision()
 // 5. toString()
 // 6. valueOf()

//============================= Octal or Binary ==============================//
// 0b : binary | eg. 0b001, 0b010
// // 0o : octal | eg. 0o001, 0o010