let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "BROTHER",
        categoria:"FAMILY"
    },
    palavra002 = {
        nome: "SISTER",
        categoria:"FAMILY"
    },
    palavra003 = {
        nome: "MOTHER",
        categoria:"FAMILY"
    },
    palavra004 = {
        nome: "FATHER",
        categoria:"FAMILY"
    },
    palavra005 = {
        nome: "COUSIN",
        categoria:"FAMILY"
    },
    palavra006 = {
        nome: "UNCLE",
        categoria:"FAMILY"
    },
    palavra007 = {
        nome: "WHITE",
        categoria:"COLOUR"
    },
    palavra008 = {
        nome: "GREEN",
        categoria:"COLOUR"
    },
    palavra009 = {
        nome: "BLUE",
        categoria:"COLOUR"
    },
    palavra010 = {
        nome: "PURPLE",
        categoria:"COLOUR"
    },
    palavra011 = {
        nome: "YELLOW",
        categoria:"COLOUR"
    },
    palavra012 = {
        nome: "BLACK",
        categoria:"COLOUR"
    },
    palavra013 = {
        nome: "MONKEY",
        categoria:"ANIMAL"
    },
    palavra014 = {
        nome: "SNAKE",
        categoria:"ANIMAL"
    },
    palavra015 = {
        nome: "DOLPHIN",
        categoria:"ANIMAL"
    },
    palavra016 = {
        nome: "SHARK",
        categoria:"ANIMAL"
    },
    palavra017 = {
        nome: "HORSE",
        categoria:"ANIMAL"
    },
    palavra018 = {
        nome: "TURTLE",
        categoria:"ANIMAL"
    },
    palavra019 = {
        nome: "ROOSTER",
        categoria:"ANIMAL"
    },
    palavra020 = {
        nome: "DUCK",
        categoria:"ANIMAL"
    },
    palavra021 = {
        nome: "SCARED",
        categoria:"FEELING"
    },
    palavra022 = {
        nome: "HUNGRY",
        categoria:"FEELING"
    },
    palavra023 = {
        nome: "SICK",
        categoria:"FEELING"
    },
    palavra024 = {
        nome: "SLEEPY",
        categoria:"FEELING"
    },
    palavra025 = {
        nome: "ANGRY",
        categoria:"FEELING"
    },
    palavra026 = {
        nome: "HAPPY",
        categoria:"FEELING"
    },
    palavra027 = {
        nome: "BORED",
        categoria:"FEELING"
    },
    palavra028 = {
        nome: "NERVOUS",
        categoria:"FEELING"
    },
    palavra029 = {
        nome: "GUITAR",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra030 = {
        nome: "VIOLIN",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra031 = {
        nome: "DRUM",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra032 = {
        nome: "FLUTE",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra033 = {
        nome: "TRUMPET",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra034 = {
        nome: "BASS",
        categoria:"MUSICAL INSTRUMENT"
    },
    palavra035 = {
        nome: "KITCHEN",
        categoria:"HOME"
    },
    palavra036 = {
        nome: "GARAGE",
        categoria:"HOME"
    },
    palavra037 = {
        nome: "WINDOW",
        categoria:"HOME"
    },
    palavra038 = {
        nome: "STOVE",
        categoria:"HOME"
    },
    palavra039 = {
        nome: "BATHROOM",
        categoria:"HOME"
    },
    palavra040 = {
        nome: "FLOOR",
        categoria:"HOME"
    },
    palavra040 = {
        nome: "CHEESE",
        categoria:"FOOD"
    },
    palavra041 = {
        nome: "MILK",
        categoria:"FOOD"
    },
    palavra042 = {
        nome: "MEAT",
        categoria:"FOOD"
    },
    palavra043 = {
        nome: "JUICE",
        categoria:"FOOD"
    },
    palavra044 = {
        nome: "CAKE",
        categoria:"FOOD"
    },
    palavra045 = {
        nome: "FISH",
        categoria:"FOOD"
    },
    palavra046 = {
        nome: "BREAD",
        categoria:"FOOD"
    },
    palavra047 = {
        nome: "RICE",
        categoria:"FOOD"
    },
    palavra048 = {
        nome: "SUGAR",
        categoria:"FOOD"
    },
    palavra049 = {
        nome: "CAR",
        categoria:"TRANSPORT"
    },
    palavra050 = {
        nome: "SHIP",
        categoria:"TRANSPORT"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OOPS!", "TRY AGAIN ... THE SECRET WORD IS: <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("CONGRATULATIONS!", "YOU WON!");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});