// Leçon : Suites numériques (Sciences Expérimentales)
export default {
  id: "suites_numeriques",
  title: "Suites numériques",
  parts: [
    {
      id: "definition-suite",
      title: "Définition d'une suite",
      sections: [
        { title: "Définition", content: "Une suite numérique est une fonction définie sur $\\mathbb{N}$ à valeurs dans $\\mathbb{R}$. On note $(u_n)$ la suite de terme général $u_n$" },
        { title: "Exemple", content: "La suite $(u_n)$ définie par $u_n = n^2$ a pour premiers termes : $u_0 = 0$, $u_1 = 1$, $u_2 = 4$, $u_3 = 9$" },
        { title: "Remarque", content: "Les suites numériques permettent de modéliser des évolutions discrètes en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "Quel est le terme $u_4$ de la suite $(u_n)$ définie par $u_n = 2n + 1$ ?", answer: "$9$" }
      ],
      exercises: [
        { question: "Calculez les 5 premiers termes de la suite $(v_n)$ définie par $v_n = n^2 - 1$", answer: "$v_0 = -1$, $v_1 = 0$, $v_2 = 3$, $v_3 = 8$, $v_4 = 15$" }
      ],
      gameType: "quiz"
    },
    {
      id: "monotonie-suite",
      title: "Monotonie d'une suite",
      sections: [
        { title: "Définition", content: "Une suite $(u_n)$ est croissante si $u_{n+1} \\geq u_n$ pour tout $n \\in \\mathbb{N}$" },
        { title: "Exemple", content: "La suite $(u_n)$ définie par $u_n = n^2$ est croissante car $u_{n+1} - u_n = (n+1)^2 - n^2 = 2n + 1 > 0$" },
        { title: "Remarque", content: "L'étude de la monotonie des suites est essentielle pour comprendre leur comportement à long terme en sciences expérimentales." }
      ],
      gameQuestions: [
        { question: "La suite $(u_n)$ définie par $u_n = -n$ est-elle croissante ?", answer: "Non, elle est décroissante" }
      ],
      exercises: [
        { question: "Étudiez la monotonie de la suite $(u_n)$ définie par $u_n = n^2 - 3n$", answer: "Croissante à partir de $n = 2$" }
      ],
      gameType: "quiz"
    }
  ]
}; 