const navLines=document.getElementsByClassName('noline')

for(let i=0;i<navLines.length;i++){
    navLines[i].onmouseover=function(){
        navLines[i].style.color="gray"
    }
    navLines[i].onmouseout=function(){
        navLines[i].style.color="black"
    }
    navLines[i].onmousedown=function(){
        navLines[i].style.color="blue"
    }
    navLines[i].onmouseup=function(){
        navLines[i].style.color="black"
    }
}

const home=document.getElementById('home')
home.style.fontWeight="bold"

const buttonLines=document.getElementsByClassName('no_button_line')

for(let i=0;i<buttonLines.length;i++){
    buttonLines[i].onmouseover=function(){
        buttonLines[i].style.opacity=0.5
    }
    buttonLines[i].onmouseout=function(){
        buttonLines[i].style.opacity=1
    }
    if(i<1){
        buttonLines[i].onmousedown=function(){
            buttonLines[i].style.backgroundColor="gray"
        }
        buttonLines[i].style.onmouseup=function(){
            buttonLines[i].style.backgroundColor="lightblue"
        }
    }
    
}