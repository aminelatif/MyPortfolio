export default {
  id: "limites-fonctions",
  title: "Limites de fonctions numériques",
  parts: [
    {
      id: "notion-limite",
      title: "Notion de limite",
      sections: [
        { title: "Définition", content: "La limite d'une fonction f en un point a, notée lim(x→a) f(x) = L, signifie que f(x) peut être rendue aussi proche que l'on veut de L en prenant x suffisamment proche de a." },
        { title: "Exemple", content: "lim(x→2) (x² - 4)/(x - 2) = lim(x→2) (x - 2)(x + 2)/(x - 2) = lim(x→2) (x + 2) = 4" },
        { title: "Remarque", content: "La notion de limite est fondamentale pour l'étude du comportement des fonctions aux bornes de leur domaine." }
      ],
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = 1/x quand x tend vers +∞ ?", answer: "0" }
      ],
      exercises: [
        { question: "Calculez lim(x→1) (x³-1)/(x-1)", answer: "3" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-limites",
      title: "Opérations sur les limites",
      sections: [
        { title: "Définition", content: "Si lim f(x) = L et lim g(x) = M, alors lim(f+g) = L+M, lim(f×g) = L×M, et si M ≠ 0, lim(f/g) = L/M." },
        { title: "Exemple", content: "Si lim f(x) = 3 et lim g(x) = 4, alors lim(f(x) × g(x)) = 3 × 4 = 12" },
        { title: "Remarque", content: "Les opérations sur les limites facilitent le calcul de limites de fonctions composées." }
      ],
      gameQuestions: [
        { question: "Si lim f(x) = 5 et lim g(x) = 2, quelle est la valeur de lim(3f(x) - 2g(x)) ?", answer: "11" }
      ],
      exercises: [
        { question: "Calculez lim(x→+∞) (3x² + 2x)/(x² + 1)", answer: "3" }
      ],
      gameType: "quiz"
    },
    {
      id: "formes-indeterminees",
      title: "Formes indéterminées",
      sections: [
        { title: "Définition", content: "Les formes indéterminées sont des expressions comme 0/0, ∞/∞, 0×∞, ∞-∞, etc., qui nécessitent des techniques spéciales pour déterminer leur limite." },
        { title: "Exemple", content: "Pour calculer lim(x→0) sin(x)/x, qui se présente sous la forme indéterminée 0/0, on utilise des propriétés spécifiques et on trouve que cette limite vaut 1." },
        { title: "Remarque", content: "La reconnaissance des formes indéterminées permet d'appliquer les bonnes méthodes de calcul de limites." }
      ],
      gameQuestions: [
        { question: "Quelle est la forme indéterminée de lim(x→+∞) (x² - x)/(2x² + 1) ?", answer: "∞/∞" }
      ],
      exercises: [
        { question: "Calculez lim(x→0) (1-cos(x))/x²", answer: "1/2" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 