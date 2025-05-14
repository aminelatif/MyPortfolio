export default {
  id: "limites",
  title: "Limites",
  parts: [
    {
      id: "notion-limite",
      title: "Notion de limite",
      definition: "La notion de limite décrit le comportement d'une fonction lorsque la variable s'approche d'une valeur donnée ou tend vers l'infini.",
      example: "lim(x→2) (x² - 4)/(x - 2) = 4",
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = 1/x quand x tend vers +∞ ?", answer: "0" }
      ],
      exercises: [
        { question: "Calculez la limite de f(x) = (x²-1)/(x-1) quand x tend vers 1.", answer: "2" }
      ],
      gameType: "quiz"
    }
  ]
}; 