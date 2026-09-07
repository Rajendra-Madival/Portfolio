

const email=document.querySelector(".email");
const copyButton=document.querySelectorAll(".copyEmail");
// const top=document.querySelector(".backToTop");

copyButton.forEach(function(button){
    button.addEventListener("click",function(){
    navigator.clipboard.writeText(email.innerText);
    button.innerText = "Copied!";
    alert("Email Copied!")
    setTimeout(function(){
        button.innerText ="copy";}, 2000);

});
});


const themeButton=document.querySelector("#theme");

themeButton.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeButton.innerText="☀️"
    }
    else{
        themeButton.innerText="🌙";
}
    
});

const submitButton=document.querySelector("#submit");

submitButton.addEventListener("click",function(){
    alert("Gmail sent!")
})

/*Top button*/
// top.addEventListener("scroll",function(){
//     if(scroll<500){
//         top.innerText="hell yeah";
//     }
// });