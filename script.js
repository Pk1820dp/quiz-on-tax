// Quiz questions data array
const quizData = [
    {
        question: "Why is Tax Necessary for India?",
        a: "Tax is the main source of revenue", b: "Government Uses tax to develop the country", c: "Government provide essential sevices us Tax ", d: "All of the above",
        correct: "d",
    },
    {
        question: "What is GST?",
        a: "Goods & Sells Tax ", b: "Government sales tax", c: "Goods & Services Tax", d: "none of the above ",
        correct: "c",
    },
    {
        question: "When was the GST Launched in India?",
        a: "1 July 2017", b: "1 jan 2016", c: "1 june 2000", d: "1 july 2020",
        correct: "a", 
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuiz = 0;
let score = 0;
let selectedAnswer = null;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    document.getElementById('btn1').innerText = currentQuizData.a;
    document.getElementById('btn2').innerText = currentQuizData.b;
    document.getElementById('btn3').innerText = currentQuizData.c;
    document.getElementById('btn4').innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerBtns.forEach(btn => btn.classList.remove('selected'));
    selectedAnswer = null;
}

// Add selection logic to choice buttons
answerBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        deselectAnswers();
        btn.classList.add('selected');
        // Map button index back to keys a, b, c, d
        selectedAnswer = ['a', 'b', 'c', 'd'][index];
    });
});

nextBtn.addEventListener('click', () => {
    if (!selectedAnswer) {
        alert("Please select an answer before proceeding!");
        return;
    }

    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
            <button class="next-action-btn" onclick="location.reload()">Reload Quiz</button>
        `;
    }
});