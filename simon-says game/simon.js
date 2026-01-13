//starting..
let gamearr=[];
let userarr=[];
let btns=['one','two','three','four'];
let lvl=0;
let gstatus=false;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function (){
    if(gstatus==false){
        console.log('game started');
        gstatus=true;
        lvlup();
    
    }
   
});

function gflash(b){
    b.classList.add('gflash');
    setTimeout(function (){
        b.classList.remove('gflash');
    },300);
    
    
};
function uflash(b){
    b.classList.add('uflash');
    setTimeout(function (){
        b.classList.remove('uflash');
    },300);
    
    
};

function lvlup(){
    userarr=[];
    lvl++;
    h2.innerText=`LEVEL ${lvl} STARTED`;
    let i=Math.floor(Math.random()*4);
    let gcolor=btns[i];
    let rbtn=document.querySelector(`.${gcolor}`);
    gamearr.push(gcolor);
    gflash(rbtn);
    // console.log(gcolor);
    
};
//round1..
function check(index){
    // console.log(lvl);
    if(userarr[index]===gamearr[index]){
        if(gamearr.length==userarr.length){
            setTimeout(lvlup,500);
        }
    }else{
        let body=document.querySelector('body');
        body.style.backgroundColor='red';
        let p=document.createElement('h1');
        p.innerHTML='&#128078;haha&#129325;haha&#129325;haha&#128078;';
        document.querySelector('body').append(p);
        
        h2.innerHTML=`game over! <b>score was:${lvl}</b><br></br>Press any key to restart!`;
        setTimeout(function(){
           document.querySelector('body').style.backgroundColor='white';
            p.innerHTML='';
        },3000);
        over();
    }
}
function over(){
    
    gstatus=false;
    gamearr=[];
    userarr=[];
    lvl=0;

}
function btnpress(){
    console.log(this);
    let btn=this;
    uflash(btn);
    ucolor=btn.getAttribute('id');
    userarr.push(ucolor);
    // console.log(ucolor);
    check(userarr.length-1);
}
let btn=document.querySelectorAll('.btn');
for (b of btn){
    b.addEventListener('click',btnpress);
    
}