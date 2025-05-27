// Leçon : Équations différentielles (Sciences Expérimentales)
export default {
  id: "equations_differentielles",
  title: "Équations différentielles",
  parts: [
    {
      id: "definition-equation-differentielle",
      title: "Définition d'une équation différentielle",
      definition: "Une équation différentielle est une équation qui relie une fonction inconnue à ses dérivées.",
      example: "y' + y = 0 est une équation différentielle du premier ordre.",
      gameQuestions: [
        { question: "Quelle est la solution générale de y' = 2y ?", answer: "y = Ce^{2x}" }
      ],
      exercises: [
        { question: "Résolvez y' + y = 0.", answer: "y = Ce^{-x}" }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-equations-differentielles",
      title: "Applications des équations différentielles",
      definition: "Les équations différentielles modélisent de nombreux phénomènes physiques, économiques et biologiques.",
      example: "La croissance d'une population peut être modélisée par une équation différentielle.",
      gameQuestions: [
        { question: "Donnez un exemple d'application d'une équation différentielle.", answer: "Modélisation de la croissance d'une population" }
      ],
      exercises: [
        { question: "Citez une situation réelle modélisée par une équation différentielle.", answer: "Refroidissement d'un objet" }
      ],
      gameType: "quiz"
    }
  ]
}; 