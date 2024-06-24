// TODO: Build out ui radio boxes programmatically with code and a simple object
// TODO: build better/ more automated radio value grabbing and style setting logic
//          - rely less on static set values except where defined in an object

// grab all radio type inputs
const radioButtons = document.querySelectorAll('input');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => inputEvent(event))
);

// select grid element to later manipulate
gridElement = document.querySelector("#grid");

function inputEvent(event){
    // get column count
    let columnCountValue = getSimpleValue("columnsCount");
    // get column size type
    let columnSizeValue = getRadioValue("formColumnSize");
    // get column size value 
    let columnSizeNumberValue = getSimpleValue("columnSizeNumber")
    // set percent format 
    if  (columnSizeValue == "Percent"){
        columnSizeValue = `${columnSizeNumberValue}%`
    }
    // build and use column size and count values
    let columnsCountString = `repeat(${columnCountValue}, ${columnSizeValue})`
    changeStyle(columnsCountString, "grid-template-columns")

    // get and set justify items
    let justifyValue = getRadioValue("formJustify")
    changeStyle(justifyValue, "justify-items")

    // get and set align items
    let alignValue = getRadioValue("formAlign")
    changeStyle(alignValue, "align-items")

    // get and set justify content
    let justifyContentValue = getRadioValue("formJustifyContent")
    changeStyle(justifyContentValue, "justify-content")

    // get and set align content
    let alignContentValue = getRadioValue("formAlignContent")
    changeStyle(alignContentValue, "align-content")
}

function changeStyle(value,style) {
    console.log("change stye " + style +" to :" + value);
    gridElement.style[style] = value;
}

function getSimpleValue(className) {
    let element = document.querySelector("#" + className);
    let value = element.value;
    return value;
}

function getRadioValue(className) {
    let element = document.querySelector("#" + className);
    let name = element[0].name;
    let value = element.elements[name].value;
    return value;
}
