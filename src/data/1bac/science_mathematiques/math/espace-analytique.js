export default {
  id: "espace-analytique",
  title: "Étude analytique de l'espace",
  parts: [
    {
      id: "points-coordonnees",
      title: "Points et coordonnées dans l'espace",
      sections: [
        { title: "Définition", content: "Dans un repère (O, i⃗, j⃗, k⃗) de l'espace, tout point M est repéré par ses coordonnées (x, y, z). La distance entre deux points A(x₁, y₁, z₁) et B(x₂, y₂, z₂) est donnée par d(A,B) = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]." },
        { title: "Exemple", content: "La distance entre les points A(1, 2, 3) et B(4, 6, 3) est d(A,B) = √[(4-1)² + (6-2)² + (3-3)²] = √[9 + 16 + 0] = 5." },
        { title: "Remarque", content: "Le repérage dans l'espace généralise le repérage dans le plan." }
      ],
      gameQuestions: [
        { question: "Quelle est la formule du milieu du segment [AB] dans l'espace ?", answer: "I((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)" }
      ],
      exercises: [
        { question: "Calculez les coordonnées du barycentre des points A(1, 2, 3), B(4, 5, 6) et C(7, 8, 9) affectés respectivement des coefficients 2, 3 et 5.", answer: "G((2×1 + 3×4 + 5×7)/(2+3+5), (2×2 + 3×5 + 5×8)/(2+3+5), (2×3 + 3×6 + 5×9)/(2+3+5)) = G(5, 6, 7)" }
      ],
      gameType: "quiz"
    },
    {
      id: "droites-espace",
      title: "Droites de l'espace",
      sections: [
        { title: "Définition", content: "Une droite dans l'espace peut être définie par un point A et un vecteur directeur u⃗ (représentation paramétrique) ou par l'intersection de deux plans (représentation cartésienne)." },
        { title: "Exemple", content: "La droite passant par A(1, 2, 3) et de vecteur directeur u⃗(2, 1, -1) a pour équation paramétrique : x = 1 + 2t, y = 2 + t, z = 3 - t, t ∈ ℝ." },
        { title: "Remarque", content: "Deux droites de l'espace peuvent être parallèles, sécantes ou gauches." }
      ],
      gameQuestions: [
        { question: "Comment déterminer si deux droites de l'espace sont parallèles ?", answer: "Si leurs vecteurs directeurs sont colinéaires" }
      ],
      exercises: [
        { question: "Donnez une représentation paramétrique de la droite passant par les points A(1, 0, 2) et B(3, 4, -1).", answer: "u⃗ = AB⃗ = (2, 4, -3). Équation paramétrique : x = 1 + 2t, y = 0 + 4t, z = 2 - 3t, t ∈ ℝ" }
      ],
      gameType: "quiz"
    },
    {
      id: "plans-espace",
      title: "Plans dans l'espace",
      sections: [
        { title: "Définition", content: "Un plan dans l'espace peut être défini par un point A et deux vecteurs directeurs non colinéaires u⃗ et v⃗, ou par une équation cartésienne de la forme ax + by + cz + d = 0, où (a, b, c) sont les coordonnées du vecteur normal au plan." },
        { title: "Exemple", content: "Le plan passant par A(1, 2, 3) et de vecteur normal n⃗(2, -1, 1) a pour équation : 2(x-1) - 1(y-2) + 1(z-3) = 0, soit 2x - y + z - 3 = 0." },
        { title: "Remarque", content: "Un plan peut être défini de plusieurs façons dans l'espace." }
      ],
      gameQuestions: [
        { question: "Comment déterminer si une droite est parallèle à un plan ?", answer: "Si le vecteur directeur de la droite est orthogonal au vecteur normal du plan" }
      ],
      exercises: [
        { question: "Déterminez l'équation du plan passant par les points A(1, 0, 0), B(0, 1, 0) et C(0, 0, 1).", answer: "Vecteurs AB⃗(-1, 1, 0) et AC⃗(-1, 0, 1). Le vecteur normal est AB⃗ × AC⃗ = (1, 1, 1). Équation : x + y + z - 1 = 0" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 