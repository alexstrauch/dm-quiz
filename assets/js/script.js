// Grabbing references to the HTML elements for the quiz interface
const questionText = document.getElementById('question-text');
const answers = document.getElementById('answers');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('rules-button');
const usernameModal = document.getElementById('username-modal');
const usernameInput = document.getElementById('username-input');
const usernameSubmit = document.getElementById('username-submit');
const rulesModal = document.getElementById('rules-modal');
const closeModal = document.querySelectorAll('.modal .close');

// Quiz state variables
let currentQuestion = 0;  // Tracks the current question index
let score = 0;  // Tracks the user's score
let username = '';  // Stores the username entered by the user

// Array of quiz questions with their options and the index of the correct answer
const questions = [
            
    {
        question: "What is Depeche Mode's first studio album?",
        options: ["Speak & Spell", "A Broken Frame", "Construction Time Again", "Black Celebration"],
        correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
        question: "Who is the lead vocalist of Depeche Mode?",
        options: ["Martin Gore", "Dave Gahan", "Alan Wilder", "Andrew Fletcher"],
        correctAnswer: 1
    },
    {
        question: "Which album features the hit song 'Personal Jesus'?",
        options: ["Songs of Faith and Devotion", "Black Celebration", "Violator", "Music for the Masses"],
        correctAnswer: 2
    },
    {
        question: "What is the name of Depeche Mode's iconic 1990 album?",
        options: ["Violator", "Black Celebration", "Music for the Masses", "Songs of Faith and Devotion"],
        correctAnswer: 0
    },
    {
        question: "Which album marked the departure of Alan Wilder from Depeche Mode?",
        options: ["Songs of Faith and Devotion", "Ultra", "Exciter", "Playing the Angel"],
        correctAnswer: 1
    },
    {
        question: "What is the name of Depeche Mode's first live album?",
        options: ["Everything Counts", "A Broken Frame", "Black Celebration", "101"],
        correctAnswer: 3
    },
    {
        question: "Which song features a prominent use of the Roland TB-303 synthesizer?",
        options: ["Enjoy the Silence", "Never Let Me Down Again", "Walking in My Shoes", "Policy of Truth"],
        correctAnswer: 1
    },
    {
        question: "What is the name of Depeche Mode's 2017 album?",
        options: ["Delta Machine", "Sounds of the Universe", "Spirit", "Playing the Angel"],
        correctAnswer: 2
    },
    {
        question: "Which member of Depeche Mode passed away in 2022?",
        options: ["Martin Gore", "Dave Gahan", "Alan Wilder", "Andrew Fletcher"],
        correctAnswer: 3
    },
    {
        question: "What is the name of Depeche Mode's most recent album released in 2023?",
        options: ["Memento Mori", "Violator", "Songs of Faith and Devotion", "Black Celebration"],
        correctAnswer: 0
    }

];

// Event listener for starting the quiz (opens username modal)
startButton.addEventListener('click', () => {
    usernameModal.style.display = 'block';
});

// Event listener for submitting username and starting the quiz
usernameSubmit.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        // Hide modals and buttons, show quiz elements
        usernameModal.style.display = 'none';
        startButton.classList.add('hidden');
        rulesButton.classList.add('hidden');
        questionText.classList.remove('hidden');
        answers.classList.remove('hidden');
        scoreDisplay.classList.remove('hidden');
        loadQuestion();
    } else {
        alert('Please enter a valid username.');
    }
});

// Event listener for displaying rules modal
rulesButton.addEventListener('click', () => {
    rulesModal.style.display = 'block';
});

// Event listeners for closing modals
closeModal.forEach(element => {
    element.addEventListener('click', () => {
        usernameModal.style.display = 'none';
        rulesModal.style.display = 'none';
    });
});

/**
 * Loads the current question and its answer options into the UI.
 */
function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    answers.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        answers.appendChild(button);
    });
}

/**
 * Checks if the selected answer is correct, updates the score, and loads the next question.
 */
function checkAnswer(selectedAnswerIndex) {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;
    const correctAnswer = questions[currentQuestion].options[correctAnswerIndex];

    if (selectedAnswerIndex === correctAnswerIndex) {
        feedback.textContent = "Correct!";
        feedback.style.color = 'green';
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        feedback.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
        feedback.style.color = 'red';
    }

    feedback.classList.remove('hidden');
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            loadQuestion();
            feedback.textContent = "";
        }, 2500);
    } else {
        setTimeout(() => {
            questionText.classList.add('hidden');
            feedback.textContent = `You finished the quiz, ${username}!`;
            scoreDisplay.textContent = `Final Score: ${score} / ${questions.length}`;

            const retryButton = document.createElement('button');
            retryButton.textContent = "Retry Quiz";
            retryButton.setAttribute('id', 'retry-button');
            retryButton.addEventListener('click', resetQuiz);

            answers.innerHTML = '';
            answers.appendChild(retryButton);
        }, 2500);
    }
}