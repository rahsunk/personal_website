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

const pList=document.getElementById('project_list')

let footerColor=0

for(let i=0;i<projects.length;i++){
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
    newPic.src="images/"+projects[i].picture+".png"
    newPic.style.border="2px black solid"
    newPic.className="new_pic project_pic"
    
    let txtDiv=document.createElement('div')
    txtDiv.style.display="flex"
    txtDiv.style.flexDirection="column"

    let txtDiv2=document.createElement('div')
    txtDiv2.style.display="flex"
    txtDiv2.style.flexDirection="column"
    txtDiv2.style.margin="30px"

    newName=document.createElement('h2')
    newName.innerHTML=projects[i].name

    newDate=document.createElement('div')
    newDate.style.margin="0px"
    newDate.innerHTML="Created: "+projects[i].date
    newDate.style.marginBottom="20px"
    newDate.className="link_align"
    
    authorDiv=document.createElement('div')
    authorDiv.style.margin="0px"
    authorDiv.innerHTML="Created by:"

    for(let j=0;j<projects[i].authors.length;j++){
        newAuthor=document.createElement('div')
        newAuthor.style.marginTop="5px"
        newAuthor.style.marginBottom="5px"
        newAuthor.style.fontSize="12px"
        newAuthor.innerHTML=projects[i].authors[j]
        authorDiv.append(newAuthor)
    }

    newStat=document.createElement('div')
    newStat.innerHTML=projects[i].status
    newStat.style.margin="0px"

    descDiv=document.createElement('div')
    descDiv.id="desc_align"
    descDiv.style.margin="0px"
    descDiv.innerHTML="Description:"
    

    for(let k=0;k<projects[i].desc.length;k++){
        newDesc=document.createElement('div')
        newDesc.style.marginTop="5px"
        newDesc.style.marginBottom="5px"
        newDesc.style.fontSize="12px"
        newDesc.innerHTML=projects[i].desc[k]
        descDiv.append(newDesc)
        console.log('true')
    }
    
    newWeb=document.createElement('a')
    newWeb.href="https://rahsunk.github.io/"+projects[i].website
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

    newWeb.appendChild(newSite)
    picDiv.appendChild(newPic)
    
    if(projects[i].name!=""){
        txtDiv.append(newName)
    }
    if(projects[i].date!=""){
        txtDiv.append(newDate)
    }
    if(projects[i].authors.length!=0){
        txtDiv.append(authorDiv)
    }
    if(projects[i].desc.length!=0){
        txtDiv2.append(descDiv)
    }
    if(projects[i].website!=""){
        txtDiv2.append(newWeb)
    }
    if(projects[i].status=="(Future Release)"){
        txtDiv.append(newStat)
    }

    newDiv.append(picDiv,txtDiv,txtDiv2)
    pList.appendChild(newDiv)
    
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

const gList=document.getElementById('grade_list')
const gradeColor=document.getElementById('grades')
if(footerColor%2==0){
    gradeColor.style.backgroundColor="white"
}
else{
    gradeColor.style.backgroundColor="#f2f2f2"
}

for(let i=0;i<grades.length;i++){
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
    newPic.src="images/"+grades[i].picture+".png"
    if(grades[i].picture=="na"){
        newPic.style.width="200px"
    }
    else{
        newPic.classList.add("width_adjust")
    }
    newPic.style.border="2px black solid"
    newPic.classList.add("new_pic")
    
    let txtDiv=document.createElement('div')
    txtDiv.style.display="flex"
    txtDiv.style.flexDirection="column"
    txtDiv.id="txt_align"

    newName=document.createElement('h2')
    newName.innerHTML=grades[i].name

    newDate=document.createElement('div')
    newDate.style.margin="0px"
    newDate.innerHTML="Taken: "+grades[i].date
    newDate.style.marginBottom="10px"
    newDate.className="link_align"
    
    newGrade=document.createElement('div')
    newGrade.style.margin="0px"
    newGrade.innerHTML="Score: "+grades[i].grade

    newStat=document.createElement('div')
    newStat.innerHTML=grades[i].status
    newStat.style.margin="0px"

    picDiv.appendChild(newPic)
    
    if(grades[i].name!=""){
        txtDiv.append(newName)
    }
    if(grades[i].date!=""){
        txtDiv.append(newDate)
    }
    if(grades[i].grade!=""){
        txtDiv.append(newGrade)
    }
    if(grades[i].status=="(TBD)"){
        txtDiv.append(newStat)
    }

    newDiv.append(picDiv,txtDiv)
    gList.appendChild(newDiv)
    
    footerColor++
}

const aList=document.getElementById('award_list')
const awardColor=document.getElementById('awards')
if(footerColor%2==0){
    awardColor.style.backgroundColor="white"
}
else{
    awardColor.style.backgroundColor="#f2f2f2"
}

for(let i=0;i<awards.length;i++){
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
    newPic.src="images/"+awards[i].picture+".png"
    if(awards[i].picture=="na"){
        newPic.style.width="200px"
    }
    else{
        newPic.classList.add("width_adjust")
    }
    newPic.style.border="2px black solid"
    newPic.classList.add("new_pic")
    
    let txtDiv=document.createElement('div')
    txtDiv.style.display="flex"
    txtDiv.style.flexDirection="column"
    txtDiv.id="txt_align"

    newName=document.createElement('h2')
    newName.innerHTML=awards[i].name

    newDate=document.createElement('div')
    newDate.style.margin="0px"
    newDate.innerHTML="Awarded: "+awards[i].date
    newDate.style.marginBottom="10px"
    newDate.className="link_align"
    
    newLevel=document.createElement('div')
    newLevel.style.margin="0px"
    newLevel.innerHTML="Level: "+awards[i].level

    descDiv=document.createElement('div')
    descDiv.id="desc_align award_desc_align"
    descDiv.style.marginTop="10px"
    descDiv.innerHTML="Description:"

    for(let k=0;k<awards[i].desc.length;k++){
        newDesc=document.createElement('div')
        newDesc.style.marginTop="5px"
        newDesc.style.marginBottom="5px"
        newDesc.style.fontSize="12px"
        newDesc.innerHTML=awards[i].desc[k]
        descDiv.append(newDesc)
    }

    picDiv.appendChild(newPic)
    
    txtDiv.append(newName,newDate,newLevel,descDiv)

    newDiv.append(picDiv,txtDiv)
    aList.appendChild(newDiv)
    
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