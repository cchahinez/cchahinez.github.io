
let saveBtn=document.querySelector("#saveAdding")
let goBackBtn=document.querySelector("#cancelAdding")
var userInput=document.querySelector("#projectInput") 

var textSearched=document.querySelector("#textToSearch")


let headerMenu =document.querySelector(".headerMenu")

var windowoc;

var projectsList = document.querySelector("#projectsList")
var savingData=[]


var localstoragelist = JSON.parse(localStorage.getItem("savingData"))
if(localstoragelist){
    savingData=localstoragelist
    showThem()   
}

//ADD A NEW PROJECT FROM SHORTCUT CTRL +
document.addEventListener('keyup', function (event) {
    if (event.ctrlKey && event.key === '+') 
    addingProject()
})

//SAVE AND ADD A NEW PROJECT
     function saveIt(){
        
        savingData.push(userInput.value)
        localStorage.setItem("savingData",JSON.stringify(savingData))
        self.close()
        }

//SHOW THE INFO MENU OF A PROJECT
    function showPlus(i){
        headerMenu.style.display="none"
            let showInfo=document.querySelector("#info-"+i)
            if((showInfo.style.display === "none")|| (showInfo.style.display === ""))
            {showInfo.style.display="inline"}
           else
             { showInfo.style.display="none"}

             window.addEventListener('mouseup',function(event){
                if(event.target!=showInfo){
                    showInfo.style.display="none"
                }
            })

            }







//DELETE A PROJECT
function deleteProject(i){
    let showInf=document.querySelector(".showInfo")
    let removedItem = savingData.splice(i,1)
    localStorage.setItem('savingData',JSON.stringify(savingData))
    showInf.style.display="none"

}
 

//SHOW CURRENT PROJECT LISTS 
        function showThem(){
            let tostring=""
            for(let i =0; i<savingData.length;i++){
                tostring+=`
    <div id="singlePoject">

       <div class="leftPart">
       <img class="truckImg" src="truck.svg" alt="..">

       <div class="secondChild">
       <p id="singleProjectTitle">Projet</p>
       <p id="projectDetails"> ${savingData[i]}</p>
       </div>
       </div>

    
   <div class="rightPart">

        <button id="infoBtn" class="infoBtn" onclick="showPlus(${i})">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        

        <div class="showInfo" id="info-${i}">
        <button id="modifyTitle" onclick="modifyTitleProject(${i})">Modifier titre </button> 
        <li > <a href="#"> Ouvrir dans studio</a> </li>
        <li > <a href="#"> Partager </a> </li>
        <li > <a href="#">Telecharger template </a> </li>
        <hr class="separator">
        <button id="infoSectionDeleteBtn" onclick="deleteProject(${i})">
        Suppimer
        </button> 
         </div>    
    </div>  

</div>
                `
            }
            projectsList.innerHTML+=tostring

        }



// DISPLAY HEADER MENU
function showMenu(){
   if((headerMenu.style.display === "none")|| (headerMenu.style.display === ""))
     {headerMenu.style.display="flex"}
    else
      {  headerMenu.style.display="none"}
    
}

//hiding menu when clicked elsewhere
window.addEventListener('mouseup',function(event){
    if(event.target!=headerMenu){
        headerMenu.style.display="none"
    }
})

//ADD A NEW PROJECT
function addingProject(){
    windowoc= window.open('adding.html','targetWindow',
            `toolbar=no,
             location=center,
             status=no,
             menubar=no,
             scrollbars=no,
             resizable=no,
             width=400,
             height=150`)
}

