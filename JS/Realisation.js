function btn1(){
    var txt=document.getElementById("en");
    txt.style.display="inline-block"
    var txt1=document.getElementById("fr");
    txt1.style.display="none"
   }
   
   function btn2(){
       var txt2=document.getElementById("en");
       txt2.style.display="none"
       var txt13=document.getElementById("fr");
       txt13.style.display="inline-block"
   }
   
   function btnNav1(){
    const nav2=document.getElementById("nav");
    if(nav2.style.display=="none"){
        nav2.style.display="block"
    }
    else{
        nav2.style.display="none"
    }
}