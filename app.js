//Make an array or function out of these elements
//add z-indexes
//add math.index for dice
//add instruction
//make restart game and roll dice functional
//fix board so it looks the same in different settings

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button10 = document.getElementById('button10');
let button11 = document.getElementById('button11');
let button12 = document.getElementById('button12');
let button13 = document.getElementById('button13');
let button14 = document.getElementById('button14');
let button15 = document.getElementById('button15');
let button16 = document.getElementById('button16');
let button17 = document.getElementById('button17');
let button18 = document.getElementById('button18');
let button19 = document.getElementById('button19');
let button20 = document.getElementById('button20');
let button21 = document.getElementById('button21');
let button22 = document.getElementById('button22');
let button23 = document.getElementById('button23');
let button24 = document.getElementById('button24');
let button25 = document.getElementById('button25');
let character = document.getElementById('character');
let ladder1 = document.getElementById('ladder-1');
let ladder2 = document.getElementById('ladder-2');

button1.addEventListener('click', moveCharacterToButton);
button2.addEventListener('click', moveCharacterToButton);
button3.addEventListener('click', moveCharacterToButton);
button4.addEventListener('click', moveCharacterToButton);
button5.addEventListener('click', moveCharacterToButton);
button6.addEventListener('click', moveCharacterToButton);
button7.addEventListener('click', moveCharacterToButton);
button8.addEventListener('click', moveCharacterToButton);
button9.addEventListener('click', moveCharacterToButton);
button10.addEventListener('click', moveCharacterToButton);
button11.addEventListener('click', moveCharacterToButton);
button12.addEventListener('click', moveCharacterToButton);
button13.addEventListener('click', moveCharacterToButton);
button14.addEventListener('click', moveCharacterToButton);
button15.addEventListener('click', moveCharacterToButton);
button16.addEventListener('click', moveCharacterToButton);
button17.addEventListener('click', moveCharacterToButton);
button18.addEventListener('click', moveCharacterToButton);
button19.addEventListener('click', moveCharacterToButton);
button20.addEventListener('click', moveCharacterToButton);
button21.addEventListener('click', moveCharacterToButton);
button22.addEventListener('click', moveCharacterToButton);
button23.addEventListener('click', moveCharacterToButton);
button24.addEventListener('click', moveCharacterToButton);
button25.addEventListener('click', moveCharacterToButton);

let Button1 = button1.getBoundingClientRect();
let Button2 = button2.getBoundingClientRect();
let Button3 = button3.getBoundingClientRect();
let Button4 = button4.getBoundingClientRect();
let Button5 = button5.getBoundingClientRect();
let Button6 = button6.getBoundingClientRect();
let Button7 = button7.getBoundingClientRect();
let Button8 = button8.getBoundingClientRect();
let Button9 = button9.getBoundingClientRect();
let Button10 = button10.getBoundingClientRect();
let Button11 = button11.getBoundingClientRect();
let Button12 = button12.getBoundingClientRect();
let Button13 = button13.getBoundingClientRect();
let Button14 = button14.getBoundingClientRect();
let Button15 = button15.getBoundingClientRect();
let Button16 = button16.getBoundingClientRect();
let Button17 = button17.getBoundingClientRect();
let Button18 = button18.getBoundingClientRect();
let Button19 = button19.getBoundingClientRect();
let Button20 = button20.getBoundingClientRect();
let Button21 = button21.getBoundingClientRect();
let Button22 = button22.getBoundingClientRect();
let Button23 = button23.getBoundingClientRect();
let Button24 = button24.getBoundingClientRect();
let Button25 = button25.getBoundingClientRect();
let Character = character.getBoundingClientRect();

//Dice Button Functionality
//Generate Random Number from 1 to 6
let randomNumber = (Math.floor(Math.random()*6) + 1);
//Dice Images 1 through 6
let diceImage = 'Assets/Dice' + '-' + randomNumber + '.png';

document.querySelectorAll('img')[4].setAttribute('src', diceImage);

