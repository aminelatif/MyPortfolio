export default {
  id: "trigonometrie",
  title: "Trigonométrie",
  parts: [
    {
      id: "angles",
      title: "Les angles et leur mesure",
      definition: "Un angle est une figure formée par deux demi-droites de même origine. Il peut être mesuré en degrés ou en radians.",
      example: "Un angle de 180° correspond à π radians. Un tour complet correspond à 360° ou 2π radians.",
      gameQuestions: [
        { question: "Convertissez 90° en radians.", answer: "π/2" },
        { question: "Convertissez π/3 radians en degrés.", answer: "60°" }
      ],
      exercises: [
        { question: "Convertissez 225° en radians.", answer: "5π/4" }
      ],
      gameType: "quiz"
    },
    {
      id: "fonctions-trigonometriques",
      title: "Fonctions trigonométriques",
      definition: "Les principales fonctions trigonométriques sont le sinus, le cosinus et la tangente d'un angle.",
      example: "Pour un angle de 30° (ou π/6 radians), sin(30°) = 1/2, cos(30°) = √3/2, et tan(30°) = 1/√3.",
      gameQuestions: [
        { question: "Quelle est la valeur de sin(0) ?", answer: "0" },
        { question: "Quelle est la valeur de cos(π/2) ?", answer: "0" }
      ],
      exercises: [
        { question: "Calculez sin(π/4) et cos(π/4).", answer: "sin(π/4) = cos(π/4) = √2/2" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "formules-trigonometriques",
      title: "Formules trigonométriques",
      definition: "Il existe de nombreuses formules reliant les valeurs des fonctions trigonométriques pour différents angles.",
      example: "sin²(x) + cos²(x) = 1, pour tout angle x.",
      gameQuestions: [
        { question: "Quelle est la formule de cos(a + b) ?", answer: "cos(a)cos(b) - sin(a)sin(b)" }
      ],
      exercises: [
        { question: "Utilisez les formules pour calculer sin(π/3 + π/4).", answer: "(√6 + √2)/4" }
      ],
      gameType: "quiz"
    }
  ]
}; 