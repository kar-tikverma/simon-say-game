let btns = document.querySelectorAll(".button");
let h3 = document.querySelector("h3");
let outer = document.querySelector(".outer");
let body = document.querySelector("body");

let ans = true;
let lvl = 0;
let origSeq = [];
let resSeq = [];

function systemFlash (btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function userFlashCorrect (btn) {
    btn.classList.add("user-flash-correct");
    setTimeout(() => {
        btn.classList.remove("user-flash-correct");
    }, 200);
}
function userFlashIncorrect () {
    body.classList.add("user-flash-incorrect");
    setTimeout(() => {
        body.classList.remove("user-flash-incorrect");
    }, 200);
}

function check (btn) {
    if (resSeq[resSeq.length-1] == origSeq[resSeq.length-1]) {
        userFlashCorrect(btn);
        if (resSeq.length == origSeq.length) {
            levelUp(++lvl);
        }
    } else {
        userFlashIncorrect();
        reset();
    }
}

function reset () {
    origSeq.length = 0;
    h3.innerText = `Game Over! your score is ${lvl-1}`;
    lvl = 0;
}

function levelUp (lvl) {
    h3.innerText = `Level ${lvl}`;
    let ranNum = Math.floor(Math.random() * 4) + 1;
    origSeq.push(ranNum);
    for (let i = 0; i < lvl; i++) {
        setTimeout( () => {
            systemFlash(btns[origSeq[i] - 1]);
        }, 500 * (i+1));
    }
    resSeq.length = 0;
}

function buttonPress () {
    if (lvl == 0) {
        levelUp(++lvl);
    } else {
        if (this == btns[0]) {
            resSeq.push(1);
        } else if (this == btns[1]) {
            resSeq.push(2);
        } else if (this == btns[2]) {
            resSeq.push(3);
        } else if (this == btns[3]) {
            resSeq.push(4);
        }
        check(this);
    }
}

for (bn of btns) {
    bn.addEventListener("click", buttonPress);
}