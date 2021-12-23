function buildQuiz(){
    const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}




function showResults(){
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}





const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');





const myQuestions = [
    {
      question: "Who drew the sword from the stone?",
      answers: {
        a: "King Arthur",
        b: "Sir Lancelot",
        c: "Morgan le Fay",
        d: "Merlin"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is known as the greatest sorcerer of all time?",
      answers: {
        a: "Morgan le Fay",
        b: "Mordred",
        c: "Merlin",
        d: "Morgause"
      },
      correctAnswer: "c"
    },
    {
      question: "Which knight is known to have made a deal with the Green Knight?",
      answers: {
        a: "Sir Percival",
        b: "Sir Gawaine",
        c: "Sir Elyan",
        d: "Sir Lionel"
      },
      correctAnswer: "b"
    },
    {
        question: "Which knight had the quest to retrieve the Holy Grail?",
        answers: {
          a: "Sir Lionel",
          b: "Sir Elyan",
          c: "Sir Gawaine",
          d: "Sir Galahad"
        },
        correctAnswer: "d"
      },
      {
        question: "Which knight is raised by the Lady of the Lake?",
        answers: {
          a: "Sir Lancelot",
          b: "Sir Percival",
          c: "Sir Gawaine",
          d: "Sir Agravaine"
        },
        correctAnswer: "a"
      },
      {
        question: "Which knight betrayed King Arthur with his wife Guinevere?",
        answers: {
          a: "Sir Gawaine",
          b: "Sir Percival",
          c: "Sir Lancelot",
          d: "Sir Lionel"
        },
        correctAnswer: "c"
      },
      {
        question: "Who struck a mortal blow to King Arthur?",
        answers: {
          a: "Morgan le Fay",
          b: "Mordred",
          c: "Merlin",
          d: "Sir Lancelot"
        },
        correctAnswer: "b"
      },
      {
        question: "Who is the half sister of King Arthur?",
        answers: {
          a: "Morgause",
          b: "Nimue",
          c: "Guinevere",
          d: "Morgan le Fay"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the name of the kingdom that King Arthur rules?",
        answers: {
          a: "Mercia",
          b: "Albion",
          c: "Camelot",
          d: "Essetir"
        },
        correctAnswer: "c"
      },
      {
        question: "Who ruled Camelot prior to King Arthur?",
        answers: {
          a: "King Uther",
          b: "King Pellinore",
          c: "The Fisher King",
          d: "King Cynric"
        },
        correctAnswer: "a"
      }
  ];









// display quiz right away
buildQuiz();

// on submit, show results
submitBtn.addEventListener('click', showResults);

