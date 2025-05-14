export default {
  id: "barycentre",
  title: "Le barycentre dans le plan",
  parts: [
    {
      id: "definition-barycentre",
      title: "Définition du barycentre",
      definition: "Le barycentre de points pondérés (Ai, ai) est le point G tel que la somme vectorielle Σ ai.GAi = 0.",
      example: "Le barycentre des points A(1,0) et B(3,4) affectés des coefficients 2 et 3 respectivement est G(2.2, 2.4).",
      gameQuestions: [
        { question: "Le centre de gravité d'un triangle est le barycentre de ses sommets affectés de quels coefficients ?", answer: "Coefficients égaux (1/3, 1/3, 1/3)" }
      ],
      exercises: [
        { question: "Calculez les coordonnées du barycentre des points A(1,2), B(3,1) et C(2,5) affectés respectivement des coefficients 2, 3 et 5.", answer: "G(2, 3)" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-barycentre",
      title: "Propriétés du barycentre",
      definition: "Le barycentre vérifie des propriétés d'associativité et de linéarité qui permettent de simplifier les calculs.",
      example: "Le barycentre de (A, a) et (B, b) est sur la droite (AB) et divise le segment AB dans le rapport b/a.",
      gameQuestions: [
        { question: "Où se trouve le barycentre de deux points affectés de coefficients de signes opposés ?", answer: "À l'extérieur du segment" }
      ],
      exercises: [
        { question: "Montrez que le point G de coordonnées (2, 3) est le barycentre des points A(1, 1), B(2, 4) et C(3, 4) affectés de certains coefficients.", answer: "G est le barycentre de A, B, C affectés respectivement des coefficients 1, 1, 1" }
      ],
      gameType: "quiz"
    }
  ]
}; 