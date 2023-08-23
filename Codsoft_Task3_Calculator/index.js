var screen =document.querySelector('#display');
var btn=document.querySelectorAll('.button');



for(item of btn)
{
    item.addEventListener('click',(e)=>{
         btntext=e.target.innerText;
         if(btntext=='X'){
             btntext='*';
            }
         
            screen.value+=btntext;
    });
}


function cleartext()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}
function percentage()
{
  
    
const val= parseFloat(screen.value);
screen.value = (val / 100);
    
}
