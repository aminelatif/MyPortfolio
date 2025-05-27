// Leçon : Dérivation (Économie)
export default {
  id: "derivation",
  title: "Dérivation",
  parts: [
    {
      id: "definition-derivee",
      title: "Définition de la dérivée",
      definition: "La dérivée d'une fonction en un point est la limite du taux d'accroissement.",
      example: "La dérivée de f(x) = x² est f'(x) = 2x.",
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = x³ ?", answer: "3x²" }
      ],
      exercises: [
        { question: "Calculez la dérivée de f(x) = 2x² + 3x.", answer: "4x + 3" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-derivee",
      title: "Propriétés de la dérivée",
      definition: "La dérivée d'une somme est la somme des dérivées, et la dérivée d'un produit suit la règle du produit.",
      example: "Si f(x) = x² et g(x) = 3x, alors (f + g)'(x) = 2x + 3.",
      gameQuestions: [
        { question: "Quelle est la dérivée de f(x) = x² + 3x ?", answer: "2x + 3" }
      ],
      exercises: [
        { question: "Calculez la dérivée de f(x) = x³ + 2x².", answer: "3x² + 4x" }
      ],
      gameType: "quiz"
    }
  ]
}; 