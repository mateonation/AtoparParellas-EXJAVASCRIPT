const total=12;
let boxes=[];

let boxtemp='<div class="box"><div class="hidden"></div><div class="front"></div></div>'

for(let i=0;i<total;i++){
    let div=document.createElement('div');
    div.innerHTML=boxtemp;
    boxes.push(div);
    document.querySelector('.boxes').append(boxes[i]);
}