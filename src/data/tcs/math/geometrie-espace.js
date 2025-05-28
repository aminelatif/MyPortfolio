export default {
  id: "geometrie-espace",
  title: "Géométrie dans l'espace",
  parts: [
    {
      id: "reperage-espace",
      title: "Repérage dans l'espace",
      definition: "Le repérage dans l'espace se fait à l'aide d'un repère orthonormé (O, i⃗, j⃗, k⃗) où un point M est repéré par ses trois coordonnées (x, y, z).",
      example: "Dans l'espace, le point M(3, 2, 5) est situé à 3 unités selon l'axe des x, 2 unités selon l'axe des y et 5 unités selon l'axe des z par rapport à l'origine O.",
      sections: [
        { title: "Définition", content: "Le repérage dans l'espace se fait à l'aide d'un repère orthonormé (O, i⃗, j⃗, k⃗) où un point M est repéré par ses trois coordonnées (x, y, z)." },
        { title: "Exemple", content: "Dans l'espace, le point M(3, 2, 5) est situé à 3 unités selon l'axe des x, 2 unités selon l'axe des y et 5 unités selon l'axe des z par rapport à l'origine O." },
        { title: "Remarque", content: "Le repérage dans l'espace est une généralisation du repérage dans le plan." }
      ],
      gameQuestions: [
        { question: "Quelles sont les coordonnées de l'origine O dans l'espace ?", answer: "(0, 0, 0)" },
        { question: "Quelle est la formule de la distance entre deux points A(x₁, y₁, z₁) et B(x₂, y₂, z₂) de l'espace ?", answer: "√[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]" }
      ],
      exercises: [
        { question: "Calculez la distance entre les points A(1, 2, 3) et B(4, 6, 3).", answer: "5" }
      ],
      gameType: "quiz"
    },
    {
      id: "droites-plans",
      title: "Droites et plans dans l'espace",
      definition: "Une droite dans l'espace peut être définie par un point et un vecteur directeur. Un plan peut être défini par un point et deux vecteurs directeurs non colinéaires, ou par un point et un vecteur normal.",
      example: "La droite passant par le point A(1, 2, 3) et de vecteur directeur v⃗(2, 1, -1) a pour représentation paramétrique : x = 1 + 2t, y = 2 + t, z = 3 - t.",
      sections: [
        { title: "Définition", content: "Une droite dans l'espace peut être définie par un point et un vecteur directeur. Un plan peut être défini par un point et deux vecteurs directeurs non colinéaires, ou par un point et un vecteur normal." },
        { title: "Exemple", content: "La droite passant par le point A(1, 2, 3) et de vecteur directeur v⃗(2, 1, -1) a pour représentation paramétrique : x = 1 + 2t, y = 2 + t, z = 3 - t." },
        { title: "Remarque", content: "Deux droites de l'espace peuvent être parallèles, sécantes ou gauches." }
      ],
      gameQuestions: [
        { question: "Comment s'écrit l'équation cartésienne d'un plan de vecteur normal n⃗(a, b, c) passant par le point P(x₀, y₀, z₀) ?", answer: "a(x-x₀) + b(y-y₀) + c(z-z₀) = 0" }
      ],
      exercises: [
        { question: "Déterminez l'équation cartésienne du plan passant par le point A(1, 2, 3) et de vecteur normal n⃗(2, -1, 4).", answer: "2(x-1) - (y-2) + 4(z-3) = 0 ou 2x - y + 4z = 14" }
      ],
      gameType: "brainsprint"
    },
    {
      id: "solides-usuels",
      title: "Solides usuels",
      definition: "Les solides usuels sont des figures géométriques en trois dimensions telles que le cube, le parallélépipède rectangle, la sphère, le cylindre, le cône et la pyramide.",
      example: "Un cube de côté a a pour volume V = a³ et pour aire totale A = 6a².",
      sections: [
        { title: "Définition", content: "Les solides usuels sont des figures géométriques en trois dimensions telles que le cube, le parallélépipède rectangle, la sphère, le cylindre, le cône et la pyramide." },
        { title: "Exemple", content: "Un cube de côté a a pour volume V = a³ et pour aire totale A = 6a²." },
        { title: "Remarque", content: "Le volume d'un solide est exprimé en unités cubes." }
      ],
      gameQuestions: [
        { question: "Quel est le volume d'une sphère de rayon R ?", answer: "(4/3)πR³" },
        { question: "Quelle est l'aire d'une sphère de rayon R ?", answer: "4πR²" }
      ],
      exercises: [
        { question: "Calculez le volume d'un cylindre de rayon 3 cm et de hauteur 5 cm.", answer: "45π cm³" }
      ],
      gameType: "quiz"
    }
  ]
}; 