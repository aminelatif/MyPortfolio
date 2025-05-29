// Leçon : Dérivation (Sciences Expérimentales)
export default {
  id: "derivation",
  title: "Dérivation",
  parts: [
    {
      id: "definition-derivee",
      title: "Définition de la dérivée",
      sections: [
        { title: "Définition", content: "La dérivée d'une fonction $f$ en un point $a$ est la limite du taux d'accroissement : $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$" },
        { title: "Exemple", content: "Pour $f(x) = x^2$, on a $f'(x) = 2x$" },
        { title: "Remarque", content: "La dérivation permet de calculer les variations instantanées, essentielles en sciences expérimentales pour l'étude des phénomènes physiques." }
      ],
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
      sections: [
        { title: "Définition", content: "La dérivée d'une somme est la somme des dérivées : $(f + g)' = f' + g'$" },
        { title: "Exemple", content: "Si $f(x) = x^2$ et $g(x) = 3x$, alors $(f + g)'(x) = 2x + 3$" },
        { title: "Remarque", content: "Les propriétés de la dérivée facilitent le calcul des variations de fonctions complexes en sciences expérimentales." }
      ],
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