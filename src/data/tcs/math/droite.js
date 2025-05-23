export default {
  id: "droite",
  title: "La droite dans le plan",
  parts: [
    {
      id: "equation-droite",
      title: "Équation d'une droite",
      definition: "Une droite dans le plan peut être représentée par une équation cartésienne de la forme ax + by + c = 0, où a et b ne sont pas tous les deux nuls.",
      example: "La droite d'équation 2x - 3y + 5 = 0 a pour coefficients a = 2, b = -3 et c = 5.",
      gameQuestions: [
        { question: "Quelle est la forme générale de l'équation d'une droite dans le plan ?", answer: "ax + by + c = 0" },
        { question: "Quelle est l'équation réduite d'une droite non verticale ?", answer: "y = mx + p" }
      ],
      exercises: [
        { question: "Déterminez l'équation de la droite passant par les points A(1,2) et B(3,6).", answer: "y = 2x" }
      ],
      gameType: "quiz"
    },
    {
      id: "position-relative",
      title: "Position relative de deux droites",
      definition: "Deux droites dans le plan peuvent être parallèles, sécantes ou confondues.",
      example: "Deux droites d'équations y = 2x + 1 et y = 2x + 3 sont parallèles car elles ont le même coefficient directeur m = 2.",
      gameQuestions: [
        { question: "Comment détermine-t-on si deux droites sont parallèles à partir de leurs équations y = m₁x + p₁ et y = m₂x + p₂ ?", answer: "m₁ = m₂ et p₁ ≠ p₂" }
      ],
      exercises: [
        { question: "Déterminez la position relative des droites d'équations y = 3x + 2 et 3y = 9x + 5.", answer: "Parallèles" }
      ],
      gameType: "brainsprint"
    }
  ]
}; 