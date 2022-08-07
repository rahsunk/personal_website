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

const portfolio=document.getElementById('portfolio')
portfolio.style.fontWeight="bold"
portfolio.style.backgroundColor="#f2f2f2"

const list=document.getElementById('list')

let footerColor=0

for(let i=0;i<data.length;i++){
    let newDiv=document.createElement('div')
    newDiv.style.display="flex"
    newDiv.style.margin="0px"
    newDiv.style.paddingBottom="10px"
    newDiv.style.paddingTop="10px"
    newDiv.className="new_div"

    if(i%2==0){
        newDiv.style.backgroundColor="white"
    }
    else{
        newDiv.style.backgroundColor="#f2f2f2"
    }
    
    let picDiv=document.createElement('div')
    
    let newPic=document.createElement('img')
    newPic.src="images/"+data[i].picture+".jpg"
    newPic.style.width="200px"
    newPic.style.border="2px black solid"
    newPic.className="new_pic"
    
    let txtDiv=document.createElement('div')
    txtDiv.style.display="flex"
    txtDiv.style.flexDirection="column"

    newName=document.createElement('h2')
    newName.innerHTML=data[i].name

    newMail=document.createElement('div')
    newMail.style.margin="0px"
    newMail.innerHTML="Email: "+data[i].email+"@gmail.com"
    newMail.style.marginBottom="10px"
    newMail.className="link_align"

    newLink=document.createElement('a')
    newLink.href="https://www.linkedin.com/in/"+data[i].link
    newLink.target="_blank"
    newLink.innerHTML="Linkedin"
    newLink.style.marginBottom="10px"
    newLink.className="link_align"

    newGit=document.createElement('a')
    newGit.href="https://github.com/"+data[i].github
    newGit.target="_blank"
    newGit.innerHTML="GitHub"
    newGit.style.marginBottom="10px"
    newGit.className="link_align"
    
    newWeb=document.createElement('a')
    newWeb.href="https://"+data[i].website+".github.io"
    newWeb.target="_blank"
    newSite=document.createElement('button')
    newSite.innerHTML="Visit their website!"
    newSite.style.borderRadius="10px"
    newSite.style.border="none"
    newSite.style.padding="10px"
    newSite.style.fontWeight="bold"
    newSite.style.color="white"
    newSite.style.backgroundColor="#800020"
    newSite.className="button_opacity"
    newWeb.className="button_pos"

    newWeb.appendChild(newSite)
    picDiv.appendChild(newPic)
    
    if(data[i].name!=""){
        txtDiv.append(newName)
    }
    if(data[i].email!=""){
        txtDiv.append(newMail)
    }
    if(data[i].link!=""){
        txtDiv.append(newLink)
    }
    if(data[i].github!=""){
        txtDiv.append(newGit)
    }
    if(data[i].website!=""){
        txtDiv.append(newWeb)
    }

    newDiv.append(picDiv,txtDiv)
    list.appendChild(newDiv)
    
    buttonOpac=document.getElementsByClassName('button_opacity')
    for(let i=0;i<buttonOpac.length;i++){
        buttonOpac[i].onmouseover=function(){
                buttonOpac[i].style.opacity=0.5
            }
            buttonOpac[i].onmouseout=function(){
                buttonOpac[i].style.opacity=1
            }
    }
    footerColor++
}

const footer=document.querySelector('footer')
if(footerColor%2==0){
    footer.style.backgroundColor="white"
}
else{
    footer.style.backgroundColor="#f2f2f2"
}
console.log(footerColor)