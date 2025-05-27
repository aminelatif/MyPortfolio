// Leçon : Dérivation (Sciences Expérimentales)
export default {
  id: "derivation",
  title: "Dérivation",
  parts: [
    {
      id: "definition-derivee",
      title: "Définition de la dérivée",
      definition: "La dérivée d'une fonction $f$ en un point $a$ est la limite du taux d'accroissement : $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$",
      example: "Pour $f(x) = x^2$, on a $f'(x) = 2x$",
      gameQuestions: [
        { question: "Quelle est la dérivée de $f(x) = x^3$ ?", answer: "$3x^2$" }
      ],
      exercises: [
        { question: "Calculez la dérivée de $f(x) = 2x^2 + 3x$", answer: "$4x + 3$" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-derivee",
      title: "Propriétés de la dérivée",
      definition: "La dérivée d'une somme est la somme des dérivées : $(f + g)' = f' + g'$",
      example: "Si $f(x) = x^2$ et $g(x) = 3x$, alors $(f + g)'(x) = 2x + 3$",
      gameQuestions: [
        { question: "Quelle est la dérivée de $f(x) = x^2 + 3x$ ?", answer: "$2x + 3$" }
      ],
      exercises: [
        { question: "Calculez la dérivée de $f(x) = x^3 + 2x^2$", answer: "$3x^2 + 4x$" }
      ],
      gameType: "quiz"
    }
  ]
}; 