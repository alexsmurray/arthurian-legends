//creates the quiz
function buildQuiz(){
    const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // array of possible answers
      const answers = [];

      // each answers creates a radio button
      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add question and answers to slide
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
      );
    }
  );

 
  quizContainer.innerHTML = output.join('');
}



 // gather answers from our quiz
function showResults(){
  
  const answerContainers = quizContainer.querySelectorAll('.answers');


  let numCorrect = 0;


  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct add to total correct and display green
    if(userAnswer === currentQuestion.correctAnswer){
     
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank it is red
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}





// creates slides and adds and removes buttons
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousBtn.style.display = 'none';
    }
    else{
      previousBtn.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-block';
    }
    else{
      nextBtn.style.display = 'inline-block';
      submitBtn.style.display = 'none';
    }
  }



  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }








const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');






// array of questions
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








// display quiz
buildQuiz();


// adds buttons for slides
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// display slide pagination
showSlide(currentSlide);




// event listeners for submit, next, and previous buttons
submitBtn.addEventListener('click', showResults);
previousBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);

