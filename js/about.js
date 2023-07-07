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

const about=document.getElementById('about')
about.style.fontWeight="bold"
about.style.backgroundColor="#f2f2f2"

const images=document.getElementsByClassName('bold')
const me=document.getElementsByClassName('me')
const math=document.getElementsByClassName('math')
const env=document.getElementsByClassName('env')
const pc=document.getElementsByClassName('pc')

const all=document.querySelectorAll('.all')
const button=document.querySelector('button')

for(let i=0;i<images.length;i++){
    images[i].onmouseover=function(){
        images[i].style.opacity=0.5
    }
    images[i].onmouseout=function(){
        images[i].style.opacity=1
    }
    images[i].onclick=function(event){
        event.preventDefault()
        if(i<1){
            for(let j=0;j<5;j++){
                me[j].style.fontWeight="bold"
                me[j].style.textDecoration="underline"
                math[j].style.fontWeight="normal"
                math[j].style.textDecoration="none"
                pc[j].style.fontWeight="normal"
                pc[j].style.textDecoration="none"
                env[j].style.fontWeight="normal"
                env[j].style.textDecoration="none"
            }
        }
        else if(i<2){
            for(let j=0;j<5;j++){
                me[j].style.fontWeight="normal"
                me[j].style.textDecoration="none"
                math[j].style.fontWeight="bold"
                math[j].style.textDecoration="underline"
                pc[j].style.fontWeight="normal"
                pc[j].style.textDecoration="none"
                env[j].style.fontWeight="normal"
                env[j].style.textDecoration="none"
            }
        }
        else if(i<3){
            for(let j=0;j<5;j++){
                me[j].style.fontWeight="normal"
                me[j].style.textDecoration="none"
                math[j].style.fontWeight="normal"
                math[j].style.textDecoration="none"
                pc[j].style.fontWeight="normal"
                pc[j].style.textDecoration="none"
                env[j].style.fontWeight="bold"
                env[j].style.textDecoration="underline"
            }
        }
        else{
            for(let j=0;j<5;j++){
                me[j].style.fontWeight="normal"
                me[j].style.textDecoration="none"
                math[j].style.fontWeight="normal"
                math[j].style.textDecoration="none"
                pc[j].style.fontWeight="bold"
                pc[j].style.textDecoration="underline"
                env[j].style.fontWeight="normal"
                env[j].style.textDecoration="none"
            }
        }
    }
}

button.onmouseenter=function(){
    button.style.opacity=0.5
}
button.onmouseleave=function(){
    button.style.opacity=1
}

button.onclick=function(event){
    event.preventDefault()
    for(let k=0;k<all.length;k++){
        all[k].style.fontWeight="normal"
        all[k].style.textDecoration="none"
    }
}
