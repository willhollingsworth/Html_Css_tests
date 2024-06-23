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
    // get column count
    let columnCountElement = document.querySelector("#columns");
    let columnCountValue = columnCountElement.value;
    // get column size type
    let columnSizeElement = document.querySelector("#formColumnSize");
    let columnSizeValue = columnSizeElement.elements['columnSize'].value;
    //get column size value 
    let columnSizeNumberElement = document.querySelector("#columnSizeNumber");
    let columnSizeNumberValue = columnSizeNumberElement.value;

    

    if  (columnSizeValue == "Percent"){
        columnSizeValue = `${columnSizeNumberValue}%`
    }
    let columnsCountString = `repeat(${columnCountValue}, ${columnSizeValue})`
    changeStyle(columnsCountString, "grid-template-columns")

    // set justify items
    let justifyFormElement = document.querySelector("#formJustify");
    let justifyValue = justifyFormElement.elements['justify'].value;
    changeStyle(justifyValue, "justify-items")

    // set align items
    let alignFormElement = document.querySelector("#formAlign");
    let alignValue = alignFormElement.elements['align'].value;
    changeStyle(alignValue, "align-items")

    // set justify content
    let justifyContentFormElement = document.querySelector("#formJustifyContent");
    let justifyContentValue = justifyContentFormElement.elements['justifyContent'].value;
    changeStyle(justifyContentValue, "justify-content")

    // set align content
    let alignContentFormElement = document.querySelector("#formAlignContent");
    let alignContentValue = alignContentFormElement.elements['alignContent'].value;
    changeStyle(alignContentValue, "align-content")



}


function changeStyle(value,style) {
    console.log("change stye " + style +" to :" + value);
    gridElement.style[style] = value;
}

