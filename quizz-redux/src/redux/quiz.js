import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizStarted: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "What is the capital of France?",
      alt1: "Paris",
      alt2: "Berlin",
      alt3: "London",
      correctAnswer: 1,
      id: 1,
    },
    {
      title: "Who painted the Mona Lisa?",
      alt1: "Pablo Picasso",
      alt2: "Leonardo da Vinci",
      alt3: "Vincent van Gogh",
      correctAnswer: 2,
      id: 2,
    },
    {
      title: "Which planet is known as the Red Planet?",
      alt1: "Venus",
      alt2: "Mars",
      alt3: "Jupiter",
      correctAnswer: 2,
      id: 3,
    },
  ],
};

export const [
  useQuestion,
  {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    startQuiz,
    answerQuestion,
    resetQuiz,
  },
] = createReduxModule("question", initialState, {
  addQuestion: (state, question) => {
    const oldQuestion = state.questions;
    const newQuestion = [...oldQuestion, question];
    return { ...state, questions: newQuestion };
  },
  deleteQuestion: (state, objectID) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== objectID),
    };
  },
  updateQuestion: (state, updatedQuestion) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id == updatedQuestion.id) {
          return updatedQuestion;
        }
        return question;
      }),
    };
  },
  startQuiz: (state) => {
    return {
      ...state,
      quizStarted: true,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
  answerQuestion: (state, answer) => {
    const score =
      state.score +
      (answer === state.questions[state.currentQuestion]?.correctAnswer
        ? 1
        : 0);
    if (state.currentQuestion === state.questions.length - 1) {
      return {
        ...state,
        score,
        showResult: true,
        quizStarted: false,
      };
    } else {
      return {
        ...state,
        score,
        currentQuestion: state.currentQuestion + 1,
      };
    }
  },
  resetQuiz: (state) => {
    return {
      ...state,
      quizStarted: false,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});