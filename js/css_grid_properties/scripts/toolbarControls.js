// TODO: Build out ui radio boxes programmatically with code and a simple object
// TODO: build better/ more automated radio value grabbing and style setting logic
//          - rely less on static set values except where defined in an object


// grab all radio type inputs
const radioButtons = document.querySelectorAll('input');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => radioEvent(event))
);

// select grid element to later manipulate
gridElement = document.querySelector("#grid");

function radioEvent(event){
    // set columns
    let columnElement = document.querySelector("#columns");
    let columnValue = columnElement.value;
    let columnsString = `repeat(${columnValue}, 1fr)`
    changeStyle(columnsString, "grid-template-columns")

    // set justify
    let justifyFormElement = document.querySelector("#formJustify");
    let justifyValue = justifyFormElement.elements['justify'].value;
    changeStyle(justifyValue, "justify-items")

    // set align
    let alignFormElement = document.querySelector("#formAlign");
    let alignValue = alignFormElement.elements['align'].value;
    changeStyle(alignValue, "align-items")
}


function changeStyle(value,style) {
    console.log("change stye " + style +" to :" + value);
    gridElement.style[style] = value;
}

