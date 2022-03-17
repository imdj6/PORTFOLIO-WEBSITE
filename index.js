let darkbtn=document.getElementById('darkbtn');


darkbtn.addEventListener("click",function(){
   if (document.body.style.backgroundColor=='#042743')
    {
        document.body.style.backgroundColor="#e2e8f0";
document.body.style.color="black";
    
}
else{
document.body.style.backgroundColor="#042743";
document.body.style.color="white";
}
// #e2e8f0

})