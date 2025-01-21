function solve() {
  
  const correctAnswers = [
      'onclick',
      'JSON.stringify()',
      'A programming API for HTML and XML documents'
  ];

  let currentQuestion = 0;
  let rightAnswers = 0;

  const sections = document.querySelectorAll('section');
  const resultsElement = document.querySelector('#results h1');


  const answers = document.querySelectorAll('.quiz-answer');
  
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = i === 0 ? '' : '';
    }

    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', function () {
            const answerText = this.textContent.trim();

            if (answerText === correctAnswers[currentQuestion]) {
                rightAnswers++;
            }

            sections[currentQuestion].style.display = 'none';
            currentQuestion++;

            if (currentQuestion < sections.length) {
                sections[currentQuestion].style.display = 'block';
            } else {
                displayResults();
            }
      });
}
  function displayResults() {
      const resultsSection = document.querySelector('#results');
      resultsSection.style.display = 'block';

      if (rightAnswers === correctAnswers.length) {
          resultsElement.textContent = 'You are recognized as top JavaScript fan!';
      } else {
          resultsElement.textContent = `You have ${rightAnswers} right answers`;
      }
  }
}
