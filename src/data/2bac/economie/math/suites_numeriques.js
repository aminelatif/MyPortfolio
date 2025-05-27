// Leçon : Suites numériques (Économie)
export default {
  id: "suites_numeriques",
  title: "Suites numériques",
  parts: [
    {
      id: "definition-suite",
      title: "Définition d'une suite numérique",
      definition: "Une suite numérique est une fonction définie sur N ou une partie de N.",
      example: "u_n = 2n + 1 est une suite numérique.",
      gameQuestions: [
        { question: "u_n = n^2 est-elle une suite numérique ?", answer: "Oui" }
      ],
      exercises: [
        { question: "Donnez un exemple de suite arithmétique.", answer: "u_n = 3n + 2" }
      ],
      gameType: "quiz"
    },
    {
      id: "suite-arithmetique-geometrique",
      title: "Suite arithmétique et géométrique",
      definition: "Une suite arithmétique a une raison constante, tandis qu'une suite géométrique a un quotient constant.",
      example: "u_n = 2n est une suite arithmétique de raison 2, et v_n = 2^n est une suite géométrique de raison 2.",
      gameQuestions: [
        { question: "Quelle est la raison de la suite arithmétique u_n = 5n + 1 ?", answer: "5" }
      ],
      exercises: [
        { question: "Calculez la raison de la suite arithmétique u_n = 7n - 3.", answer: "7" }
      ],
      gameType: "quiz"
    }
  ]
}; 