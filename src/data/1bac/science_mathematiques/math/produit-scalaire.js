export default {
  id: "produit-scalaire",
  title: "Étude analytique du produit scalaire",
  parts: [
    {
      id: "definition-produit-scalaire",
      title: "Définition et propriétés",
      definition: "Le produit scalaire de deux vecteurs u⃗(x₁,y₁) et v⃗(x₂,y₂) est défini par u⃗·v⃗ = x₁x₂ + y₁y₂. Il peut également être calculé par u⃗·v⃗ = |u⃗|·|v⃗|·cos(θ) où θ est l'angle entre les deux vecteurs.",
      example: "Le produit scalaire des vecteurs u⃗(3,4) et v⃗(1,2) est u⃗·v⃗ = 3×1 + 4×2 = 3 + 8 = 11.",
      gameQuestions: [
        { question: "Que vaut le produit scalaire de deux vecteurs orthogonaux ?", answer: "0" }
      ],
      exercises: [
        { question: "Calculez le produit scalaire des vecteurs u⃗(2,-1) et v⃗(3,4).", answer: "6 - 4 = 2" }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-produit-scalaire",
      title: "Applications du produit scalaire",
      definition: "Le produit scalaire permet de calculer la norme d'un vecteur, l'angle entre deux vecteurs, la distance entre deux points et de déterminer l'orthogonalité.",
      example: "Pour déterminer si deux vecteurs u⃗ et v⃗ sont orthogonaux, on vérifie si u⃗·v⃗ = 0.",
      gameQuestions: [
        { question: "Quelle est la formule de la norme d'un vecteur u⃗ en fonction du produit scalaire ?", answer: "|u⃗| = √(u⃗·u⃗)" }
      ],
      exercises: [
        { question: "Déterminez l'angle entre les vecteurs u⃗(1,1) et v⃗(0,1).", answer: "45°" }
      ],
      gameType: "quiz"
    }
  ]
}; 