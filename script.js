const logo = document.getElementsByClassName("header-logo");
const listaHeader = document.getElementsByClassName("header-lista");



const mostrarOcultarHeader = (logo,listaHeader) => {
    logo.addEventListener("click",function(){
        if(listaHeader.classList.contains("ocultar__header-lista-ul"))
        {
            listaHeader.classList.remove("ocultar__header-lista-ul");
            listaHeader.classList.add("mostrar__header-lista-ul");
        }else{
            listaHeader.classList.remove("mostrar__header-lista-ul");
            listaHeader.classList.add("ocultar__header-lista-ul");
        }
    });
};

for(var i = 0;i<listaHeader.length;i++){
    mostrarOcultarHeader(logo[0],listaHeader[0]);
}
