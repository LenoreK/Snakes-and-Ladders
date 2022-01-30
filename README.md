Snakes and Ladders - Javascript Browser Game

This is a version of the childhood board game known as “Snakes and Ladders”. The game is a simpler one-person game that challenges the player to get to square 25 within 10 turns.

Game Logic:

There are going to be Divs 1 through 25. When the character does an onclick() on a specific Div, the character is invoked and slides to that div. I will use animation through css to make this effect.

The animation will need to be activated through if then statements. I could make a function for the if then statements so that it would know how many divs to move forwards. For example, if player rolls 'one' then move current div + 1. If this is not true, skip this code. If player rolls 'two,' then move current div + 2. If this is not true, skip this code. And this goes on and on until you get to 6. I'd also need it to stop at div 25 no matter what. It would also have to move up and do if it hits a ladder or snake.

Deliverables:

MVP Criteria:
- The character must move across the board - a simple animation to move a character from one div to another div.
- The character moves if there is an onclick() event on a div square, invoking the character to follow the animation across the screen to the div that was clicked.
- There must be a board present - created with 25 divs.
- There must be instructions / header
- There must be a button that restarts the game
- The dice must be set to math.random - possibly just a div with a new number that appear upon click.
- You have 10 turns to complete the game - either lose or win announcement!

Post-MVP Plans:
- The character moves automatically when you hit a snake or ladder with an animation.
- If character lands on X div, then character moves to y div
- Sad noise when the character hits the slide - happy noise when the character hits the ladder.

Project Planning:
| Date | Goals |
| ---- | ---- |
| Sun | Create read.me - begin creating the divs for board |
| Tues | Finish Board - including Snakes / Ladders |
| Thur | Set up buttons and alerts for winner - set up math.random() for dice |
| Sun | Logic on Moving the character |
| Tues | Logic on Moving the character |
| Thurs | Last Touches - Complete some bonus materials - Submit Assignment |