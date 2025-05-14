export default {
  id: "calcul-trigonometrique",
  title: "Calcul trigonométrique",
  parts: [
    {
      id: "formules-addition",
      title: "Formules d'addition",
      definition: "Les formules d'addition permettent d'exprimer les fonctions trigonométriques d'une somme ou d'une différence d'angles.",
      example: "cos(a+b) = cos(a)cos(b) - sin(a)sin(b)",
      gameQuestions: [
        { question: "Quelle est la formule de sin(a+b) ?", answer: "sin(a+b) = sin(a)cos(b) + cos(a)sin(b)" }
      ],
      exercises: [
        { question: "Calculez sin(75°) en utilisant les formules d'addition.", answer: "sin(75°) = sin(45° + 30°) = sin(45°)cos(30°) + cos(45°)sin(30°) = (√2/2)·(√3/2) + (√2/2)·(1/2) = √6/4 + √2/4 = (√6 + √2)/4" }
      ],
      gameType: "quiz"
    },
    {
      id: "formules-duplication",
      title: "Formules de duplication",
      definition: "Les formules de duplication permettent d'exprimer les fonctions trigonométriques d'un angle double.",
      example: "cos(2a) = cos²(a) - sin²(a) = 2cos²(a) - 1 = 1 - 2sin²(a)",
      gameQuestions: [
        { question: "Quelle est la formule de sin(2a) ?", answer: "sin(2a) = 2sin(a)cos(a)" }
      ],
      exercises: [
        { question: "Calculez cos(60°) en utilisant la formule de duplication.", answer: "cos(60°) = cos(2·30°) = 2cos²(30°) - 1 = 2·(√3/2)² - 1 = 2·(3/4) - 1 = 3/2 - 1 = 1/2" }
      ],
      gameType: "quiz"
    },
    {
      id: "equations-trigonometriques",
      title: "Équations trigonométriques",
      definition: "Les équations trigonométriques sont des équations où l'inconnue apparaît dans des expressions trigonométriques.",
      example: "Pour résoudre cos(x) = 1/2, on trouve x = ±π/3 + 2kπ, k ∈ ℤ",
      gameQuestions: [
        { question: "Quelles sont les solutions de sin(x) = 0 sur [0, 2π] ?", answer: "x = 0, π, 2π" }
      ],
      exercises: [
        { question: "Résolvez l'équation 2cos²(x) - 1 = 0 sur [0, 2π].", answer: "x = π/4, 3π/4, 5π/4, 7π/4" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 