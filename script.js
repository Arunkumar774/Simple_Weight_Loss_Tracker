const bslide1 = document.getElementById("bottom-slide1");
const bslide2 = document.getElementById("bottom-slide2");
const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
bslide1.onclick = () => {
    secondPage.style.display = "block";
    firstPage.style.display = "none";
}