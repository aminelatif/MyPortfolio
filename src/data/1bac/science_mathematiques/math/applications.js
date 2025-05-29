export default {
  id: "applications",
  title: "Applications",
  parts: [
    {
      id: "definition-application",
      title: "Définition et propriétés",
      sections: [
        { title: "Définition", content: "Une application f d'un ensemble E vers un ensemble F est une relation qui à tout élément x de E associe un unique élément y de F noté f(x)." },
        { title: "Exemple", content: "La fonction f : ℝ → ℝ définie par f(x) = x² est une application." },
        { title: "Remarque", content: "Les applications sont à la base de la notion de fonction en mathématiques." }
      ],
      gameQuestions: [
        { question: "Une application f : E → F est injective si et seulement si...", answer: "Pour tout a et b dans E, si f(a) = f(b) alors a = b" }
      ],
      exercises: [
        { question: "Déterminez si la fonction f(x) = x³ est injective, surjective ou bijective sur ℝ.", answer: "Bijective (à la fois injective et surjective)" }
      ],
      gameType: "quiz"
    }
  ]
}; 