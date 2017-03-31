//anonymous function : multiply two number
//Functions that are not bound to an identifier(function name)
//dynamically declared at runtime
var anonymousFunc = function (param1, param2) {
    var element = document.getElementById('anonymous'),
        appendContent = '<p>' + param1 * param2 + '</p>',
        funcConstructor,
        content2,
        appendContent2;

    //function constructor
    //define function dynamically along with new keywords
    funcConstructor = new Function("return 'hello I am fucntion using constructor';");
    content2 = funcConstructor();
    appendContent2 = '<p>' + content2 + '</p>';

    element.insertAdjacentHTML('beforeend', appendContent + appendContent2);
}

module.exports = anonymousFunc;