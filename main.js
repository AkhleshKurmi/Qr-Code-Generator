
let imgcontainer= document.querySelector(".card1")
let imgBox = document.querySelector(".imgBox")
let inputText = document.querySelector(".inputText")
let qrText = document.querySelector(".text")

    

 function generateQr(){

    imgBox.src =" https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+ inputText.value;

    qrText.innerHTML=`"Qr Code of<b><i><u> ${inputText.value}</b></i></u>"`;
 }
  let btn = document.querySelector(".btn")

  btn.addEventListener("click", ()=>{
    generateQr();
  })