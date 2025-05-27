// Leçon : Limites et continuité (Sciences Expérimentales)
export default {
  id: "limites_et_continuite",
  title: "Limites et continuité",
  parts: [
    {
      id: "definition-limite",
      title: "Définition de la limite",
      definition: "La limite d'une fonction en un point est la valeur vers laquelle tend la fonction lorsque la variable s'approche de ce point.",
      example: "La limite de f(x) = x² en 2 est 4.",
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = 2x + 1 en x = 3 ?", answer: "7" }
      ],
      exercises: [
        { question: "Calculez la limite de f(x) = x² - 1 en x = 2.", answer: "3" }
      ],
      gameType: "quiz"
    },
    {
      id: "definition-continuite",
      title: "Définition de la continuité",
      definition: "Une fonction est continue en un point si la limite de la fonction en ce point est égale à la valeur de la fonction en ce point.",
      example: "La fonction f(x) = x² est continue en tout point de son domaine.",
      gameQuestions: [
        { question: "La fonction f(x) = 1/x est-elle continue en x = 0 ?", answer: "Non" }
      ],
      exercises: [
        { question: "Étudiez la continuité de la fonction f(x) = |x| en x = 0.", answer: "La fonction est continue en x = 0" }
      ],
      gameType: "quiz"
    }
  ]
}; 