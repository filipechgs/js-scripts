function fundoPreto(){
    let fundo = document.querySelector("body").style.backgroundColor = "black";
    let paragrafos = document.querySelectorAll("p");
    for( let i = 0; i < paragrafos.length; i++){
        paragrafos[i].style.color = "white";
    }
}