
    function btnNav1(){
    var menuVisible= 0;
    const nav2=document.getElementById("nav")
    if(menuVisible==0){
        nav2.style.display="block"
        menuVisible=1;
    }
    else{
        nav2.style.display="none"
        menuVisible=0;
    }
    }


function btn1(){
 var txt=document.getElementById("traduction-fr");
 txt.style.display="inline"
 var txt1=document.getElementById("traduction-en");
 txt1.style.display="none"
}

function btn2(){
    var txt2=document.getElementById("traduction-en");
    txt2.style.display="inline"
    var txt13=document.getElementById("traduction-fr");
    txt13.style.display="none"
}