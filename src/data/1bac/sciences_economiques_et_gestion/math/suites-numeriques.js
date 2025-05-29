export default {
  id: "suites-numeriques",
  title: "Suites numériques",
  parts: [
    {
      id: "definition-types",
      title: "Définition et types de suites",
      sections: [
        { title: "Définition", content: "Une suite numérique est une liste ordonnée de nombres, notée (u_n), où n est un entier naturel. Les suites peuvent être arithmétiques (u_{n+1} = u_n + r) ou géométriques (u_{n+1} = q u_n). En économie, les suites modélisent l'évolution de grandeurs dans le temps, comme les stocks, les investissements ou les populations." },
        { title: "Exemple", content: "La suite arithmétique de premier terme 5 et de raison 3 : u_0 = 5, u_1 = 8, u_2 = 11, ... La suite géométrique de premier terme 2 et de raison 1.5 : v_0 = 2, v_1 = 3, v_2 = 4.5, ... En économie, une suite géométrique peut modéliser la croissance d'un capital placé à intérêt composé." },
        { title: "Remarque", content: "Les suites sont fondamentales pour l'étude des phénomènes économiques évolutifs et la prévision à long terme." }
      ],
      gameQuestions: [
        { question: "Quelle est la raison de la suite arithmétique 4, 7, 10, 13, ... ?", answer: "3" },
        { question: "Quel est le terme général de la suite géométrique de premier terme 2 et de raison 3 ?", answer: "u_n = 2×3^n" }
      ],
      exercises: [
        { question: "Une entreprise investit chaque année 1000€ dans un fonds rapportant 5% d'intérêt composé. (a) Modélisez le capital accumulé après n années par une suite. (b) Calculez le capital après 10 ans.", answer: "(a) Le capital accumulé est une suite géométrique : C_n = 1000×(1.05^n - 1)/0.05.\n\n(b) Après 10 ans : C_{10} = 1000×(1.05^{10} - 1)/0.05 ≈ 1000×(1.629 - 1)/0.05 ≈ 1000×0.629/0.05 ≈ 12 580€." }
      ],
      gameType: "quiz"
    },
    {
      id: "limite-suites",
      title: "Limite et convergence des suites",
      sections: [
        { title: "Définition", content: "La limite d'une suite (u_n) est la valeur vers laquelle tend u_n lorsque n devient très grand. Si cette valeur existe, la suite est dite convergente. En économie, la convergence d'une suite peut modéliser la stabilisation d'un prix, d'un stock ou d'une population à long terme." },
        { title: "Exemple", content: "La suite u_n = 1/n converge vers 0. La suite v_n = 2^n diverge vers l'infini. En économie, une suite convergente peut représenter l'équilibre d'un marché à long terme." },
        { title: "Remarque", content: "L'étude des limites de suites permet d'analyser la stabilité des systèmes économiques et la viabilité des politiques à long terme." }
      ],
      gameQuestions: [
        { question: "La suite u_n = 1/n converge-t-elle ? Si oui, vers quelle valeur ?", answer: "Oui, vers 0" },
        { question: "La suite v_n = 2^n converge-t-elle ?", answer: "Non, elle diverge vers l'infini" }
      ],
      exercises: [
        { question: "Un stock de marchandises est renouvelé chaque année selon la suite S_{n+1} = 0.8 S_n + 500, avec S_0 = 1000. (a) Modélisez l'évolution du stock. (b) Déterminez la limite du stock à long terme.", answer: "(a) La suite est récurrente : S_{n+1} = 0.8 S_n + 500.\n\n(b) À l'équilibre, S_{n+1} = S_n = S, donc S = 0.8 S + 500 ⇒ 0.2 S = 500 ⇒ S = 2500." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "applications-economie",
      title: "Applications en économie",
      sections: [
        { title: "Définition", content: "Les suites sont utilisées en économie pour modéliser l'évolution des investissements, des dettes, des populations, des prix, etc. Elles permettent d'étudier la croissance, la décroissance, la stabilisation ou la fluctuation de grandeurs économiques dans le temps." },
        { title: "Exemple", content: "L'évolution d'une dette remboursée par annuités constantes est modélisée par une suite géométrique décroissante. La croissance d'une population avec un taux de natalité constant est modélisée par une suite géométrique croissante." },
        { title: "Remarque", content: "L'utilisation des suites en économie permet de prévoir l'évolution future des grandeurs et d'optimiser les décisions à long terme." }
      ],
      gameQuestions: [
        { question: "Comment modéliser l'évolution d'un capital placé à intérêt composé ?", answer: "Par une suite géométrique" },
        { question: "Une population double tous les 20 ans. Quelle est la raison de la suite qui modélise cette croissance ?", answer: "2" }
      ],
      exercises: [
        { question: "Une entreprise rembourse un emprunt de 10 000€ par annuités constantes de 1200€. (a) Modélisez le capital restant dû après n années par une suite. (b) Calculez le capital restant dû après 5 ans.", answer: "(a) Le capital restant dû est une suite arithmétique décroissante : C_{n+1} = C_n - 1200, avec C_0 = 10 000.\n\n(b) Après 5 ans : C_5 = 10 000 - 5×1200 = 4 000€." }
      ],
      gameType: "quiz"
    }
  ]
}; 