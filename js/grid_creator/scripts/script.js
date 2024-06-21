

// grab all radio type inputs
const radioButtons = document.querySelectorAll('input[type="radio"]');
// add event listeners to all radio inputs
radioButtons.forEach(elem =>
    elem.addEventListener("change",  event => reportValue(event))
);


function reportValue(value) {
    console.log(value.target.id);
}