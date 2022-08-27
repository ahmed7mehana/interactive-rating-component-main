let rate =document.querySelector(".rate")
let submit =document.querySelector(".submit")
let main =document.querySelector(".main-contaner")
let rates =document.querySelectorAll(".btn")
let thank =document.querySelector(".thank-u")


submit.addEventListener("click",()=>{
thank.classList.remove("hide")
main.style.display="none"
})



rates.forEach((e)=>{
e.addEventListener("click",()=>{
rate.innerHTML = e.innerHTML
})
})