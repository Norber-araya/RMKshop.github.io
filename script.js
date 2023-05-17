const hamburguesa = document.querySelector(".hamburguesa");
const navLink = document.querySelector(".navLink");

hamburguesa.addEventListener("click", () => {
 hamburguesa.classList.toggle("active");
   navLink.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguesa.classList.remove("active");
    navLink.classList.remove("active");
   }
))

const FulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    FulImgBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    FulImgBox.style.display = "none";
    
}


