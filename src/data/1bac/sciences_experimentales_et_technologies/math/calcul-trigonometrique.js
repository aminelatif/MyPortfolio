export default {
  id: "calcul-trigonometrique",
  title: "Calcul trigonométrique",
  parts: [
    {
      id: "cercle-trigonometrique",
      title: "Le cercle trigonométrique",
      definition: "Le cercle trigonométrique est un cercle de rayon 1 centré à l'origine d'un repère orthonormé. Pour tout réel t, on définit le point M(t) sur ce cercle tel que l'arc OM(t) a pour mesure t. Les coordonnées de M(t) sont (cos(t), sin(t)).",
      example: "Pour t = π/4, les coordonnées de M(π/4) sont (cos(π/4), sin(π/4)) = (√2/2, √2/2).",
      gameQuestions: [
        { question: "Quelles sont les coordonnées du point M(π/2) sur le cercle trigonométrique?", answer: "(0, 1)" },
        { question: "Pour quelles valeurs de t dans [0, 2π[ a-t-on cos(t) = 0?", answer: "t = π/2 et t = 3π/2" }
      ],
      exercises: [
        { question: "Calculez les coordonnées du point M(5π/3) sur le cercle trigonométrique.", answer: "M(5π/3) = (cos(5π/3), sin(5π/3)) = (1/2, -√3/2)" }
      ],
      gameType: "quiz"
    },
    {
      id: "formules-trigonometriques",
      title: "Formules trigonométriques",
      definition: "Plusieurs formules permettent de calculer avec les fonctions trigonométriques: cos²(t) + sin²(t) = 1, cos(a+b) = cos(a)cos(b) - sin(a)sin(b), sin(a+b) = sin(a)cos(b) + cos(a)sin(b), cos(2t) = cos²(t) - sin²(t) = 2cos²(t) - 1 = 1 - 2sin²(t), sin(2t) = 2sin(t)cos(t).",
      example: "Pour calculer cos(π/3 + π/4), on utilise la formule de l'addition: cos(π/3 + π/4) = cos(π/3)cos(π/4) - sin(π/3)sin(π/4) = (1/2)(√2/2) - (√3/2)(√2/2) = √2/4 - √6/4.",
      gameQuestions: [
        { question: "Quelle est la valeur de sin(π/6 + π/3)?", answer: "sin(π/6 + π/3) = sin(π/2) = 1" },
        { question: "Exprimez cos(t-π/2) en fonction de sin(t).", answer: "cos(t-π/2) = cos(t)cos(-π/2) - sin(t)sin(-π/2) = cos(t)·0 - sin(t)·(-1) = sin(t)" }
      ],
      exercises: [
        { question: "Démontrez la formule cos(3t) = 4cos³(t) - 3cos(t).", answer: "cos(3t) = cos(2t + t) = cos(2t)cos(t) - sin(2t)sin(t) = (2cos²(t) - 1)cos(t) - 2sin(t)cos(t)sin(t) = 2cos³(t) - cos(t) - 2cos(t)sin²(t) = 2cos³(t) - cos(t) - 2cos(t)(1 - cos²(t)) = 2cos³(t) - cos(t) - 2cos(t) + 2cos³(t) = 4cos³(t) - 3cos(t)" }
      ],
      gameType: "quiz"
    },
    {
      id: "equations-trigonometriques",
      title: "Équations trigonométriques",
      definition: "Une équation trigonométrique est une équation où l'inconnue apparaît dans les arguments de fonctions trigonométriques. Pour les résoudre, on utilise les formules trigonométriques et les propriétés de périodicité: cos(t + 2π) = cos(t) et sin(t + 2π) = sin(t) pour tout t.",
      example: "Pour résoudre cos(x) = 1/2 sur [0, 2π[, on sait que cos(π/3) = 1/2 et cos(2π - π/3) = cos(5π/3) = 1/2. Donc les solutions sont x = π/3 et x = 5π/3.",
      gameQuestions: [
        { question: "Résolvez sin(x) = 0 sur [0, 2π[.", answer: "x = 0 ou x = π" },
        { question: "Résolvez cos(2x) = 0 sur [0, 2π[.", answer: "2x = π/2 + kπ, donc x = π/4 + kπ/2 avec k entier. Sur [0, 2π[, on a x = π/4, x = 3π/4, x = 5π/4, x = 7π/4" }
      ],
      exercises: [
        { question: "Résolvez l'équation 2cos²(x) - cos(x) - 1 = 0 sur [0, 2π[.", answer: "Posons X = cos(x). L'équation devient 2X² - X - 1 = 0. Le discriminant est Δ = 1 + 4·2 = 9, donc X = (1 ± 3)/4, soit X = 1 ou X = -1/2. Ainsi, soit cos(x) = 1, soit cos(x) = -1/2. Si cos(x) = 1, alors x = 0 ou x = 2π. Si cos(x) = -1/2, alors x = 2π/3 ou x = 4π/3. Les solutions sur [0, 2π[ sont donc x = 0, x = 2π/3, x = 4π/3 et x = 2π." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 