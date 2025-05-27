// Leçon : Fonctions logarithmiques (Économie)
export default {
  id: "fonctions_logarithmiques",
  title: "Fonctions logarithmiques",
  parts: [
    {
      id: "definition-logarithme",
      title: "Définition de la fonction logarithme",
      definition: "La fonction logarithme népérien est la réciproque de la fonction exponentielle.",
      example: "ln(e) = 1, ln(1) = 0.",
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
      definition: "Le logarithme transforme les produits en sommes et les quotients en différences.",
      example: "ln(ab) = ln(a) + ln(b), ln(a/b) = ln(a) - ln(b).",
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