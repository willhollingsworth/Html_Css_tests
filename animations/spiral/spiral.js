const first_div = document.querySelector("div div");
const parent = document.querySelector("div");
const spiral_count = 50;
for (let i = 0; i < spiral_count; i++) {
    let x = first_div.cloneNode(true);
    parent.appendChild(x);
    let spiral_rotation = 360/spiral_count * i
    x.style.transform = `rotate(${spiral_rotation}deg)`;
    x.style.borderLeftColor = `hsl(${spiral_rotation}deg 75% 25%)`;
};