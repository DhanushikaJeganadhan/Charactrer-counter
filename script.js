const textarea=document.getElementById("textarea");
const total=document.getElementById("total")
const remain=document.getElementById("remaining")
textarea.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
  total.innerText=  textarea.value.length
  remain.innerText=textarea.getAttribute("Maxlenght")-total.innerText

}
