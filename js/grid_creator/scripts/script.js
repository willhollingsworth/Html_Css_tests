const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[type="radio"]');


radioButtons.forEach(elem =>
    elem.addEventListener("change",  function(e) { console.log(e.target.id);})
);

// function reportValue(value) {
//     console.log(value);
// }