let total;
var checking;
let boxes=[];
let selboxes=[];
let selid=[];
let e;
let attempts;
let tofind;
let abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let index=[];
let shuffled=[];

window.onload=function(){
    total=12;
    document.getElementsByClassName('boxes')[0].style.gridTemplateColumns='repeat(4,auto)';
    document.getElementsByClassName('boxes')[0].style.gridTemplateRows='repeat(3,auto)';
    generateBoxes();
}



//----------------//
//----------------//
//----------------//



// Xerador de caixas dentro do xogo
function generateBoxes(){
    // Engadir tantos ID ao índice coma sexa posíbel (ata a metade das caixas totais)
    for(let i=0;i<total/2;i++){
        index[i]=[abc[i]];
    }
    // Repetir outra vez o índice dentro de si mesmo e mesturar os elementos nel
    index=[...index,...index];
    shuffled = index.sort((a, b) => 0.5 - Math.random());
    // XERAR CAIXAS COS DATOS OBTIDOS NO HTML
    for(let i=0;i<total;i++){
        let div=document.createElement('div');
        div.classList.add('box');
        div.addEventListener('click',selectBox);
        div.id=i;
        boxes.push(div);
        document.querySelector('.boxes').append(boxes[i]);
    }
    // probas
    e=0;
    // nº de intentos totais
    attempts=0;
    // nº parellas a atopar
    tofind=total/2;
    // checking non activo 
    checking=false;
    // xerar texto de intentos acumulados + parellas restantes
    attext();
}

// Cando se clica enriba dunha caixa
function selectBox(){
    if(checking){
        return;
    }
    // Ler caixa que foi clicada
    let selected=document.getElementById(this.id);
    // Verificar se xa foi clicada previamente
    if(selected.classList!='box'){
        return;
    }
    // Marcar a caixa
    selected.classList.add(shuffled[this.id]);
    selected.textContent=(shuffled[this.id]);
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
                    undo.textContent="";
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
// Cambiar o número de columnas e filas do xogo
function selectRC(){
    let rowsn=document.getElementById('rows-n').value;
    let columnsn=document.getElementById('columns-n').value;
    // Obter o número provisional das caixas
    let totaln=rowsn*columnsn;
    alert(totaln)
    // Se o total provisional é par + maior que 1 + numeros de columnas e filas positivos
    if(totaln%2===0 && totaln>1 && columnsn>0 && rowsn>0){
        // Desmarcar e borrar todas as caixas reveladas
        for(i=0;i<total;i++){
            let del=document.getElementById(i);
            del.classList.remove(shuffled[i]);
            del.remove();
        }
        // Fixar o total provisional ao total real das caixas
        total=totaln;
        // Resetear arrays
        index=[];
        shuffled=[];
        boxes=[];
        // Aplicar os estilos de filas e columnas
        document.getElementsByClassName('boxes')[0].style.gridTemplateColumns='repeat('+columnsn+',auto)';
        document.getElementsByClassName('boxes')[0].style.gridTemplateRows='repeat('+rowsn+',auto)';
        // Volver a xerar as caixas cos novos parámetros
        generateBoxes();
        return;
    // Se é impar ou menor que 1 => amosar erro e non xerar    
    }else{
        alert('erro')
        return;
    }
}