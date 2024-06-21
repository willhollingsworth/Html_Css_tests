

// grab all radio type inputs
const radioButtons = document.querySelectorAll('input[type="radio"]');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => radioEvent(event))
);

// select grid element to later manipulate
gridElement = document.querySelector("#grid");

function radioEvent(event){
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

