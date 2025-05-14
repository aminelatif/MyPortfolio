export default {
  id: "generalites-fonctions",
  title: "Généralités sur les fonctions",
  parts: [
    {
      id: "definitions-base",
      title: "Définitions de base",
      definition: "Une fonction f d'un ensemble E vers un ensemble F est une relation qui à tout élément x de E associe un unique élément y de F noté f(x). On note f: E → F. Le domaine de définition est l'ensemble des valeurs de x pour lesquelles f(x) existe.",
      example: "Pour la fonction f(x) = √x, le domaine de définition est Df = [0, +∞[ car la racine carrée d'un nombre négatif n'est pas définie dans ℝ.",
      gameQuestions: [
        { question: "Quel est le domaine de définition de la fonction f(x) = ln(x+2)?", answer: "]-2, +∞[" },
        { question: "Si f(x) = (x²-1)/(x-3), quel est le domaine de définition?", answer: "ℝ\\{3}" }
      ],
      exercises: [
        { question: "Déterminez le domaine de définition de la fonction f(x) = √(1-x)/x", answer: "Df = ]0,1]" }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-fonctions",
      title: "Opérations sur les fonctions",
      definition: "Pour deux fonctions f et g de domaines Df et Dg, on définit: (f+g)(x) = f(x) + g(x), (f×g)(x) = f(x) × g(x), (f/g)(x) = f(x)/g(x) si g(x)≠0, et (f∘g)(x) = f(g(x)) si g(x) ∈ Df.",
      example: "Si f(x) = x² et g(x) = x+1, alors (f∘g)(x) = f(g(x)) = f(x+1) = (x+1)².",
      gameQuestions: [
        { question: "Si f(x) = x² et g(x) = 2x+3, que vaut (f∘g)(2)?", answer: "49" },
        { question: "Si f(x) = 1/x et g(x) = x-1, quel est le domaine de (f∘g)?", answer: "ℝ\\{0,1}" }
      ],
      exercises: [
        { question: "Si f(x) = x+1 et g(x) = x², trouvez les fonctions f∘g et g∘f.", answer: "f∘g(x) = x²+1 et g∘f(x) = (x+1)² = x²+2x+1" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-fonctions",
      title: "Propriétés des fonctions",
      definition: "Une fonction f est paire si f(-x) = f(x), impaire si f(-x) = -f(x). Elle est périodique de période T si f(x+T) = f(x). Elle est injective si f(a) = f(b) implique a = b, et surjective si tout élément de l'ensemble d'arrivée admet au moins un antécédent.",
      example: "La fonction f(x) = x² est paire car f(-x) = (-x)² = x² = f(x). La fonction g(x) = sin(x) est impaire et périodique de période 2π.",
      gameQuestions: [
        { question: "La fonction f(x) = x³-x est-elle paire, impaire ou ni l'une ni l'autre?", answer: "Impaire" },
        { question: "La fonction f(x) = e^x est-elle injective?", answer: "Oui" }
      ],
      exercises: [
        { question: "Montrez que f(x) = x³+x est impaire.", answer: "f(-x) = (-x)³+(-x) = -x³-x = -(x³+x) = -f(x), donc f est impaire." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 