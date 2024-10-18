const total=12;
let boxes=[];
let randnum=['a','a','b','b','c','c','d','d','e','e','f','f'];
const shufflear = randnum.sort((a, b) => 0.5 - Math.random());


// XERAR CAIXAS NO HTML
for(let i=0;i<total;i++){
    let div=document.createElement('div');
    div.classList.add('box');
    div.id=shufflear[i];
    boxes.push(div);
    document.querySelector('.boxes').append(boxes[i]);
}