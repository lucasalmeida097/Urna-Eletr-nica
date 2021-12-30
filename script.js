let seuVotoPara = document.querySelector('.msg span');
let cargo = document.querySelector('.cargo span');
let descricao = document.querySelector('.infos');
let aviso = document.querySelector('.d2');
let fotos = document.querySelector('.d1-right');
let numeros = document.querySelector('.numero');

let etapaAtual= 0;
let numeroDigitado = '';
let votoBranco= false;
let votos= [];

function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    
    let numeroHtml= '';
    numeroDigitado='';
    votoBranco = false;
    for(let i=0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class = "digito pisca"></div>';
        } else { 
            numeroHtml += '<div class = "digito"></div>';
        }
       
    }

    seuVotoPara.style.display= 'none';
    cargo.innerHTML= etapa.titulo;
    descricao.innerHTML= '';
    aviso.style.display= 'none';
    fotos.innerHTML= '';
    numeros.innerHTML= numeroHtml;
}

function atualizaInterface(){

    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numeroDigitado){
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display= 'block';
        aviso.style.display= 'block';
        if(etapaAtual == 1){
            descricao.innerHTML= `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}<br>Vice: ${candidato.vice}`; 
        } else {
            descricao.innerHTML= `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`
        }
        
        let fotosHtml= '';
        for(let i in candidato.fotos) {
            if(candidato.fotos[i].small){
                fotosHtml += `<div class='d1-image small'><img src='img/${candidato.fotos[i].url}' alt=''>${candidato.fotos[i].legenda}</div>`
            } else {
                fotosHtml += `<div class='d1-image'><img src='img/${candidato.fotos[i].url}' alt=''>${candidato.fotos[i].legenda}</div>`
            }
            
        }
        fotos.innerHTML= fotosHtml;
    } else {
        seuVotoPara.style.display= 'block';
        aviso.style.display= 'block';
        descricao.innerHTML= '<div class="aviso-grande pisca">VOTO NULO</div>'

    }
}

function clicou(n) {

    let elNumero = document.querySelector('.digito.pisca');

    if(elNumero !== null) {
        elNumero.innerHTML = n ;
        numeroDigitado = `${numeroDigitado}${n}`;
        elNumero.classList.remove('pisca');

        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');  
        } else {
            atualizaInterface();
        }
       
    }
}

function branco() {
        numeroDigitado ='';
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display= 'block';
        numeros.innerHTML= '';
        descricao.innerHTML= '<div class="aviso-grande pisca">VOTO EM BRANCO</div>'
        fotos.innerHTML='';
}

function corrige() {
    numeroDigitado='';
    comecarEtapa();
}

function confirma() {
    let etapa= etapas[etapaAtual];
    let votoConfirmado= '';

    if(votoBranco === true) {
        votoConfirmado= true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'BRANCO'
        });
    } else if(numeroDigitado.length === etapa.numeros){
        votoConfirmado= true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numeroDigitado
        });
    }
    if (votoConfirmado === true){
        etapaAtual++
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML= '<div class="aviso-gigante pisca">Voto efetuado com sucesso !</div>';
            console.log(votos);
        }
    }
}

comecarEtapa();