var angle = 0;
var lancer = 0;

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

function musique(){

    var audio = document.getElementById("audio");

    if(lancer==1){
        audio.pause();
        lancer=0;
    }
    else{
        audio.play();
        lancer=1;
    }
}
const logoElement = document.querySelector("#menu-button");

logoElement.addEventListener("click", function() {
  logoElement.style.display = "none";
});
