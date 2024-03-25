let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let btns = document.querySelectorAll(".button");
let h3 = document.querySelector("h3");
let outer = document.querySelector(".outer");

let ans = true;
let lvl = 0;
let origSeq = [];
let resSeq = [];

function flashButton (btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function check () {
    if (resSeq[resSeq.length-1] == origSeq[resSeq.length-1]) {
        if (resSeq.length == origSeq.length) {
            startLevel(++lvl);
        }
    } else {
        origSeq.length = 0;
        h3.innerText = `Game Over! your score is ${lvl-1}`;
        lvl = 1;
    }
}

function startLevel (lvl) {
    h3.innerText = `Level ${lvl}`;
    let ranNum = Math.floor(Math.random() * 4) + 1;
    origSeq.push(ranNum);
    for (let i = 0; i < lvl; i++) {
        // setTimeout(() => {
        //     setTimeout(() => {
        //         if (origSeq[i] == 1) {
        //             flashButton(b1);
        //         } else if (origSeq[i] == 2) {
        //             flashButton(b2);
        //         } else if (origSeq[i] == 3) {
        //             flashButton(b3);
        //         } else {
        //             flashButton(b4);
        //         }
        //     }, 1000);
        // }, 1000);

        if (origSeq[i] == 1) {
            flashButton(btns[0]);
        } else if (origSeq[i] == 2) {
            flashButton(btns[1]);
        } else if (origSeq[i] == 3) {
            flashButton(b3);
        } else {
            flashButton(b4);
        }

        // if (origSeq[i] == 1) {
        //     setTimeout(() => {
        //         flashButton(b1);
        //     }, 1000);
        // } else if (origSeq[i] == 2) {
        //     setTimeout(() => {
        //         flashButton(b2);
        //     }, 1000);
        // } else if (origSeq[i] == 3) {
        //     setTimeout(() => {
        //         flashButton(b3);
        //     }, 1000);
        // } else {
        //     setTimeout(() => {
        //         flashButton(b4);
        //     }, 1000);
        // }
    }
    resSeq.length = 0;
}

function buttonPress () {
    if (lvl == 0) {
        startLevel(++lvl);
    } else {
        flashButton(this);
        console.log("hey");
        if (this == btns[0]) {
            resSeq.push(1);
        } else if (this == btns[1]) {
            resSeq.push(2);
        } else if (this == btns[2]) {
            resSeq.push(3);
        } else if (this == btns[3]) {
            resSeq.push(4);
        } else {
            console.log("hey");
        }
        check();
    }
}
for (bn of btns) {
    bn.addEventListener("click", buttonPress);
}

// b1.addEventListener("click", () => {
//     if (lvl == 0) {
//         startLevel(++lvl);
//     } else {
//         flashButton(b1);
//         resSeq.push(1);
//         check();
//     }
// });

// b2.addEventListener("click", () => {
//     if (lvl == 0) {
//         startLevel(++lvl);
//     } else {
//         flashButton(b2);
//         resSeq.push(2);
//         check();
//     }
// });

// b3.addEventListener("click", () => {
//     if (lvl == 0) {
//         startLevel(++lvl);
//     } else {
//         flashButton(b3);
//         resSeq.push(3);
//         check();
//     }
// });

// b4.addEventListener("click", () => {
//     if (lvl == 0) {
//         startLevel(++lvl);
//     } else {
//         flashButton(b4);
//         resSeq.push(4);
//         check();
//     }
// });