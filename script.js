'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

var number = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highscore = null;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
      displaymessage('No Number');
    } else if (guess == number) {
      displaymessage('Correct Number');

      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#33FF35';
      document.querySelector('.number').style.width = '300px';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        displaymessage(guess > number ? 'Too high' : 'Too low');

        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        displaymessage('you are lost');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
  // } else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you are lost';
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you are lost';
  //   }
  // }
);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Math.trunc(Math.random() * 20) + 1;

  displaymessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '200px';
});
