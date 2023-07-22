const DATA = [
  {
    question_exercise: "Задание 1",
    question:
      "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: [
      {
        id: 1,
        value: "Да, сумма явно неверная",
        correct: true,
      },
      {
        id: 2,
        value: "Нет, такая сумма вполне могла получиться",
        correct: false,
      },
      {
        id: 3,
        value: "Не знаю, не получается решить",
        correct: false,
      },
    ],
  },
  {
    question_exercise: "Задание 2",
    question:
      "Петр Петрович приобрел в магазине в центре несколько пачек макарон по 80 рублей, несколько пачек печенья по 20 рублей и 3 пакета молока. Продавщица сказала, что с него 600 рублей (скидка не предусмотрена). Петр Петрович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
    answers: [
      {
        id: 4,
        value: "Да, сумма явно неверная",
        correct: false,
      },
      {
        id: 5,
        value: "Нет, такая сумма вполне могла получиться",
        correct: false,
      },
      {
        id: 6,
        value: "Не знаю, не получается решить",
        correct: true,
      },
    ],
  },
];

let localResults = {};

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnText = document.getElementById("btn-text");
const btnRestart = document.getElementById("btn-restart");

const renderQuestions = (index) => {
  renderIndicator(index + 1);

  questions.dataset.currentStep = index;

  const renderAnswers = () =>
    DATA[index].answers
      .map(
        (answer) => `
    <li>
      <label class="label">
         <input class="answer-input" type="radio" name=${index} value=${answer.id}>
         <span class="fake"></span>
         <span class="answer-value">${answer.value}</span>
      </label>
    </li>
    `
      )
      .join("");

  questions.innerHTML = `
    <div class="quiz-questions-item">
      <div class="quiz-questions-item__question">
      <div class="exercise">${DATA[index].question_exercise}</div><br/>
      ${DATA[index].question}
      </div>
      <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
    </div>
   `;
};

const renderResults = () => {
  let content = "";

  const getClassname = (answer, questionIndex) => {
    let className = "";

    if (!answer.correct && answer.id === Number(localResults[questionIndex])) {
      className = "answer--invalid";
    } else if (answer.correct) {
      className = "answer--valid";
    }

    return className;
  };

  const getAnswers = (questionIndex) =>
    DATA[questionIndex].answers
      .map(
        (answer) =>
          `<li class=${getClassname(answer, questionIndex)}>${
            answer.value
          }</li>`
      )
      .join("");

  DATA.forEach((question, index) => {
    content += `
    <div class="quiz-results-item">
    <div class="quiz-results-item__question">Ответ на <span style="text-transform: lowercase;">${
      question.question_exercise
    }</span>:</div>
    <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
    </div>`;
  });

  results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
  indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    localResults[event.target.name] = event.target.value;
    btnText.disabled = false;
  }
});

quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-text")) {
    const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

    if (DATA.length === nextQuestionIndex) {
      questions.classList.add("quiz-questions-item__question--hidden");
      questions.classList.add("questions--hidden");
      indicator.classList.add("indicator--hidden");
      results.classList.add("results--visible");
      btnText.classList.add("btn-text--hidden");
      btnRestart.classList.add("btn-restart--visible");
      btnRestart.classList.add("btn-restart--visible");
      renderResults();
    } else {
      renderQuestions(nextQuestionIndex);
    }

    btnText.disabled = true;
  }
  if (event.target.classList.contains("btn-restart")) {
    localResults = {};
    results.innerHTML = "";
    questions.classList.remove("quiz-questions-item__question--hidden");
    questions.classList.remove("questions--hidden");
    indicator.classList.remove("indicator--hidden");
    results.classList.remove("results--visible");
    btnText.classList.remove("btn-text--hidden");
    btnRestart.classList.remove("btn-restart--visible");
    renderQuestions(0);
  }
});

renderQuestions(0);
