// Leçon : Etude des fonctions (Économie)
export default {
  id: "etude_des_fonctions",
  title: "Etude des fonctions",
  parts: [
    {
      id: "monotonie",
      title: "Monotonie d'une fonction",
      sections: [
        { title: "Définition", content: "Une fonction est croissante (resp. décroissante) sur un intervalle si sa dérivée est positive (resp. négative) sur cet intervalle." },
        { title: "Exemple", content: "La fonction f(x) = x² est décroissante sur ]-∞,0] et croissante sur [0,+∞[." },
        { title: "Remarque", content: "L'étude de la monotonie est cruciale pour comprendre l'évolution des grandeurs économiques." }
      ],
      gameQuestions: [
        { question: "Sur quel intervalle la fonction f(x) = -x² est-elle croissante ?", answer: "]-∞,0]" }
      ],
      exercises: [
        { question: "Étudiez la monotonie de f(x) = x³ - 3x.", answer: "Décroissante sur ]-1,1[, croissante ailleurs" }
      ],
      gameType: "quiz"
    },
    {
      id: "extremums",
      title: "Extremums d'une fonction",
      sections: [
        { title: "Définition", content: "Les extremums d'une fonction sont les points où la dérivée s'annule en changeant de signe." },
        { title: "Exemple", content: "La fonction f(x) = x² admet un minimum en x = 0." },
        { title: "Remarque", content: "Les extremums sont essentiels pour l'optimisation des fonctions économiques." }
      ],
      gameQuestions: [
        { question: "Quel est l'extremum de la fonction f(x) = x² - 4x + 3 ?", answer: "Minimum en x = 2" }
      ],
      exercises: [
        { question: "Trouvez les extremums de la fonction f(x) = x³ - 3x².", answer: "Maximum en x = 0, minimum en x = 2" }
      ],
      gameType: "quiz"
    }
  ]
}; 