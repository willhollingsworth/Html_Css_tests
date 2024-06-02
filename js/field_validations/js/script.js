function buttonClick(){
    let results = validate();
    errorBox = document.getElementById("errors");
    removeAllChildren(errorBox);
    addMultipleDivs(errorBox, results);
}

function removeAllChildren(parent){
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
    for (let item of list){
        let newDiv = document.createElement("div");
        newDiv.innerHTML = item;
        parent.appendChild(newDiv);
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
                results.push(field.id + ' is failing check: ' + key);
            }
        }
    }
    return results;

}