const first_name = document.querySelector("#name");
const sur_name = document.querySelector("#surname");
const city = document.querySelector("#city");

document.querySelector("button").addEventListener("click", () => {
    const check = window.confirm("Reset?")
    if (check) {
        first_name.value = "";
        sur_name.value = "";
        city.value = "";
    }
})