let total;
var checking;
let boxes=[];
let selboxes=[];
let selid=[];
let e;
let attempts;
let tofind;
const abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const colored=['#ff0000','#ffa500','#ffff00','#adff2f','#52ffdc','#0067e6','#a200ff','#00f55e','#f55200','#e51077','#6510e5','#a1a1a1','#76a71b','#b30062','#1b00b3','#c9b30d','#1bb6bb','#f4b3ff','#8a4500','#d24141','#d96dc9','#9c5bb9','#88c8c6','#0a3e6b','#7c950e','#f4f9a4']
let index=[];
let shuffled=[];
let letter1st;
let letter2nd;
var statVal;
let totaln;
let rowsn;
let columnsn;
let grad1;
let grad2;
let easy=document.getElementById('easy');
let medium=document.getElementById('medium');
let hard=document.getElementById('hard');
let custom=document.getElementById('custom');
let checkboxes=[easy,medium,hard,custom];
const diffnames=['fácil','medio','difícil','personalizado'];
let span=document.querySelector('span');
var timestart;
var interval;
let milliseconds;
let seconds;
let minutes;

window.onload=function(){
    // Ao abrir o xogo no navegador poñer o modo de xogo en fácil por defecto
    total=12;
    document.getElementById('columns-n').value=4;
    document.getElementById('columns-n').readOnly=true;
    document.getElementById('rows-n').value=3;
    document.getElementById('rows-n').readOnly=true;
    document.getElementById('easy').checked=true;
    document.getElementsByClassName('boxes')[0].style.gridTemplateColumns='repeat(4,auto)';
    document.getElementsByClassName('boxes')[0].style.gridTemplateRows='repeat(3,auto)';
    generateBoxes();
}



//----------------//
//----------------//
//----------------//



