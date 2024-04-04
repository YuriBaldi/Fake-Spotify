const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const nomeMusica = document.getElementById("musica");
const audio = document.getElementById("audio");
const imgNome = document.getElementById("img");
isPlaying = false;
let musica = 1;
let numImg = 1;
const quantidadeMusicas =3;
const quantidadeImgs = 3;

function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    isPlaying = true;
}

function pausarFaixa(){
    audio.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    isPlaying = false;
}

function tocarOuPausarFaixa(){
    if (isPlaying === true){
        pausarFaixa();
    }
    else{
        tocarFaixa();
    }
}

function proximaFaixa(){
    if (musica < quantidadeMusicas && numImg < quantidadeImgs){
        musica+= 1;
        numImg+= 1;
    }else{
        musica = 1;
        numImg = 1;
    } 
    audio.src = "./audio/" + musica + ".mp3";
    imgNome.src = "./img/" + numImg + ".jpg";
    nomeMusica.innerText = "Música " + musica;
    tocarFaixa();
    
}

function musicaAnterior(){
    if (musica === 1 && numImg === 1){
        musica = quantidadeMusicas;
        numImg = quantidadeImgs;
    } else{
        musica-=1;
        numImg-=1;
    }
    audio.src = "./audio/" + musica + ".mp3";
    imgNome.src = "./img/" + numImg + ".jpg";
    nomeMusica.innerText = "Música " + musica;
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausarFaixa);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', musicaAnterior);
audio.addEventListener('ended', proximaFaixa);