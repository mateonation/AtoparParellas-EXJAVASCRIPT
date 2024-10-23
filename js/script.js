const total=12;
let boxes=[];
over=false;
let selboxes=[];
let e=0;

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
}

function selectbox(){
    if(over){
        return;
    }
    // Seleccionar caixa e poñerlle cor segundo o índice mesturado
    let selected=document.getElementById(this.id);
    selected.classList.add(shuffled[this.id]);
    // Engadilo a un array de caixas seleccionadas
    selboxes[e]=selected.classList;
    selboxes[e]=selboxes[e].toString();
    // Sumar un intento
    e++;
    if(e===2){
        checkmatch();
        e=0;
    }
}
function checkmatch(){
    if(selboxes[0]===selboxes[1]){
        alert('iguais');
        return;
    }else{
        alert('distintos');
        return;
    }
}