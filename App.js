let outputScreen = document.getElementById("output-screen");
const slideOpen = document.getElementById("slideOpen");
const slideHide = document.getElementById("slideHide");
const slide = document.querySelector(".slide");

slideOpen.addEventListener("mouseenter", () => {
    slide.classList.add("Open");
});
slideHide.addEventListener("mouseenter", () => {
    slide.classList.add("Close");
});



function display(num) {

    outputScreen.value += num;

}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);

    }
    catch (err) {
        outputScreen.value = "Invaild";
    }
}
function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}