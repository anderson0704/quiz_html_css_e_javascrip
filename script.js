const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
      answer: "Brasília"
    },
    {
      question: "Quem escreveu 'Dom Quixote'?",
      choices: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "Jane Austen"],
      answer: "Miguel de Cervantes"
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      choices: ["Terra", "Vênus", "Júpiter", "Marte"],
      answer: "Júpiter"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
  
    choicesElement.innerHTML = '';
    q.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => {
        checkAnswer(choice);
      });
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    const q = questions[currentQuestion];
    if (choice === q.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = "'Você acertou'  {score} 'de' {questions.length} perguntas.";
  }
  
  submitButton.addEventListener('click', () => {
    checkAnswer();
  });
  
  showQuestion();