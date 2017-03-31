//refers to anonymous function
//concise mechanisms to represent anonymous function
//Arrow function
//([param1, param2, ...]) => statement;
//add code block {}

var lambdaFunc = function() {
    var element = document.getElementById("lambda"),
        appendContent,
        lambdaFunction = (param1) => param1 * 10;

        appendContent = '<p>' + lambdaFunction(10) + '</p>';
        element.insertAdjacentHTML('beforeend',appendContent);
}

module.exports = lambdaFunc;