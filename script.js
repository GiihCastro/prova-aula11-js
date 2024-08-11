const questions = [
    'De quem é a famosa frase “Penso, logo existo”?',
    "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    "Atualmente, quantos elementos químicos a tabela periódica possui?",
    "Quanto tempo a luz do Sol demora para chegar à Terra?",
    "Em que período da pré-história o fogo foi descoberto?",
    "Qual o maior animal terrestre?",
    "Como se chamam os vasos que transportam sangue do coração para a periferia do corpo?",
    "Qual o metal cujo símbolo químico é o Au?"

];

const options = [
    ["Platão", "Galileu Galilei", "Descartes", "Sócrates"],
    ["O Senhor dos Anéis", "Dom Quixote", "O Pequeno Príncipe", "Um Conto de Duas Cidades"],
    ["113", "109", "118", "92"],
    ["30 minutos", "1 dia", "12 horas", "8 minutos"],
    ["Paleolítico", "Neolítico", "Idade dos Metais", "Idade Média"],
    ["Baleia Azul", "Elefante africano", "Tubarão Branco", "Girafa"],
    ["Veias", "Átrios", "Artérias", "Aurículos"],
    ["Cobre", "Prata", "Mercúrio", "Ouro"]
];

const correctAnswers = [2, 1, 2, 3, 0, 1, 2, 3];

let nowQuestion;

function generateQuestions(){
    nowQuestion = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerHTML = questions[nowQuestion];
    
    const optionsContainer = document.querySelectorAll('button');
    optionsContainer.forEach((element, index) => {
        element.textContent = options[nowQuestion][index];
    });
    
    document.getElementById("statusAnswer").innerHTML = '';
    document.getElementById('reload').style.display = 'none';
}

function checkAnswer(answer){
    answer = parseInt(answer);
    let statusAnswer = document.getElementById("statusAnswer");
    if (answer === correctAnswers[nowQuestion]) {
        statusAnswer.innerHTML = "Acertou!!!";
        statusAnswer.className = 'correct';
    } else {
        statusAnswer.innerHTML = `Errou! A resposta correta é ${options[nowQuestion][correctAnswers[nowQuestion]]}.`;
        statusAnswer.className = 'incorrect';
    }
    document.getElementById('reload').style.display = 'block';
}

function selectButton(){
    const alternatives = document.querySelectorAll('.alternative');
    
    alternatives.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.value;
            checkAnswer(answer);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateQuestions();
    selectButton();

    document.getElementById('reload').addEventListener('click', () => {
        generateQuestions();
    });
});
