//DOM

const lampada = document.querySelector('#lampada');

const btLigar = document.querySelector('#ligar');

const btApagar = document.querySelector('#apagar');


//EVENTOS

    btLigar.addEventListener('click', acender);

    btApagar.addEventListener('click', desligar);

    lampada.addEventListener('dblclick', quebrar);


//FUNÇÕES

function acender(){
    lampada.src="../images/acesa.gif"
}

function desligar(){
    lampada.src="../images/apagada.gif"
}

function quebrar(){
    lampada.src="../images/quebrada.jpg"
}

