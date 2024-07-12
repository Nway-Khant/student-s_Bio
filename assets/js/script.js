// window.alert("hi")
const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
    // hexagon
    "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
    // Tra
    "20% 0%, 80% 0%, 100% 100%, 0% 100%",
    // poli
    "30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%",
    // poli
    "50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%",

    "25% 40% at 50% 50%",

];

function changeShape(){
    const ramdomShape = Math.floor(Math.random()
    *shapeArr.length);
    const newClipPath = shapeArr[ramdomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");

    // img.style.setProperty("")
    if (currentClipPath !== newClipPath){
        img.style.setProperty("--shape", newClipPath);
    } else {
        img.style.setProperty("--shape", shapeArr[ramdomShape + 1]);
        console.log(shapeArr[raq + 1]);
    }
}
