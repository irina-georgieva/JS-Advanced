function solve() {
  let questions = Array.from(document.querySelectorAll('section'));
  let buttons = Array.from(document.querySelectorAll('.answer-text'));
  let rightAnswers = 0;
  let index = 0;
  let resultElement = document.querySelector('#results');
  let result = document.querySelector('.results-inner h1');

  buttons.forEach(button => {
    if (button == buttons[0] || button == buttons[3] || button == buttons[4]) {
      button.addEventListener('click', rightChangeQuestion);
    } else {
      button.addEventListener('click', changeQuestion);
    }
  });

  function rightChangeQuestion() {
    rightAnswers++;
    changeQuestion();
  };


  function changeQuestion() {
    questions[index].style.display = 'none';
    if (index === 2) {
      showResult();
    } else {
      questions[index + 1].style.display = 'block';
      index++;
    }
  };

  function showResult() {
    resultElement.style.display = 'block';
    if (rightAnswers === 3) {
      result.innerHTML = "You are recognized as top JavaScript fan!";
    } else {
      result.innerHTML = `You have ${rightAnswers} right answers`;
    }
  };
}



