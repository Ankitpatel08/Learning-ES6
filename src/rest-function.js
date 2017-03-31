// REST parameters
// same as variable arguments in java
// multiple arguments of the same type
function restParameters(...params) {
    var element = document.getElementById('rest'),
        appendContent = '<p>' + params.length + '</p>';

    console.log("param length",params.length);
    element.insertAdjacentHTML('beforeend', appendContent);
}

module.exports = restParameters;

