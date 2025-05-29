export default {
  id: "limites-fonctions",
  title: "Limites de fonctions",
  parts: [
    {
      id: "notion-limite",
      title: "Notion de limite",
      sections: [
        { title: "Définition", content: "La limite d'une fonction f en un point a est la valeur vers laquelle tend f(x) lorsque x se rapproche de a. On note lim(x→a) f(x) = L. Cette notion est fondamentale en économie pour étudier le comportement des fonctions de coût, de revenu et de profit lorsque les quantités produites ou vendues varient." },
        { title: "Exemple", content: "Pour la fonction f(x) = x², la limite en x = 2 est 4, car f(x) se rapproche de 4 lorsque x se rapproche de 2. Pour une fonction de coût C(q) = 1000 + 5q, la limite en q = 0 est 1000, représentant le coût fixe." },
        { title: "Remarque", content: "La notion de limite est essentielle pour comprendre le comportement des fonctions économiques aux frontières de leur domaine de définition." }
      ],
      gameQuestions: [
        { question: "Quelle est la limite de f(x) = 3x + 2 en x = 1?", answer: "5" },
        { question: "Pour une fonction de coût C(q) = 500 + 10q, quelle est la limite en q = 0?", answer: "500" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût total C(q) = 1000 + 5q + 0.1q², où q est la quantité produite. (a) Calculez la limite de C(q) lorsque q tend vers 0. (b) Interprétez économiquement cette limite.", answer: "(a) lim(q→0) C(q) = lim(q→0) (1000 + 5q + 0.1q²) = 1000\n\n(b) Cette limite représente le coût fixe de l'entreprise, c'est-à-dire le coût qu'elle doit supporter même si elle ne produit rien (q = 0)." }
      ],
      gameType: "quiz"
    },
    {
      id: "limites-infinies",
      title: "Limites infinies et asymptotes",
      sections: [
        { title: "Définition", content: "Une fonction peut tendre vers l'infini (+∞ ou -∞) lorsque x tend vers une valeur finie ou vers l'infini. Les asymptotes sont des droites dont la courbe se rapproche sans jamais les toucher. En économie, ces concepts sont utiles pour étudier le comportement des fonctions de coût moyen, de revenu marginal et d'élasticité." },
        { title: "Exemple", content: "La fonction f(x) = 1/x a une asymptote verticale en x = 0 et une asymptote horizontale en y = 0. Pour une fonction de coût moyen CM(q) = 1000/q + 5, l'asymptote horizontale en y = 5 représente le coût variable unitaire minimum." },
        { title: "Remarque", content: "Les asymptotes sont importantes en économie pour identifier les comportements limites des fonctions de coût et de revenu." }
      ],
      gameQuestions: [
        { question: "Quelle est l'asymptote horizontale de f(x) = 2 + 1/x?", answer: "y = 2" },
        { question: "Pour une fonction de coût moyen CM(q) = 1000/q + 10, quelle est l'asymptote horizontale?", answer: "y = 10" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût moyen CM(q) = 1000/q + 5 + 0.1q. (a) Déterminez l'asymptote verticale. (b) Calculez la limite de CM(q) lorsque q tend vers l'infini. (c) Interprétez économiquement ces résultats.", answer: "(a) L'asymptote verticale est en q = 0, car le terme 1000/q tend vers l'infini lorsque q tend vers 0.\n\n(b) lim(q→+∞) CM(q) = lim(q→+∞) (1000/q + 5 + 0.1q) = +∞, car le terme 0.1q domine lorsque q tend vers l'infini.\n\n(c) L'asymptote verticale en q = 0 indique que le coût moyen devient infini lorsque la production tend vers 0, ce qui est logique car les coûts fixes sont répartis sur une production nulle. La limite infinie lorsque q tend vers l'infini suggère que l'entreprise fait face à des rendements décroissants à long terme, où le coût moyen augmente avec la production." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "continuite",
      title: "Continuité des fonctions",
      sections: [
        { title: "Définition", content: "Une fonction f est continue en un point a si lim(x→a) f(x) = f(a). Une fonction est continue sur un intervalle si elle est continue en tout point de cet intervalle. En économie, la continuité est importante pour modéliser des phénomènes qui évoluent de manière régulière, comme les fonctions de coût, de revenu et de profit." },
        { title: "Exemple", content: "La fonction f(x) = x² est continue en tout point car lim(x→a) x² = a² = f(a). Une fonction de coût C(q) = 1000 + 5q est continue car elle représente une évolution régulière des coûts avec la production." },
        { title: "Remarque", content: "La continuité est cruciale pour l'analyse des fonctions économiques et la détermination des points d'équilibre." }
      ],
      gameQuestions: [
        { question: "La fonction f(x) = |x| est-elle continue en x = 0?", answer: "Oui" },
        { question: "Pour une fonction de revenu R(q) = 10q, est-elle continue en q = 5?", answer: "Oui" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût total C(q) définie par C(q) = 1000 + 5q si q ≤ 100 et C(q) = 1000 + 5q + 0.1(q-100)² si q > 100. (a) Montrez que C est continue en q = 100. (b) Interprétez économiquement cette fonction de coût.", answer: "(a) Pour montrer la continuité en q = 100, vérifions que lim(q→100) C(q) = C(100).\n\nPour q < 100, C(q) = 1000 + 5q, donc lim(q→100-) C(q) = 1000 + 5×100 = 1500.\n\nPour q > 100, C(q) = 1000 + 5q + 0.1(q-100)², donc lim(q→100+) C(q) = 1000 + 5×100 + 0.1(0)² = 1500.\n\nComme les limites à gauche et à droite sont égales et valent C(100) = 1500, la fonction est continue en q = 100.\n\n(b) Cette fonction de coût représente une situation où l'entreprise a un coût fixe de 1000 et un coût variable linéaire de 5q jusqu'à une production de 100 unités. Au-delà de 100 unités, des coûts supplémentaires apparaissent (peut-être des heures supplémentaires, des coûts de stockage, etc.), modélisés par le terme 0.1(q-100)². La continuité en q = 100 assure une transition fluide entre ces deux régimes de coût." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les limites et la continuité sont des outils essentiels en économie pour analyser le comportement des fonctions de coût, de revenu et de profit. Elles permettent d'étudier les rendements d'échelle, les coûts marginaux, les revenus marginaux et les points d'équilibre. Ces concepts sont également utilisés en microéconomie pour l'analyse des courbes d'offre et de demande." },
        { title: "Exemple", content: "Pour une fonction de coût total C(q) = 1000 + 5q + 0.1q², le coût marginal est la dérivée C'(q) = 5 + 0.2q. La limite de C'(q) lorsque q tend vers l'infini est +∞, indiquant des rendements décroissants. Pour une fonction de revenu R(q) = 10q - 0.05q², le revenu marginal R'(q) = 10 - 0.1q tend vers -∞ lorsque q tend vers l'infini, montrant une diminution du revenu marginal." },
        { title: "Remarque", content: "L'analyse des limites et de la continuité est fondamentale pour la prise de décision en économie et la planification stratégique." }
      ],
      gameQuestions: [
        { question: "Pour une fonction de coût C(q) = 1000 + 5q, quelle est la limite du coût moyen CM(q) = C(q)/q lorsque q tend vers l'infini?", answer: "5" },
        { question: "Si le revenu marginal R'(q) = 10 - 0.1q, quelle est sa limite lorsque q tend vers l'infini?", answer: "-∞" }
      ],
      exercises: [
        { question: "Une entreprise a une fonction de coût total C(q) = 1000 + 5q + 0.1q² et une fonction de revenu R(q) = 10q - 0.05q². (a) Calculez les fonctions de coût moyen CM(q) et de coût marginal Cm(q). (b) Déterminez les limites de CM(q) et Cm(q) lorsque q tend vers l'infini. (c) Interprétez économiquement ces résultats.", answer: "(a) CM(q) = C(q)/q = 1000/q + 5 + 0.1q\nCm(q) = C'(q) = 5 + 0.2q\n\n(b) lim(q→+∞) CM(q) = lim(q→+∞) (1000/q + 5 + 0.1q) = +∞\nlim(q→+∞) Cm(q) = lim(q→+∞) (5 + 0.2q) = +∞\n\n(c) Ces limites indiquent que:\n- Le coût moyen augmente indéfiniment avec la production, suggérant des rendements décroissants à long terme.\n- Le coût marginal augmente également indéfiniment, confirmant les rendements décroissants.\nCes résultats suggèrent que l'entreprise fait face à des contraintes de production qui rendent chaque unité supplémentaire plus coûteuse à produire, ce qui est typique des situations de rendements décroissants." }
      ],
      gameType: "quiz"
    }
  ]
}; 