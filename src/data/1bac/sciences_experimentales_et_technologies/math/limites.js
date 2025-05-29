export default {
  id: "limites",
  title: "Les limites",
  parts: [
    {
      id: "notion-limite",
      title: "Notion de limite",
      sections: [
        { title: "Définition", content: "La limite d'une fonction f en un point a est la valeur vers laquelle tend f(x) lorsque x se rapproche de a. On note lim(x→a) f(x) = L. On distingue les limites finies et infinies, ainsi que les limites à gauche (x→a⁻) et à droite (x→a⁺)." },
        { title: "Exemple", content: "La fonction f(x) = 1/x a pour limite 0 quand x tend vers l'infini: lim(x→∞) 1/x = 0. Elle n'a pas de limite en 0 car lim(x→0⁺) 1/x = +∞ et lim(x→0⁻) 1/x = -∞." },
        { title: "Remarque", content: "La notion de limite est fondamentale pour l'étude de la continuité, de la dérivabilité et des asymptotes des fonctions." }
      ],
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = x² quand x tend vers +∞?", answer: "+∞" },
        { question: "Quelle est la limite de f(x) = sin(x)/x quand x tend vers 0?", answer: "1" }
      ],
      exercises: [
        { question: "Calculez la limite de f(x) = (x²-1)/(x-1) quand x tend vers 1.", answer: "La fonction présente une forme indéterminée 0/0 en x = 1. En factorisant: f(x) = (x²-1)/(x-1) = ((x-1)(x+1))/(x-1) = x+1. Donc lim(x→1) f(x) = 1+1 = 2." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-limites",
      title: "Opérations sur les limites",
      sections: [
        { title: "Définition", content: "Si lim f(x) = a et lim g(x) = b (limites finies), alors: lim(f+g) = a+b, lim(f×g) = a×b, lim(f/g) = a/b si b≠0. Ces règles s'étendent aux cas où certaines limites sont infinies, avec des précautions pour les formes indéterminées comme 0/0, ∞/∞, 0×∞." },
        { title: "Exemple", content: "Si lim f(x) = 3 et lim g(x) = 2, alors lim(f(x)×g(x)) = 3×2 = 6 et lim(f(x)/g(x)) = 3/2. Si lim f(x) = +∞ et lim g(x) = 5, alors lim(f(x)+g(x)) = +∞." },
        { title: "Remarque", content: "Les opérations sur les limites permettent de simplifier le calcul de limites complexes, mais il faut être attentif aux formes indéterminées qui nécessitent des techniques spécifiques." }
      ],
      gameQuestions: [
        { question: "Si lim f(x) = +∞ et lim g(x) = -∞, que peut-on dire de lim(f(x)+g(x))?", answer: "C'est une forme indéterminée ∞-∞, on ne peut pas conclure sans plus d'informations" },
        { question: "Si lim f(x) = 0 et lim g(x) = +∞, que vaut lim(f(x)×g(x))?", answer: "C'est une forme indéterminée 0×∞, on ne peut pas conclure sans plus d'informations" }
      ],
      exercises: [
        { question: "Calculez la limite de f(x) = (3x²-2x+1)/(2x²+5) quand x tend vers +∞.", answer: "En divisant numérateur et dénominateur par x²: f(x) = (3-2/x+1/x²)/(2+5/x²). Quand x→+∞, les termes en 1/x et 1/x² tendent vers 0, donc lim f(x) = 3/2." }
      ],
      gameType: "quiz"
    },
    {
      id: "limites-fonctions-reference",
      title: "Limites des fonctions de référence",
      sections: [
        { title: "Définition", content: "Certaines fonctions usuelles ont des limites connues: lim(x→+∞) x^n = +∞ pour n>0, lim(x→+∞) 1/x^n = 0 pour n>0. Pour les fonctions trigonométriques: sin et cos sont bornées entre -1 et 1, lim(x→0) sin(x)/x = 1." },
        { title: "Exemple", content: "lim(x→+∞) √x = +∞, lim(x→+∞) e^x = +∞, lim(x→-∞) e^x = 0, lim(x→+∞) ln(x) = +∞, lim(x→0⁺) ln(x) = -∞" },
        { title: "Remarque", content: "La connaissance des limites des fonctions de référence permet de traiter rapidement de nombreux cas de limites et d'étudier les comportements asymptotiques." }
      ],
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = x·e^(-x) quand x tend vers +∞?", answer: "0" },
        { question: "Quelle est la limite de f(x) = (1+1/x)^x quand x tend vers +∞?", answer: "e" }
      ],
      exercises: [
        { question: "Calculez la limite de f(x) = (x²-1)·e^(-x) quand x tend vers +∞.", answer: "Le terme x² croît moins vite que e^x, donc x²·e^(-x) tend vers 0 quand x→+∞. Par conséquent, lim f(x) = lim (x²-1)·e^(-x) = 0." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 