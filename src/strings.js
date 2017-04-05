export default class strings {
    constructor() {
        //string object
        var str = "Ankit Patel";
        var str1 = new String(str);
        console.log(str1);
        //string properties
        // 1. length
        // 2. constructor
        // 3. prototype
        console.log("string.length", str1.length);
        console.log("string.constructor", str1.constructor);

        // startsWith
        var strStart = "Hello Ankit";
        console.log("string start", strStart.startsWith('Hello'));
        console.log("string start", strStart.startsWith('Hello', 1));

        //endsWith
        var strEnd = "Ankit Hello";
        console.log("string ends", strEnd.endsWith('Hello'));
        console.log("string ends", strEnd.endsWith('Hello', 1));

        //includes
        var strInclude = "Hello Ankit";
        console.log("string includes", strInclude.includes('Ankit'));

        //includes
        var strRepeat = "Hello Ankit";
        console.log("string repeat", strRepeat.repeat(5));

        // string Interpolation and Template Literals
        // templateStrings use back-ticks(` `)
        var strTemp = "Ankit";
        console.log(`Hello ${strTemp}`);

        var num1 = 10, num2 = 20;
        console.log(`addition : ${num1 + num2}`);

        //multi line string
        var strMulti = `this
                        is
                        multi
                        line`;
        console.log(`multi line string  ${strMulti} `);

        //String.raw
        var strRaw = String.raw`Hello \n Ankit`;
        console.log(strRaw);

        //string.fromCodePoint()
        console.log(String.fromCodePoint(65));

    }
}

//========================= String Methods ===================================//
// 1. charAt()
// 2. charCodeAt()
// 3. concat()
// 4. indexOf()
// 5. lastIndexOf()
// 6. localeCompare()
// 7. match()
// 8. replace()
// 9. search()
// 10. slice()
// 11. split()
// 12. substr()
// 13. substring()
// 14. toLocaleLowerCase()
// 15. toLocaleUpperCase()
// 16. toLowerCase()
// 17. toString()
// 18. toUpperCase()
// 19. valueOf()

//========================= String New Methods ===============================//
// 1. String.prototype.startsWith(searchString, position = 0) : returns true if
//    the receiver starts with searchString, Position for where to start
//
// 2. String.prototype.endsWith(searchString, position = 0) : returns true if
//    the receiver ends with searchString, Position for where to start
//
// 3. String.prototype.includes(searchString, position = 0)
//    String contains searchString
//
// 4. String.prototype.repeat(count)
//    concatenated count times