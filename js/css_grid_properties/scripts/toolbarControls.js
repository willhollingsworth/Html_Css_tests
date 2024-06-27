// TODO: Build out ui radio boxes programmatically with code and a simple object
// TODO: build better/ more automated radio value grabbing and style setting logic
//          - rely less on static set values except where defined in an object
//

// grab all radio type inputs
const radioButtons = document.querySelectorAll('input');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => inputEvent(event))
);

window.addEventListener("resize",  event => inputEvent(event));

// select grid element to later manipulate
gridElement = document.querySelector("#grid");

function inputEvent(event){
    changeGridProperties();
    setGridOverlay();
    setGridChildCount();
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
        }
        // build and use column size and count values
        let columnsCountString = `repeat(${columnCountValue}, ${columnSizeValue})`
        changeStyle(columnsCountString, "grid-template-columns")
    } else {
        // set to default
        changeStyle("revert", "grid-template-columns")
    }
}

function changeRows(){
    let rowsState = getCheckBoxValue("rowsEnable");
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
        }
        // build and use row size and count values
        let rowsCountString = `repeat(${rowCountValue}, ${rowSizeValue})`
        changeStyle(rowsCountString, "grid-template-rows")
    } else {
        // set to default
        changeStyle("revert", "grid-template-rows")
    }
}

function setGridOverlay(){
    setGridOverlayDimensions();
    setGridOverlayOffsets();
    setGridOverlayViability();
}

function setGridOverlayDimensions(){
    // Width and columns
    let overlayWidth = 0;
    let gridWidth = document.querySelector("#grid").offsetWidth;
    if  (getRadioValue("formColumnSize") == "Percent"){
        overlayWidth = gridWidth * getSimpleValue("columnSizeNumber") / 100;
    } else {
        overlayWidth = gridWidth / getSimpleValue("columnsCount")
    }
    if (!getCheckBoxValue("columnsEnable")){
        // if rows state is disabled set width to div size
        overlayWidth = document.querySelector("#grid > div").offsetWidth
    }
    selectBeforeRule().style.width = overlayWidth + "px"

    // Height / rows
    let overlayHeight = 0;
    let gridHeight = document.querySelector("#grid").offsetHeight;
    if  (getRadioValue("formRowSize") == "Percent"){
        // if manual percentage
        overlayHeight = gridHeight * getSimpleValue("rowSizeNumber") / 100;
    } else {
        // if 1fr
        overlayHeight = gridHeight / getSimpleValue("rowsCount")
    }
    if (!getCheckBoxValue("rowsEnable")){
        // if column state is disabled set height to div size
        overlayHeight = document.querySelector("#grid > div").offsetHeight
    }
    selectBeforeRule().style.height = overlayHeight + "px"
}

function setGridOverlayOffsets(){
    // set grid overlay offsets 
    // set horizontal offsets
    let justifyValue = getRadioValue("formJustify")
    selectBeforeRule().style.left = "initial"
    selectBeforeRule().style.right = "initial"
    if (justifyValue == "Start"){
        selectBeforeRule().style.left = "0px"
    } else if (justifyValue == "End"){
        selectBeforeRule().style.right = "0px"
    }
    // set vertical offsets
    let alignValue = getRadioValue("formAlign")
    selectBeforeRule().style.top = "initial"
    selectBeforeRule().style.bottom = "initial"
    if (alignValue == "Start"){
        selectBeforeRule().style.top = "0px"
    } else if (alignValue == "End"){
        selectBeforeRule().style.bottom = "0px"
    }
}

function setGridOverlayViability(){
    if (!getCheckBoxValue("overlayEnable")){
        selectBeforeRule().style.border = "1px solid transparent"
    } else {
        selectBeforeRule().style.border = "1px solid #f005"
    }
}

function setGridChildCount(){
    // set the number of grid elements / children
    // grab element count
    let childCount = getSimpleValue("gridElementCount")
    // select grid
    let parent = document.querySelector("#grid")
    // delete all current children
    parent.innerHTML = ""
    // run a loop for each child
    for (let i = 1; i <= childCount; i++) {
        // create new child
        newChild = document.createElement("div")
        newChild.innerHTML = i
        parent.appendChild(newChild)
    }
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
