export default {
  id: "generalites-fonctions",
  title: "Généralités sur les fonctions",
  parts: [
    {
      id: "definition-fonction",
      title: "Définition d'une fonction",
      sections: [
        { title: "Définition", content: "Une fonction est une relation qui, à chaque élément d'un ensemble de départ, associe un unique élément d'un ensemble d'arrivée. En économie, les fonctions modélisent des relations entre grandeurs économiques, comme le coût, le revenu, la demande, l'offre, etc." },
        { title: "Exemple", content: "La fonction coût C(q) = 5q + 100 associe à chaque quantité produite q le coût total correspondant. La fonction demande D(p) = 100 - 2p associe à chaque prix p la quantité demandée." },
        { title: "Remarque", content: "Les fonctions sont fondamentales pour la modélisation et l'analyse des phénomènes économiques." }
      ],
      gameQuestions: [
        { question: "Quelle est l'image de 4 par la fonction f(x) = 2x + 1 ?", answer: "9" },
        { question: "Pour la fonction D(p) = 100 - 2p, quelle est la quantité demandée pour p = 20 ?", answer: "60" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = 3q + 200 et une fonction de revenu R(q) = 10q. (a) Exprimez la fonction de profit П(q). (b) Calculez le profit pour q = 50.", answer: "(a) П(q) = R(q) - C(q) = 10q - (3q + 200) = 7q - 200.\n\n(b) Pour q = 50 : П(50) = 7×50 - 200 = 350 - 200 = 150." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-fonctions",
      title: "Opérations sur les fonctions",
      sections: [
        { title: "Définition", content: "On peut additionner, soustraire, multiplier ou composer des fonctions. En économie, ces opérations permettent de modéliser des situations complexes, comme la combinaison de plusieurs coûts ou la composition de fonctions de production." },
        { title: "Exemple", content: "Si f(x) = 2x et g(x) = x + 3, alors (f+g)(x) = 2x + x + 3 = 3x + 3. La composition (f∘g)(x) = f(g(x)) = 2(x+3) = 2x + 6." },
        { title: "Remarque", content: "Les opérations sur les fonctions sont utiles pour l'analyse des coûts totaux, des recettes totales et des fonctions de production composées." }
      ],
      gameQuestions: [
        { question: "Si f(x) = x² et g(x) = 3x, calculez (f+g)(2)", answer: "f(2) + g(2) = 4 + 6 = 10" },
        { question: "Pour f(x) = 2x et g(x) = x + 1, calculez (f∘g)(3)", answer: "f(g(3)) = f(4) = 8" }
      ],
      exercises: [
        { question: "Une entreprise a deux fonctions de coût : C₁(q) = 2q + 100 et C₂(q) = 3q + 50. (a) Exprimez la fonction de coût total. (b) Calculez le coût total pour q = 20.", answer: "(a) C(q) = C₁(q) + C₂(q) = 2q + 100 + 3q + 50 = 5q + 150.\n\n(b) Pour q = 20 : C(20) = 5×20 + 150 = 100 + 150 = 250." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les fonctions sont utilisées en économie pour modéliser les coûts, les recettes, la demande, l'offre, la production, etc. Elles permettent d'analyser l'évolution des grandeurs économiques et d'optimiser les décisions." },
        { title: "Exemple", content: "La fonction de coût marginal C'(q) permet de déterminer le coût de production d'une unité supplémentaire. La fonction de profit П(q) permet de déterminer la quantité qui maximise le profit." },
        { title: "Remarque", content: "L'utilisation des fonctions en économie est essentielle pour la prise de décision et la planification stratégique." }
      ],
      gameQuestions: [
        { question: "Si C(q) = 2q + 100, quel est le coût marginal ?", answer: "2" },
        { question: "Pour la fonction de profit П(q) = 5q - 200, quelle quantité maximise le profit ?", answer: "Il n'y a pas de maximum, la fonction est croissante pour tout q." }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût C(q) = 2q + 100 et une fonction de revenu R(q) = 8q. (a) Exprimez la fonction de profit П(q). (b) Calculez le profit pour q = 30.", answer: "(a) П(q) = R(q) - C(q) = 8q - (2q + 100) = 6q - 100.\n\n(b) Pour q = 30 : П(30) = 6×30 - 100 = 180 - 100 = 80." }
      ],
      gameType: "quiz"
    }
  ]
}; 