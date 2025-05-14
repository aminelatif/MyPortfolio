export default {
  id: "integration",
  title: "Intégration",
  parts: [
    {
      id: "primitive-integrale",
      title: "Primitive et intégrale",
      definition: "Une primitive d'une fonction f sur un intervalle I est une fonction F telle que F' = f sur I. L'intégrale définie représente l'aire sous la courbe d'une fonction.",
      example: "∫(0 à 1) x² dx = [x³/3](0 à 1) = 1/3",
      gameQuestions: [
        { question: "Quelle est la primitive de f(x) = 2x qui s'annule en x = 0 ?", answer: "F(x) = x²" }
      ],
      exercises: [
        { question: "Calculez ∫(0 à π) sin(x) dx.", answer: "2" }
      ],
      gameType: "quiz"
    }
  ]
}; 