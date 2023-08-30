const imageConainer = document.querySelector(".container");


window.addEventListener("load", () => {
    imageConainer.children[0].addEventListener("mouseover", () => {
        imageConainer.children[0].src = "images/image1_2.jpg";
    });
    imageConainer.children[1].addEventListener("mouseover", () => {
        imageConainer.children[1].src = "images/image2_2.jpg";
    });
    imageConainer.children[2].addEventListener("mouseover", () => {
        imageConainer.children[2].src = "images/image3_2.jpg";
    });
    imageConainer.children[3].addEventListener("mouseover", () => {
        imageConainer.children[3].src = "images/image4_2.jpg";
    });
    imageConainer.children[4].addEventListener("mouseover", () => {
        imageConainer.children[4].src = "images/image5_2.jpg";
    });
})
