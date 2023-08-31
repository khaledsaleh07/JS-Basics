const btn = document.querySelector('button');
const pw = document.querySelector('#password');
const cpw = document.querySelector('#confirmation');



btn.addEventListener("click", () => {
    if (cpw.value !== pw.value) {
        pw.style.border = 'solid red';
        cpw.style.border = 'solid red';
    }
});