var angle = 0;

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

            if($('header div button').attr("id") === "menu-button"){
                $('header div button').removeAttr('id');
                $('header div button').attr('id', 'cancel-button');
                
            }

            else{
                $('header div button').removeAttr('id');
                $('header div button').attr('id', 'menu-button');
            }
}




