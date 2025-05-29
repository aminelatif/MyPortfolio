export default {
  id: "fonctions-numeriques",
  title: "Fonctions numériques",
  parts: [
    {
      id: "definition-fonction-numerique",
      title: "Définition d'une fonction numérique",
      sections: [
        { title: "Définition", content: "Une fonction numérique est une fonction qui associe à chaque nombre réel d'un ensemble de départ un unique nombre réel d'un ensemble d'arrivée. En économie, les fonctions numériques modélisent des relations quantitatives entre variables économiques." },
        { title: "Exemple", content: "La fonction coût C(q) = 2q + 100 associe à chaque quantité produite q le coût total correspondant. La fonction de demande D(p) = 100 - 2p associe à chaque prix p la quantité demandée." },
        { title: "Remarque", content: "Les fonctions numériques sont fondamentales pour la modélisation et l'analyse des phénomènes économiques." }
      ],
      gameQuestions: [
        { question: "Quelle est l'image de 5 par la fonction f(x) = 3x + 2 ?", answer: "17" },
        { question: "Pour la fonction D(p) = 100 - 2p, quelle est la quantité demandée pour p = 30 ?", answer: "40" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = 4q + 150 et une fonction de revenu R(q) = 12q. (a) Exprimez la fonction de profit П(q). (b) Calculez le profit pour q = 20.", answer: "(a) П(q) = R(q) - C(q) = 12q - (4q + 150) = 8q - 150.\n\n(b) Pour q = 20 : П(20) = 8×20 - 150 = 160 - 150 = 10." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-fonctions-numeriques",
      title: "Opérations sur les fonctions numériques",
      sections: [
        { title: "Définition", content: "On peut additionner, soustraire, multiplier ou composer des fonctions numériques. En économie, ces opérations permettent de modéliser des situations complexes, comme la combinaison de plusieurs coûts ou la composition de fonctions de production." },
        { title: "Exemple", content: "Si f(x) = 2x et g(x) = x + 4, alors (f+g)(x) = 2x + x + 4 = 3x + 4. La composition (f∘g)(x) = f(g(x)) = 2(x+4) = 2x + 8." },
        { title: "Remarque", content: "Les opérations sur les fonctions numériques sont utiles pour l'analyse des coûts totaux, des recettes totales et des fonctions de production composées." }
      ],
      gameQuestions: [
        { question: "Si f(x) = x² et g(x) = 2x, calculez (f+g)(3)", answer: "f(3) + g(3) = 9 + 6 = 15" },
        { question: "Pour f(x) = 2x et g(x) = x + 2, calculez (f∘g)(4)", answer: "f(g(4)) = f(6) = 12" }
      ],
      exercises: [
        { question: "Une entreprise a deux fonctions de coût : C₁(q) = 3q + 120 et C₂(q) = 2q + 80. (a) Exprimez la fonction de coût total. (b) Calculez le coût total pour q = 15.", answer: "(a) C(q) = C₁(q) + C₂(q) = 3q + 120 + 2q + 80 = 5q + 200.\n\n(b) Pour q = 15 : C(15) = 5×15 + 200 = 75 + 200 = 275." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les fonctions numériques sont utilisées en économie pour modéliser les coûts, les recettes, la demande, l'offre, la production, etc. Elles permettent d'analyser l'évolution des grandeurs économiques et d'optimiser les décisions." },
        { title: "Exemple", content: "La fonction de coût marginal C'(q) permet de déterminer le coût de production d'une unité supplémentaire. La fonction de profit П(q) permet de déterminer la quantité qui maximise le profit." },
        { title: "Remarque", content: "L'utilisation des fonctions numériques en économie est essentielle pour la prise de décision et la planification stratégique." }
      ],
      gameQuestions: [
        { question: "Si C(q) = 3q + 120, quel est le coût marginal ?", answer: "3" },
        { question: "Pour la fonction de profit П(q) = 6q - 180, quelle quantité maximise le profit ?", answer: "Il n'y a pas de maximum, la fonction est croissante pour tout q." }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = 3q + 120 et une fonction de revenu R(q) = 10q. (a) Exprimez la fonction de profit П(q). (b) Calculez le profit pour q = 25.", answer: "(a) П(q) = R(q) - C(q) = 10q - (3q + 120) = 7q - 120.\n\n(b) Pour q = 25 : П(25) = 7×25 - 120 = 175 - 120 = 55." }
      ],
      gameType: "quiz"
    }
  ]
}; 