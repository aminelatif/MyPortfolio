export default {
  id: "rotation",
  title: "La rotation",
  parts: [
    {
      id: "definition-proprietes",
      title: "Définition et propriétés",
      definition: "Une rotation dans le plan est une transformation géométrique qui fait tourner tous les points autour d'un point fixe appelé centre de rotation, selon un angle donné. Une rotation de centre O et d'angle θ transforme un point M en un point M' tel que: OM' = OM et (OM', OM) = θ.",
      example: "La rotation de centre O(0,0) et d'angle π/2 (90°) transforme le point M(1,0) en M'(0,1).",
      gameQuestions: [
        { question: "Quelles sont les propriétés conservées par une rotation?", answer: "Les distances, les angles, les aires, les alignements" },
        { question: "Quelle est l'image d'une droite par une rotation?", answer: "Une droite" }
      ],
      exercises: [
        { question: "Calculez l'image du point A(3,1) par la rotation de centre O(0,0) et d'angle π/2.", answer: "La rotation de 90° transforme le point A(3,1) en A'(-1,3)." }
      ],
      gameType: "quiz"
    },
    {
      id: "representation-complexe",
      title: "Représentation complexe",
      definition: "Dans le plan complexe, une rotation de centre O et d'angle θ s'exprime simplement: si z est l'affixe d'un point M et z₀ l'affixe du centre de rotation, alors l'affixe z' du point M' image de M est donnée par: z' - z₀ = e^(iθ)(z - z₀).",
      example: "Pour une rotation de centre O(0,0) et d'angle π/2, on a z' = e^(iπ/2) × z = i × z. Si z = 2 + 3i, alors z' = i × (2 + 3i) = i × 2 + i × 3i = 2i - 3 = -3 + 2i.",
      gameQuestions: [
        { question: "Comment s'exprime une rotation de centre O(0,0) et d'angle θ dans le plan complexe?", answer: "z' = e^(iθ) × z" },
        { question: "Quelle est l'affixe de l'image du point d'affixe z = 1+i par la rotation de centre 0 et d'angle π?", answer: "z' = e^(iπ) × z = -1 × (1+i) = -1-i" }
      ],
      exercises: [
        { question: "Déterminez l'affixe de l'image du point M d'affixe z = 3-2i par la rotation de centre A d'affixe z₀ = 1+i et d'angle π/2.", answer: "z' - z₀ = e^(iπ/2)(z - z₀), donc z' - (1+i) = i × ((3-2i) - (1+i)) = i × (2-3i) = i×2 - i×3i = 2i + 3. Donc z' = 1+i + 3 + 2i = 4+3i." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-geometriques",
      title: "Applications géométriques",
      definition: "Les rotations jouent un rôle important en géométrie: construction de polygones réguliers, étude des symétries, des transformations du plan. Une rotation d'angle 2π/n permet de construire un polygone régulier à n côtés. La composition de deux rotations de même centre est une rotation de même centre, d'angle égal à la somme des angles.",
      example: "Un hexagone régulier peut être construit en appliquant successivement une rotation d'angle 2π/6 = π/3 à partir d'un point quelconque. Les sommets sont tous situés sur un cercle centré au centre de rotation.",
      gameQuestions: [
        { question: "Quelle est la transformation obtenue en composant deux rotations de même centre O, d'angles respectifs α et β?", answer: "Une rotation de centre O et d'angle α+β" },
        { question: "Comment construire un triangle équilatéral à partir d'un point A et d'un centre O?", answer: "En appliquant successivement la rotation de centre O et d'angle 2π/3 au point A" }
      ],
      exercises: [
        { question: "Soit ABC un triangle quelconque, et r la rotation de centre A et d'angle 2π/3. Montrez que les points A, B, r(B), r(r(B)) forment un parallélogramme.", answer: "Notons B' = r(B) et B'' = r(B'). Par définition d'une rotation, AB' = AB et AB'' = AB'. Les angles (AB',AB) = (AB'',AB') = 2π/3. Comme la somme des angles dans un triangle est π, l'angle (AB'',B'B) = π - 2π/3 = π/3. De même, (AB',BB'') = π/3. Donc les angles opposés du quadrilatère BB'B''A sont égaux, et les côtés opposés sont de même longueur (AB = AB'' et AB' = B'B''). C'est donc un parallélogramme." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 