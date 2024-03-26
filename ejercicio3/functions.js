var lightStatus = true
var textStatus = true

function changeColor() {
    var elements = document.getElementsByClassName("color");//get all elements with class name color

    if (lightStatus == false) {
        for (let index = 0; index < elements.length; index++) {
            elements[index].computedStyleMap.style.color = "black"
        }

        document.getElementById(container).style.backgroundecolor = "rgba(255, 255, 255, 0.7)"
        lightStatus = true;
    } else {
        for (let index = 0; index < elements.length; index++) {
            elements[index].computedStyleMap.style.color = "white"
        }
        document.getElementById(container).style.backgroundecolor = "rgba(0, 0, 0, 0.7)"
        lightStatus = false;
    }
}

function changeContent() {
    if (contentStatus == false) {

        document.getElementById("carSecondImage").src="assets/modelLS.avif"
        contentStatus = true;
    } else {
        document.getElementById("carSecondImage").src="./assets/lambo.jpeg"
        contentStatus = false;
    }
}