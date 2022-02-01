//add z-indexes
//add math.index for dice
//make restart game and roll dice functional

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
let snake1 = document.getElementById('snake-1')
let roll = document.getElementById('roll')
let restart = document.getElementById('restart')

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
    let position1 = {
        top: Button24.top + window.pageYOffset,
        left: Button24.left + window.pageXOffset
    };
    
    ladder2.style.top = position1.top + 10 + 'px'
    ladder2.style.left = position1.left - 20 + 'px'

    let position2 = {
        top: Button20.top + window.pageYOffset,
        left: Button20.left + window.pageXOffset
    };

    snake1.style.top = position2.top + 25 + 'px'
    snake1.style.left = position2.left + 5 + 'px'

    let position3 = {
        top: Button6.top + window.pageYOffset,
        left: Button6.left + window.pageXOffset
    };
    
    ladder1.style.top = position3.top - 30 + 'px'
    ladder1.style.left = position3.left - 20 + 'px'

    let position4 = {
        top: Button1.top + window.pageYOffset,
        left: Button1.left + window.pageXOffset
    };
    
    character.style.top = position4.top + 'px'
    character.style.left = position4.left -28 + 'px'

}

placement()