// Xerador de caixas dentro do xogo
function generateBoxes(){
    timestart=true;
    letter1st=0;
    letter2nd=0;
    // Engadir tantos ID ao índice coma sexa posíbel (ata a metade das caixas totais)
    for(let i=0;i<total/2;i++){
        // Se termiñan as letras do abecedario, comezar a introducir unha segunda letra
        if(letter2nd>=abc.length){
            letter1st++;
            letter2nd=0;
        }
        if(i>=abc.length){
            index[i]=[abc[letter1st]+abc[letter2nd]];
            letter2nd++;
        }else{
            index[i]=[abc[i]];
        }
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
    // parar e xerar timer
    clearInterval(interval)
    minutes=0;
    seconds=0;
    milliseconds=0;
    span.textContent='00:00'
}

// Cando se clica enriba dunha caixa
function selectBox(){
    if(checking){
        return;
    }
    // Inicializar timer se a primeira caixa é seleccionada
    if(timestart){
        interval=setInterval(timer, 1000);
        timestart=false;
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
    for(i=0;i<total;i++){
        // Colorear caixas de dúas letras
        if(selected.textContent.length===2){
            let position=selected.textContent.split(''); // ['A','B'];
            if(position[0]===abc[i]){
                grad1=colored[i];
            }
            if(position[1]===abc[i]){
                grad2=colored[i];
            }
            if(grad1!==0 && grad2!==0){
                selected.style.background='linear-gradient(45deg,'+grad1+','+grad2+')';
            }
        }
        // Colorear para caixas dunha soa letra
        if(selected.textContent===abc[i]){
            selected.style.background=(colored[i]);
        }
    }
    // Engadilo a un array de caixas seleccionadas
    selboxes[e]=selected.classList.item(1);
    selid[e]=this.id;
    // Sumar un intento
    e++;
    if(e===2){
        // Se non son iguais
        if(!checkMatch()){
            let undo;
            setTimeout(()=>{
                for(i=0;i<selboxes.length;i++){
                    // Desmarcar caixas 
                    undo=document.getElementById(selid[i]);
                    undo.classList.remove(selboxes[i]);
                    undo.removeAttribute('style');
                    undo.textContent="";
                }
                checking=false;
            },1000);
        // Se son iguais
        }else{
            for(i=0;i<selboxes.length;i++){
                undo=document.getElementById(selid[i]);
                undo.classList.add('matched');
            }
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
    // Ler valores dos inputs
    rowsn=document.getElementById('rows-n').value;
    columnsn=document.getElementById('columns-n').value;
    // Obter o número provisional das caixas
    totaln=rowsn*columnsn;
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
        statVal=true;
        staText();
        generateBoxes();
        return;
    // Se é impar ou menor que 1 => amosar erro e non xerar    
    }else{
        statVal=false;
        staText();
        return;
    }
}
// Texto de verificación do número de filas e columnas
function staText(){
    let text=document.getElementById('state');
    text.style.whiteSpace='pre-wrap';
    // Amosar texto de xeración boa
    if(statVal){
        text.style.color='green';
        text.textContent='Xerando '+total+' caixas';
        // Amosar dificuldade seleccionada
        for(i=0;i<checkboxes.length;i++){
            if(checkboxes[i].checked===true){
                text.textContent+='\n('+diffnames[i]+')'
            }
        }
    // Amosar texto de xeración co erro    
    }else{
        text.style.color='red';
        text.textContent='-';
        // Columnas a 0 ou negativas
        if(columnsn<=0){
            text.textContent+='columnas negativas ('+columnsn+')';
        }
        // Filas a 0 ou negativas
        if(rowsn<=0){
            if(text.textContent!='-'){
                text.textContent+='\n-';
            }
            text.textContent+='filas negativas ('+rowsn+')';
        }
        // Caixas totais a 0, negativas ou impares
        if(totaln<=0||totaln%2!==0){
            if(text.textContent!='-'){
                text.textContent+='\n-';
            }
            if(totaln<=0){
                // Caixas totais negativas
                text.textContent+='caixas totais negativas ('+totaln+')';
            }else{
                // Caixas totais impares
                text.textContent+='caixas totais impares ('+totaln+')';
            }
        }
    }
    setTimeout(()=>{
        text.textContent='';
    },2500)
}
// Selección da dificuldade do xogo
function checkboxChecker(clicked){
    // Ler a dificuldade clicada
    let actual=document.getElementById(clicked);
    // Desmarcar as dificuldades que non son a seleccionada
    for(i=0;i<checkboxes.length;i++){
        if(checkboxes[i]!==actual){
            checkboxes[i].checked=false;
        }
    }
    if(custom.checked===true){
        // Se a dificuldade 'custom' é seleccionada posibilizar a modificación dos inputs para columnas e filas
        document.getElementById('columns-n').readOnly=false;
        document.getElementById('rows-n').readOnly=false;
    }else{
        // Se a dificuldade 'custom' non é seleccionada modificar os inputs a só lectura
        document.getElementById('columns-n').readOnly=true;
        document.getElementById('rows-n').readOnly=true;
        // Dificuldades
        if(easy.checked===true){
            // Fácil
            document.getElementById('columns-n').value=4;
            document.getElementById('rows-n').value=3;
        }
        if(medium.checked===true){
            // Medio
            document.getElementById('columns-n').value=5;
            document.getElementById('rows-n').value=4;
        }
        if(hard.checked===true){
            // Difícil
            document.getElementById('columns-n').value=6;
            document.getElementById('rows-n').value=6;
        }
    }
}
// Timer para gardar tempo de xogo
function timer(){
    seconds++;
    if(seconds===60){
        minutes++;
        seconds=0
    }
    if(seconds<10&&minutes<10){
        span.textContent='0'+minutes+':0'+seconds;
    }else if(seconds<10&&minutes>10){
        span.textContent=minutes+':0'+seconds;
    }else if(seconds>=10&&minutes<10){
        span.textContent='0'+minutes+':'+seconds;
    }else{
        span.textContent=minutes+':'+seconds;
    }

}