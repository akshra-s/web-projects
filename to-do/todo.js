// TO-DO APP  js...

let int=document.querySelector('#int');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener('click',()=>{
    let item=document.createElement('li');
    item.innerText=int.value;

    let dltbtn=document.createElement('button');
    dltbtn.innerText='Delete';
    dltbtn.classList.add('dlt');

    item.appendChild(dltbtn);
    ul.appendChild(item);
    int.value='';

});
ul.addEventListener('click',function(e){
    if(e.target.nodeName=='BUTTON'){
        let par=e.target.parentElement;
        par.remove();
    }

});