//Board Button Functionality
function moveCharacterToButton(event) {
    console.log(event.target)
    let rectangle = event.target.getBoundingClientRect()
    let positionButton = {
        top: rectangle.top + window.pageYOffset,
        left: rectangle.left + window.pageXOffset
    };
     
    character.style.top = positionButton.top + 'px'
    character.style.left = positionButton.left - 28 + 'px'
}

function placement() {
    let positionButton2 = {
        top: Button24.top + window.pageYOffset,
        left: Button24.left + window.pageXOffset
    };
    
    ladder2.style.top = positionButton2.top + 'px'
    ladder2.style.left = positionButton2.left + 'px'
}

placement()

function moveCharacterToButton1() {
        let positionButton1 = {
            top: Button1.top + window.pageYOffset,
            left: Button1.left + window.pageXOffset
        };
         
        character.style.top = positionButton1.top + 'px'
        character.style.left = positionButton1.left - 28 + 'px'
}

function moveCharacterToButton2() {
    let positionButton2 = {
        top: Button2.top + window.pageYOffset,
        left: Button2.left + window.pageXOffset
    };

    console.log(positionButton2)
     
    button2.onclick = function(){
        character.style.top = 465 + 'px'
        character.style.left = 85 + 'px'
    }
}

function moveCharacterToButton3() {
    let positionButton3 = {
        top: Button3.top + window.pageYOffset,
        left: Button3.left + window.pageXOffset
    };

    console.log(positionButton3)
     
    button3.onclick = function(){
        character.style.top = 465 + 'px'
        character.style.left = 175 + 'px'
    }
}

