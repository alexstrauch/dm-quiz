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