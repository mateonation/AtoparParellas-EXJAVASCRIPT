const total=12;
var checking=false;
let boxes=[];
let selboxes=[];
let selid=[];
let e=0;
let attempts=0;
let tofind=total/2;

// ID posíbel
let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let index=[];

// Engadir tantos ID ao índice coma sexa posíbel (ata a metade das caixas totais)
for(let i=0;i<total/2;i++){
    index+=[abc[i]];
}

// Repetir outra vez o índice dentro de si mesmo e mesturar os elementos nel
index=[...index,...index]
const shuffled = index.sort((a, b) => 0.5 - Math.random());

// XERAR CAIXAS NO HTML
for(let i=0;i<total;i++){
    let div=document.createElement('div');
    div.classList.add('box');
    div.addEventListener('click',selectbox);
    div.id=i;
    boxes.push(div);
    document.querySelector('.boxes').append(boxes[i]);
    attext();
}

function selectbox(){
    if(checking){
        return;
    }
    // Ler caixa que foi clicada
    let selected=document.getElementById(this.id);
    // Verificar se xa foi clicada previamente
    if(selected.classList!='box'){
        return;
    }
    selected.classList.add(shuffled[this.id]);
    // Engadilo a un array de caixas seleccionadas
    selboxes[e]=selected.classList.item(1);
    selid[e]=this.id;
    // Sumar un intento
    e++;
    if(e===2){
        // Se non son iguais
        if(!checkMatch()){
            setTimeout(()=>{
                for(i=0;i<selboxes.length;i++){
                    // Desmarcar caixas 
                    let undo=document.getElementById(selid[i]);
                    undo.classList.remove(selboxes[i]);
                    checking=false;
                }
            },1000);
        // Se son iguais
        }else{
            tofind=tofind-1;
            checking=false;
        }
        e=0;
        attext();
        return;
    }
}
// Se duas caixas xa foron clicadas verificar se hai unha parella + marcar o checking á true + sumar un intento
function checkMatch(){
    checking=true;
    attempts++;
    if(selboxes[0]===selboxes[1]){
        return true;
    }else{
        return false;
    }
}
// Liñas de texto para o número de intentos e de parellas por atopar
function attext(){
    document.getElementsByClassName("attempts")[0].textContent='Número de intentos: '+attempts+'\nParellas por atopar: '+tofind;
}