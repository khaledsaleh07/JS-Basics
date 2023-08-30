const newDiv = document.createElement("div");
newDiv.id = "new-div";
document.body.appendChild(newDiv);


const input_element = document.querySelector("#name");

input_element.addEventListener("change", () => {
    document.querySelector("#new-div").innerHTML = "<h1>" + input_element.value + "</h1>";
});