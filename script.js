const questions = [
    {
        question:"Who is the current Lagos State Governor?",
        a:"Akinwunmi Ambode",
        b:"Bola Tinubu",
        c:"Babatunde Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"d",
    },

    {
        question:"Who is the current Oyo State Governor?",
        a:"Akinwunmi Ambode",
        b:"Engineer Seyi Makinde",
        c:"Seyi Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"b",
    },
    {
        question:"Who is the current Lagos State Governor?",
        a:"Akinwunmi Ambode",
        b:"Bola Tinubu",
        c:"Babatunde Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"d",
    },

    {
        question:"Who is the current Oyo State Governor?",
        a:"Akinwunmi Ambode",
        b:"Engineer Seyi Makinde",
        c:"Seyi Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"b",
    },
    {
        question:"Who is the current Lagos State Governor?",
        a:"Akinwunmi Ambode",
        b:"Bola Tinubu",
        c:"Babatunde Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"d",
    },

    {
        question:"Who is the current Oyo State Governor?",
        a:"Akinwunmi Ambode",
        b:"Engineer Seyi Makinde",
        c:"Seyi Fashola",
        d:"Babajide Sanwon-olu",
        e:"Oyatunji Adedamola",
        answer:"b",
    },
]

let question = document.getElementById('question');
let optionA = document.getElementById('text-a');
let optionB = document.getElementById('text-b');
let optionC = document.getElementById('text-c');
let optionD = document.getElementById('text-d');
let optionE = document.getElementById('text-e');

let submit = document.getElementById('submit');

let currentQuestion = 0;

load();

function load() {
    const currentQuiz = questions[currentQuestion];

    question.innerText = currentQuiz.question;
    optionA.innerText = currentQuiz.a;
    optionB.innerText = currentQuiz.b;
    optionC.innerText = currentQuiz.c;
    optionD.innerText = currentQuiz.d;
    optionE.innerText = currentQuiz.e;

    currentQuestion++
}

submit.addEventListener('click', (e)=> {
    e.preventDefault()

    load();
})