const DATA = [
   {
      question: 'Вопрос 1',
      answers: [
         {
            id: 1,
            value: 'Ответ 1',
            correct: true,
         },
         {
            id: 2,
            value: 'Ответ 2',
            correct: false,
         },
         {
            id: 3,
            value: 'Ответ 3',
            correct: false,
         },
      ]
   },
   {
      question: 'Вопрос 2',
      answers: [
         {
            id: 4,
            value: 'Ответ 1',
            correct: false,
         },
         {
            id: 5,
            value: 'Ответ 2',
            correct: true,
         },
         {
            id: 6,
            value: 'Ответ 3',
            correct: false,
         },
      ]
   }
]

const quiz = document.getElementById('quiz')
const questions = document.getElementById('questions')
const indicator = document.getElementById('indicator')
const results = document.getElementById('results')
const btnText = document.getElementById('btn-text')
const btnRestart = document.getElementById('btn-restart')

const renderQuestions = () => {}

const renderResults = () => {}

const renderIndicator = () => {}

quiz.addEventListener('change', (event) => {
   // Логика ответа
})

quiz.addEventListener('click', (event) => {
   // Кнопка вперед или сначала
})
