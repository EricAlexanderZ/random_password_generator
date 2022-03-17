//ARRAY TO HOLD ALL POSSIBLE CHARACTERS.
let charArr = [];

function randomString() {  // THIS FUN. CREATES A RANDOM 10 CHAR. STR. OF NUMS. & LETTERS.
    return Math.random().toString(36).substr(2, 10);
}

function fillArray() {     //THIS FUNCTION PUSHES THE randomString() TO THE charArr[] 4 TIMES.
    for (let i = 0; i < 4; i++) {
    charArr.push(randomString());
    }
}
fillArray();

//BUTTON TO GENERATE 4 RANDOM PASSWORD OPTIONS.
let generateBtn = document.getElementById("generate_btn");

//DISPLAY PASSWORD OPTIONS ON EMPTY INPUT BOXES.
let topLeftPasswd = document.getElementById("topL_input");
let topRightPasswd = document.getElementById("topR_input");
let bottomLeftPasswd = document.getElementById("bottomL_input");
let bottomRightPasswd = document.getElementById("bottomR_input");

function displayPasswords() {
       topLeftPasswd.value = charArr[0];
        topRightPasswd.value = charArr[1];
        bottomLeftPasswd.value = charArr[2];
        bottomRightPasswd.value = charArr[3];
}
generateBtn.addEventListener("click", displayPasswords) 

// 1-CLICK COPY PASSWORD TO THE CLIPBOARD.
