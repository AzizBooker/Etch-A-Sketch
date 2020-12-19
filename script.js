
const container=document.querySelector(".tile-container")
divs=[]  //Holds all div elments
flag=false;   //If sketch is started or not
const modes={BlackWhite: 1,Colorful: 2,Darker: 3};
Object.freeze(modes)
var currentMode;

 for(var i=0;i<16;i++){
div=document.createElement('div')
div.classList.add('tile')
container.appendChild(div);
divs.push(div);
} 



function onButtonPressed(e)
{
if(e.value=='clear'){
    console.log(e.value)
    divs.forEach(div=> div.classList.remove('selected') )
    if(e.textContent=="Clear"){
        e.textContent='Start'
        flag=false;
    }else {
        e.textContent='Clear';
        flag=true;
    }

    
}
if(e.value=='black-white'){
    console.log(e.value)
    currentMode=modes.BlackWhite
    console.log(currentMode)
}else if(e.value=='colorful'){
    console.log(e.value)
    currentMode=modes.Colorful
    console.log(currentMode)
}else if(e.value=='darker'){
    console.log(e.value)
    currentMode=modes.Darker
    console.log(currentMode)
}

}


divs.forEach(div=> div.addEventListener('mouseover',e =>{
    if(flag==true){
        

    div.classList.add('selected') 
    } 
}))

