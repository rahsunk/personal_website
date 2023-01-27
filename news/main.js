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

const news=document.getElementById('news')
news.style.fontWeight="bold"
news.style.backgroundColor="#f2f2f2"

const newsList=document.getElementById('news_container')

let footerColor=0

for(let i=0;i<data.length;i++){
    console.log(true)
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
    picDiv.style.display="flex"
    picDiv.style.flexDirection="column"
    picDiv.style.margin="30px"
    for(let j=0;j<data[i].picture.length;j++){
        console.log(data[i].picture.length)
        newPic=document.createElement('img')
        newPic.src="images/"+data[i].picture[j]+".jpg"
        newPic.style.border="2px black solid"
        newPic.className="new_pic"
        picDiv.append(newPic)
    }
 
    let txtDiv=document.createElement('div')
    txtDiv.style.display="flex"
    txtDiv.style.flexDirection="column"

    let txtDiv2=document.createElement('div')
    txtDiv2.style.display="flex"
    txtDiv2.style.flexDirection="column"
    txtDiv2.style.margin="30px"

    newName=document.createElement('h2')
    newName.innerHTML=data[i].name

    newDate=document.createElement('h4')
    newDate.style.margin="0px"
    newDate.innerHTML=data[i].date
    newDate.style.marginBottom="20px"
    newDate.className="link_align"

    descDiv=document.createElement('div')
    descDiv.id="desc_align"
    descDiv.style.margin="0px"
    descDiv.style.marginBottom="20px"
    descDiv.innerHTML="Description:"  

    for(let k=0;k<data[i].desc.length;k++){
        newDesc=document.createElement('div')
        newDesc.style.marginTop="5px"
        newDesc.style.marginBottom="5px"
        newDesc.style.fontSize="12px"
        newDesc.innerHTML=data[i].desc[k]
        descDiv.append(newDesc)
    }
    
    newWeb=document.createElement('a')
    
    newWeb.href=data[i].link
    newWeb.target="_blank"
    newSite=document.createElement('button')
    newSite.innerHTML="Visit here!"
    newSite.style.borderRadius="10px"
    newSite.style.border="none"
    newSite.style.padding="10px"
    newSite.style.marginTop="20px"
    newSite.style.fontWeight="bold"
    newSite.style.color="white"
    newSite.style.backgroundColor="#800020"
    newSite.className="button_opacity"
    newWeb.className="button_pos"

    newVid=document.createElement('iframe')
    
    newVid.className="YT"
    newVid.width="560"
    newVid.height="315"
    newVid.src=data[i].video
    newVid.title="YouTube video player"
    newVid.frameBorder="0"
    newVid.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    newVid.setAttribute('allowFullScreen', '')
    
    if(data[i].picture.length!=0){
        picDiv.appendChild(newPic)
    }
    if(data[i].name!=""){
        txtDiv.append(newName)
    }
    if(data[i].date!=""){
        txtDiv.append(newDate)
    }
    if(data[i].desc.length!=0){
        txtDiv2.append(descDiv)
    }
    if(data[i].link!=""){
        newWeb.appendChild(newSite)
        txtDiv2.append(newWeb)
    }
    if(data[i].video!=""){
        newWeb.appendChild(newVid)
        txtDiv2.append(newWeb)
        console.log(newVid)
    }


    newDiv.append(picDiv,txtDiv,txtDiv2)
    newsList.appendChild(newDiv)
    
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