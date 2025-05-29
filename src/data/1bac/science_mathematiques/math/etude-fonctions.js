export default {
  id: "etude-fonctions",
  title: "Étude et représentation graphique d'une fonction",
  parts: [
    {
      id: "methode-etude",
      title: "Méthode d'étude complète",
      sections: [
        { title: "Définition", content: "L'étude complète d'une fonction comprend l'analyse de son domaine de définition, sa parité, ses limites, sa continuité, sa dérivabilité, ses variations, ses extrema, et ses asymptotes." },
        { title: "Exemple", content: "Pour étudier f(x) = (x² - 1)/(x - 2), on détermine d'abord le domaine Df = ℝ\\{2}, puis on calcule f'(x) pour étudier les variations..." },
        { title: "Remarque", content: "L'ordre d'étude est important : on commence par le domaine de définition avant d'analyser les autres propriétés." }
      ],
      gameQuestions: [
        { question: "Quel est le premier élément à déterminer lors de l'étude d'une fonction ?", answer: "Le domaine de définition" }
      ],
      exercises: [
        { question: "Donnez le domaine de définition et les points de discontinuité de f(x) = √(x² - 4)/(x + 1)", answer: "Df = ]-∞, -2] ∪ [2, +∞[\\{-1}, discontinuité en x = -1" }
      ],
      gameType: "quiz"
    },
    {
      id: "asymptotes",
      title: "Asymptotes et branches infinies",
      sections: [
        { title: "Définition", content: "Une asymptote est une droite dont la courbe se rapproche indéfiniment. On distingue les asymptotes horizontales (y = b), verticales (x = a) et obliques (y = mx + p)." },
        { title: "Exemple", content: "Pour f(x) = (2x² + x)/(x - 1), il y a une asymptote verticale x = 1 et une asymptote oblique y = 2x + 3" },
        { title: "Remarque", content: "Les asymptotes permettent de mieux comprendre le comportement de la fonction aux bornes de son domaine." }
      ],
      gameQuestions: [
        { question: "Comment déterminer si une fonction admet une asymptote horizontale en +∞ ?", answer: "En calculant la limite de la fonction quand x tend vers +∞" }
      ],
      exercises: [
        { question: "Déterminez les asymptotes de la fonction f(x) = (x² + x - 2)/(x - 1)", answer: "Asymptote verticale: x = 1, asymptote oblique: y = x + 2" }
      ],
      gameType: "quiz"
    },
    {
      id: "representation-graphique",
      title: "Représentation graphique",
      sections: [
        { title: "Définition", content: "La représentation graphique d'une fonction est la courbe C_f d'équation y = f(x). Elle permet de visualiser ses propriétés (variations, extrema, symétries, asymptotes)." },
        { title: "Exemple", content: "Pour tracer la courbe de f(x) = x³ - 3x, on étudie ses variations, ses points d'inflexion et sa symétrie par rapport à l'origine." },
        { title: "Remarque", content: "La représentation graphique est un outil précieux pour comprendre le comportement global d'une fonction." }
      ],
      gameQuestions: [
        { question: "Comment reconnaître graphiquement que f est une fonction paire ?", answer: "La courbe est symétrique par rapport à l'axe des ordonnées" }
      ],
      exercises: [
        { question: "Tracez la courbe représentative de la fonction f(x) = x² - 4x + 3 en précisant ses principales caractéristiques.", answer: "Parabole avec un minimum en x = 2, f(2) = -1, coupe l'axe des x en x = 1 et x = 3, coupe l'axe des y en y = 3" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 