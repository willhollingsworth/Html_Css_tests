// TODO: Build out ui radio boxes programmatically with code and a simple object
// TODO: build better/ more automated radio value grabbing and style setting logic
//          - rely less on static set values except where defined in an object
//
// FIXME: grid lines / overlays don't work when you change justify items/ align items




// grab all radio type inputs
const radioButtons = document.querySelectorAll('input');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => inputEvent(event))
);

// select grid element to later manipulate
gridElement = document.querySelector("#grid");

function inputEvent(event){
    changeGridProperties();
}

function changeGridProperties(){
    changeColumns()
    changeRows()
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

function changeGridLinesWidth(value) {
    selectBeforeRule().style.width = Math.floor(value) + "px"
    console.log(value, Math.floor(value))
}
function changeGridLinesHeight(value) {
    selectBeforeRule().style.height = Math.floor(value) + "px"
}

function selectBeforeRule(){
    let cssRules = document.styleSheets[0].cssRules
    let beforeRule
    for (rule of cssRules) {
        if (rule.selectorText == "#grid > div::before"){
            beforeRule = rule
        }
    }
    return beforeRule
}


function changeColumns(){
    let columnsState = getCheckBoxValue("columnsEnable");
    let overlayWidth = 0;
    let gridWidth = document.querySelector("#grid").offsetWidth;
    if (columnsState) {
        // get column count
        let columnCountValue = getSimpleValue("columnsCount");
        // get column size type
        let columnSizeValue = getRadioValue("formColumnSize");
        // get column size value 
        let columnSizeNumberValue = getSimpleValue("columnSizeNumber")
        // set percent format 
        if  (columnSizeValue == "Percent"){
            columnSizeValue = `${columnSizeNumberValue}%`
            overlayWidth = gridWidth * columnSizeNumberValue / 100;
        } else {
            overlayWidth = gridWidth / columnCountValue
        }
        // build and use column size and count values
        let columnsCountString = `repeat(${columnCountValue}, ${columnSizeValue})`
        changeStyle(columnsCountString, "grid-template-columns")
    } else {
        // set to default
        changeStyle("revert", "grid-template-columns")
        overlayWidth = document.querySelector("#grid > div").offsetWidth
    }
    changeGridLinesWidth(overlayWidth)
}

function changeRows(){
    let rowsState = getCheckBoxValue("rowsEnable");
    let overlayHeight = 0;
    let gridHeight = document.querySelector("#grid").offsetHeight;
    if (rowsState) {
        // get row count
        let rowCountValue = getSimpleValue("rowsCount");
        // get row size type
        let rowSizeValue = getRadioValue("formRowSize");
        // get row size value 
        let rowSizeNumberValue = getSimpleValue("rowSizeNumber")
        // set percent format 
        if  (rowSizeValue == "Percent"){
            rowSizeValue = `${rowSizeNumberValue}%`
            overlayHeight = gridHeight * rowSizeNumberValue / 100;

        } else {
            overlayHeight = gridHeight / rowCountValue
        }
        // build and use row size and count values
        let rowsCountString = `repeat(${rowCountValue}, ${rowSizeValue})`
        changeStyle(rowsCountString, "grid-template-rows")

    } else {
        // set to default
        changeStyle("revert", "grid-template-rows")
        overlayHeight = document.querySelector("#grid > div").offsetHeight
    }
    changeGridLinesHeight(overlayHeight)
}

function changeStyle(value,style) {
    // console.log("change stye " + style +" to :" + value);
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

function getCheckBoxValue(className) {
    let element = document.querySelector("#" + className);
    let value = element.checked;
    return value;
}
