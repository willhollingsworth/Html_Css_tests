function buttonClick(){
    // setup headers
    let results = [];
    // populate list with validation results
    let validationResults =validate()
    if (validationResults.length > 0) {
        results = [['Field', 'Error']]
        results = results.concat(validate());
    } else{
        results = [[[],[]], [['No errors found'],[]]]
    }
    validationResults
    // select the error div
    errorBox = document.getElementById("errors");
    removeAllChildren(errorBox);
    // populate error div with validation results
    addMultipleDivs(errorBox, results);
}

function removeAllChildren(parent){
    // remove all children of a parent element
    let children;
    try {
        children = parent.children;
        // console.log(children.length + ' children found')
    } catch {
        // console.log("No children found");
        return;
    }
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addMultipleDivs(parent, list){
    // add divs to a parent based on a list of items
    for (let row of list){
        for (let item of row){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = item;
            parent.appendChild(newDiv);
        }
    }
}

function validate(){
    // grab all items that are an input
    const INPUTS = document.querySelectorAll('input');
    let checks = {};
    let checkKeys = [];
    let checkValues = [];
    let fail_index = 0;
    let results = [];

    for(let field of INPUTS){
        // create an object that contains the check's name and it's check conditions
        checks = {
            'too small' : field.value.length > 1,
            'too large' : field.value.length < 6,
            'contains a !' : !field.value.includes('!'),
        };
        checkKeys = Object.keys(checks);
        checkValues = Object.values(checks);
        // if any check fails
        for (let key in checks){
            value = checks[key];
            if (!value){
                results.push([field.name, key]);
            }
        }
    }
    return results;

}