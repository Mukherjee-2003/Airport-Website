let menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px";

function toggleMenu() {
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="max-content";
    }
    else {
        menuList.style.maxHeight="0px";
    }
}
// ------SUBSCRIBE JS------------
const mail = document.getElementById("email");
const mailErr= document.querySelector(".mailErr");

mail.addEventListener('input', mailCheck);

// function mailCheck() {
//     let emailData = mail.value;
//     if(emailData.length<10) {
//         mailErr.innerHTML="Minimum length 10";
//     }
//     else {
//          mailErr.innerHTML="";
//     }
// }
