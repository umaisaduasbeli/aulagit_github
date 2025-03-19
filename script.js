let botao = document.querySelector("#botao");
let estaQuebrado = false;
let contaCliques = 0;

botao.style.background = "#00fff2";

botao.addEventListener("mouseover",e =>{
    if (!estaQuebrado){
        botao.style.background = "#00ff00";
}
});

botao.addEventListener("mouseout", e =>{
        if (!estaQuebrado){
            botao.style.background = "#00fff2";
    }
});

botao.addEventListener("click", e =>{
    contaCliques++;

    if(contaCliques>=10){
    botao.style.background="#ff2c2c";
    botao.innerHTML="QUEBREI!!!";
    estaQuebrado=true;
    }
});

