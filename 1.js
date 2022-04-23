let screen=document.getElementById('screen')
button=document.querySelectorAll('button')
let screenValue='';
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText)
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText
            screen.value=screenValue
        }
        else if(buttonText=='C'){
            screenValue=""
            screen.value=screenValue
        }
       
        else if(buttonText=='='){
           
            screen.value=eval(screenValue)
            
        }
        
        else {
            screenValue+=buttonText
            screen.value=screenValue
        }
    })
}
function displaytime(){
    time =new Date();
    console.log(time)
    document.getElementById('time').innerHTML=time;
}
setInterval(displaytime,1000)