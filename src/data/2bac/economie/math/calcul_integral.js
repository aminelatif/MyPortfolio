// Leçon : Calcul intégral (Économie)
export default {
  id: "calcul_integral",
  title: "Calcul intégral",
  parts: [
    {
      id: "definition-integrale",
      title: "Définition de l'intégrale",
      sections: [
        { title: "Définition", content: "L'intégrale d'une fonction sur un intervalle est l'aire sous la courbe de la fonction." },
        { title: "Exemple", content: "L'intégrale de f(x) = x sur [0,1] est 1/2." },
        { title: "Remarque", content: "L'intégrale est un outil fondamental pour calculer des aires et des volumes en économie." }
      ],
      gameQuestions: [
        { question: "Quelle est l'intégrale de f(x) = 2x sur [0,1] ?", answer: "1" }
      ],
      exercises: [
        { question: "Calculez l'intégrale de f(x) = x² sur [0,2].", answer: "8/3" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-integrale",
      title: "Propriétés de l'intégrale",
      sections: [
        { title: "Définition", content: "L'intégrale est linéaire et l'intégrale d'une somme est la somme des intégrales." },
        { title: "Exemple", content: "Si f(x) = x² et g(x) = x, alors ∫(f + g)(x)dx = ∫f(x)dx + ∫g(x)dx." },
        { title: "Remarque", content: "Ces propriétés facilitent le calcul des intégrales de fonctions complexes." }
      ],
      gameQuestions: [
        { question: "Quelle est l'intégrale de f(x) = x² + x sur [0,1] ?", answer: "5/6" }
      ],
      exercises: [
        { question: "Calculez l'intégrale de f(x) = 2x² + 3x sur [0,2].", answer: "20/3" }
      ],
      gameType: "quiz"
    }
  ]
}; 