function moveCharacterToButton4() {
    let positionButton4 = {
        top: Button4.top + window.pageYOffset,
        left: Button4.left + window.pageXOffset
    };

    console.log(positionButton4)
     
    button4.onclick = function(){
        character.style.top = 465 + 'px'
        character.style.left = 260 + 'px'
    }
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton5() {
    let positionButton5 = {
        top: Button5.top + window.pageYOffset,
        left: Button5.left + window.pageXOffset
    };

    console.log(positionButton5)
     
    button5.onclick = function(){
        character.style.top = 465 + 'px'
        character.style.left = 355 + 'px'
    }
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton6() {
    let positionButton6 = {
        top: Button6.top + window.pageYOffset,
        left: Button6.left + window.pageXOffset
    };

    console.log(positionButton6)
     
    button6.onclick = function(){
        character.style.top = 385 + 'px'
        character.style.left = 355 + 'px'
    }
}

function moveCharacterToButton7() {
    let positionButton7 = {
        top: Button7.top + window.pageYOffset,
        left: Button7.left + window.pageXOffset
    };

    console.log(positionButton7)
     
    button7.onclick = function(){
        character.style.top = 385 + 'px'
        character.style.left = 260 + 'px'
    }
}

function moveCharacterToButton8() {
    let positionButton8 = {
        top: Button8.top + window.pageYOffset,
        left: Button8.left + window.pageXOffset
    };

    console.log(positionButton8)
     
    button8.onclick = function(){
        character.style.top = 385 + 'px'
        character.style.left = 175 + 'px'
    }
}

function moveCharacterToButton9() {
    let positionButton9 = {
        top: Button9.top + window.pageYOffset,
        left: Button9.left + window.pageXOffset
    };

    console.log(positionButton9)
     
    button9.onclick = function(){
        character.style.top = 385 + 'px'
        character.style.left = 85 + 'px'
    }
}

function moveCharacterToButton10() {
    let positionButton10 = {
        top: Button10.top + window.pageYOffset,
        left: Button10.left + window.pageXOffset
    };

    console.log(positionButton10)
     
    button10.onclick = function(){
        character.style.top = 385 + 'px'
        character.style.left = 5 + 'px'
    }
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton11() {
    let positionButton11 = {
        top: Button11.top + window.pageYOffset,
        left: Button11.left + window.pageXOffset
    };

    console.log(positionButton11)
     
    button11.onclick = function(){
        character.style.top = 305 + 'px'
        character.style.left = 5 + 'px'
    }
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton12() {
let positionButton12 = {
    top: Button12.top + window.pageYOffset,
    left: Button12.left + window.pageXOffset
};

console.log(positionButton12)
 
button12.onclick = function(){
    character.style.top = 305 + 'px'
    character.style.left = 85 + 'px'
}
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton13() {
let positionButton13 = {
    top: Button13.top + window.pageYOffset,
    left: Button13.left + window.pageXOffset
};

console.log(positionButton13)
 
button13.onclick = function(){
    character.style.top = 305 + 'px'
    character.style.left = 175 + 'px'
}
}

function moveCharacterToButton14() {
let positionButton14 = {
    top: Button14.top + window.pageYOffset,
    left: Button14.left + window.pageXOffset
};

console.log(positionButton14)
 
button14.onclick = function(){
    character.style.top = 305 + 'px'
    character.style.left = 260 + 'px'
}
}

function moveCharacterToButton15() {
let positionButton15 = {
    top: Button15.top + window.pageYOffset,
    left: Button15.left + window.pageXOffset
};

console.log(positionButton15)
 
button15.onclick = function(){
    character.style.top = 305 + 'px'
    character.style.left = 350 + 'px'
}
}

function moveCharacterToButton16() {
let positionButton16 = {
    top: Button16.top + window.pageYOffset,
    left: Button16.left + window.pageXOffset
};

console.log(positionButton16)
 
button16.onclick = function(){
    character.style.top = 225 + 'px'
    character.style.left = 350 + 'px'
}
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton17() {
let positionButton17 = {
    top: Button17.top + window.pageYOffset,
    left: Button17.left + window.pageXOffset
};

console.log(positionButton17)
 
button17.onclick = function(){
    character.style.top = 225 + 'px'
    character.style.left = 260 + 'px'
}
}

function moveCharacterToButton18() {
let positionButton18 = {
    top: Button18.top + window.pageYOffset,
    left: Button18.left + window.pageXOffset
};

console.log(positionButton18)
 
button18.onclick = function(){
    character.style.top = 225 + 'px'
    character.style.left = 180 + 'px'
}
}

function moveCharacterToButton19() {
let positionButton19 = {
    top: Button19.top + window.pageYOffset,
    left: Button19.left + window.pageXOffset
};

console.log(positionButton19)
 
button19.onclick = function(){
    character.style.top = 225 + 'px'
    character.style.left = 85 + 'px'
}
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton20() {
let positionButton20 = {
    top: Button20.top + window.pageYOffset,
    left: Button20.left + window.pageXOffset
};

console.log(positionButton20)
 
button20.onclick = function(){
    character.style.top = 225 + 'px'
    character.style.left = 5 + 'px'
}
}

function moveCharacterToButton21() {
    let positionButton21 = {
        top: Button21.top + window.pageYOffset,
        left: Button21.left + window.pageXOffset
    };
     
    button21.onclick = function(){
        character.style.top = 145 + 'px'
        character.style.left = 5 + 'px'
    }
}

function moveCharacterToButton22() {
    let positionButton22 = {
        top: Button22.top + window.pageYOffset,
        left: Button22.left + window.pageXOffset
    };

    console.log(positionButton22)
     
    button22.onclick = function(){
        character.style.top = 145 + 'px'
        character.style.left = 85 + 'px'
    }
}

function moveCharacterToButton23() {
    let positionButton23 = {
        top: Button23.top + window.pageYOffset,
        left: Button23.left + window.pageXOffset
    };

    console.log(positionButton23)
     
    button23.onclick = function(){
        character.style.top = 145 + 'px'
        character.style.left = 175 + 'px'
    }
}

//Doesn't Work Until Z-Index is Added
function moveCharacterToButton24() {
    let positionButton24 = {
        top: Button24.top + window.pageYOffset,
        left: Button24.left + window.pageXOffset
    };

    console.log(positionButton24)
     
    button24.onclick = function(){
        character.style.top = 145 + 'px'
        character.style.left = 260 + 'px'
    }
}

function moveCharacterToButton25() {
    let positionButton25 = {
        top: Button25.top + window.pageYOffset,
        left: Button25.left + window.pageXOffset
    };

    console.log(positionButton25)
     
    button25.onclick = function(){
        character.style.top = 145 + 'px'
        character.style.left = 350 + 'px'
    }
}
