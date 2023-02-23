var angle = 0;
document.querySelector('.container').className='test';

function carrousel(sign){

    spinner=document.querySelector(".carrousel");
    
    if(!sign){
        angle = angle + 60
    } else{ 
    angle = angle - 60
    }
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
}	

function changeSvg(){

            if(document.getElementById('menu-button').style.backgroundImage = "url(../../src/assets/images/menu.svg)"){
                document.getElementById('menu-button').style.backgroundImage = "url(../src/assets/images/cancel.svg)";
            }
}



