let score=0;
let started=false;
let buttons=['red','blue','yellow','green'];
let gameSeq=[];         //store the game sequence here
let playerSeq=[];    //store the players sequence here. every time score increases, make sure to reset your array and match with gameSeq
document.addEventListener('keypress',()=>{
    if(started==false){
        levelUp();
        started=true;
    }
})
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },200);
}

function levelUp(){
    score++;
    let score_updater=document.querySelector('.startGame');
    score_updater.innerHTML=`Score is ${score}`;
    let randIdx=Math.floor(Math.random()*4);
    let randClr=buttons[randIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
    gameSeq.push(randClr);
}

function btnPress(){
    let btns=document.querySelectorAll('.btns');
    for(let btn of btns){
        btn.addEventListener('click',()=>{
            btn.classList.add('clicked');
            setTimeout(()=>{
                btn.classList.remove('clicked');
            },150);
        })
    }
}
btnPress();




