// Leçon : Etude des fonctions (Sciences Expérimentales)
export default {
  id: "etude_des_fonctions",
  title: "Etude des fonctions",
  parts: [
    {
      id: "monotonie",
      title: "Monotonie d'une fonction",
      definition: "Une fonction $f$ est croissante (resp. décroissante) sur un intervalle $I$ si $f'(x) > 0$ (resp. $f'(x) < 0$) pour tout $x \\in I$ ",
      example: "La fonction $f(x) = x^2$ est décroissante sur $]-\\infty,0]$ et croissante sur $[0,+\\infty[$ car $f'(x) = 2x$",
      gameQuestions: [
        { question: "Sur quel intervalle la fonction $f(x) = -x^2$ est-elle croissante ?", answer: "$]-\\infty,0]$" }
      ],
      exercises: [
        { question: "Étudiez la monotonie de $f(x) = x^3 - 3x$", answer: "Décroissante sur $]-1,1[$, croissante ailleurs" }
      ],
      gameType: "quiz"
    },
    {
      id: "extremums",
      title: "Extremums d'une fonction",
      definition: "Les extremums d'une fonction $f$ sont les points où $f'(x) = 0$ et où la dérivée change de signe",
      example: "La fonction $f(x) = x^2$ admet un minimum en $x = 0$ car $f'(0) = 0$ et $f'(x)$ change de signe en $0$",
      gameQuestions: [
        { question: "Quel est l'extremum de la fonction $f(x) = x^2 - 4x + 3$ ?", answer: "Minimum en $x = 2$" }
      ],
      exercises: [
        { question: "Trouvez les extremums de la fonction $f(x) = x^3 - 3x^2$", answer: "Maximum en $x = 0$, minimum en $x = 2$" }
      ],
      gameType: "quiz"
    }
  ]
}; 