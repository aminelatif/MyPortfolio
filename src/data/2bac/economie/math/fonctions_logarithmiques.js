// Leçon : Fonctions logarithmiques (Économie)
export default {
  id: "fonctions_logarithmiques",
  title: "Fonctions logarithmiques",
  parts: [
    {
      id: "definition-logarithme",
      title: "Définition de la fonction logarithme",
      sections: [
        { title: "Définition", content: "La fonction logarithme népérien est la réciproque de la fonction exponentielle." },
        { title: "Exemple", content: "ln(e) = 1, ln(1) = 0." },
        { title: "Remarque", content: "La fonction logarithme est utilisée pour linéariser des relations exponentielles en économie." }
      ],
      gameQuestions: [
        { question: "Quelle est la valeur de ln(e²) ?", answer: "2" }
      ],
      exercises: [
        { question: "Calculez ln(e³).", answer: "3" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-logarithme",
      title: "Propriétés de la fonction logarithme",
      sections: [
        { title: "Définition", content: "Le logarithme transforme les produits en sommes et les quotients en différences." },
        { title: "Exemple", content: "ln(ab) = ln(a) + ln(b), ln(a/b) = ln(a) - ln(b)." },
        { title: "Remarque", content: "Les propriétés du logarithme sont essentielles pour simplifier les calculs en économie." }
      ],
      gameQuestions: [
        { question: "Quelle est la valeur de ln(2) + ln(3) ?", answer: "ln(6)" }
      ],
      exercises: [
        { question: "Calculez ln(8) - ln(2).", answer: "ln(4)" }
      ],
      gameType: "quiz"
    }
  ]
}; 