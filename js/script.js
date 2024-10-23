const total=12;
let boxes=[];
over=false;
let selected=[];
let selid=0;

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
    div.id=shuffled[i];
    boxes.push(div);
    document.querySelector('.boxes').append(boxes[i]);
}

function selectbox(){
    if(over){
        return;
    }
    selected[selid]=this.id;
    selid++;
    if(selid===2){
        selected[0]===selected[1]?alert('Iguais'):alert('Distintas');
        selid=0;
    }
}