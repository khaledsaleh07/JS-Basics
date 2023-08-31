const make_green = document.querySelector('.green');
const make_red = document.querySelector('.red');
const make_blue = document.querySelector('.blue');
const target_text = document.querySelector('#text');


make_blue.addEventListener('click', () => {
    target_text.style.color = "blue";
});

make_green.addEventListener('click', () => {
    target_text.style.color = "green";
});

make_red.addEventListener('click', () => {
    target_text.style.color = "red";
});