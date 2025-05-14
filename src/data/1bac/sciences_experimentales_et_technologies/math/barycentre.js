export default {
  id: "barycentre",
  title: "Barycentre dans le plan",
  parts: [
    {
      id: "definition-barycentre",
      title: "Définition du barycentre",
      definition: "Le barycentre de n points pondérés (Aᵢ, αᵢ) est le point G tel que ∑αᵢ⃗GA₍ᵢ₎ = ⃗0. Si la somme des coefficients est non nulle (∑αᵢ ≠ 0), alors G est l'unique point tel que ⃗OG = (∑αᵢ⃗OA₍ᵢ₎)/(∑αᵢ).",
      example: "Le barycentre de deux points pondérés (A, 2) et (B, 3) divise le segment [AB] dans le rapport 3/2, c'est-à-dire GA/GB = 3/2.",
      gameQuestions: [
        { question: "Quelle est la formule des coordonnées du barycentre G de points pondérés (Aᵢ, αᵢ) si ∑αᵢ ≠ 0?", answer: "xG = (∑αᵢxᵢ)/(∑αᵢ) et yG = (∑αᵢyᵢ)/(∑αᵢ)" },
        { question: "Que représente le barycentre de deux points A et B affectés du même coefficient?", answer: "Le milieu du segment [AB]" }
      ],
      exercises: [
        { question: "Calculez les coordonnées du barycentre G des points A(1, 2), B(3, -1) et C(2, 4) affectés respectivement des coefficients 2, 3 et 1.", answer: "G((2×1 + 3×3 + 1×2)/(2+3+1), (2×2 + 3×(-1) + 1×4)/(2+3+1)) = G(2, 0.5)" }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-barycentre",
      title: "Propriétés du barycentre",
      definition: "Le barycentre possède plusieurs propriétés importantes: associativité (on peut regrouper les points), commutativité (l'ordre des points n'a pas d'importance), et linéarité (effet d'une homothétie ou d'une translation sur le barycentre).",
      example: "Le barycentre de (A, α) et (B, β) est le même que le barycentre de (A, α/β) et (B, 1) si β ≠ 0.",
      gameQuestions: [
        { question: "Comment calcule-t-on le barycentre de (G₁, α₁) et (G₂, α₂) où G₁ et G₂ sont eux-mêmes des barycentres?", answer: "C'est le barycentre des points initiaux avec leurs coefficients respectivement multipliés par α₁ et α₂" },
        { question: "Comment évolue le barycentre G de points pondérés (Aᵢ, αᵢ) si on applique une translation ⃗t à tous les points Aᵢ?", answer: "G est également translaté par ⃗t" }
      ],
      exercises: [
        { question: "Montrez que le barycentre des milieux des côtés d'un triangle est le même que celui des sommets du triangle.", answer: "Si A, B, C sont les sommets, alors les milieux sont (A+B)/2, (B+C)/2, (C+A)/2. Leur barycentre est ((A+B)/2 + (B+C)/2 + (C+A)/2)/3 = (A+B+C)/3, qui est aussi le barycentre de A, B et C." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-geometriques",
      title: "Applications géométriques",
      definition: "Le barycentre permet de caractériser de nombreux points remarquables en géométrie: centre de gravité d'un triangle (barycentre des sommets), centre du cercle inscrit (barycentre des sommets pondérés par les longueurs des côtés opposés) ou orthocentre (barycentre avec coefficients spécifiques).",
      example: "Le centre de gravité G d'un triangle ABC est le barycentre des points A, B et C affectés du même coefficient. Il est aussi le point d'intersection des médianes.",
      gameQuestions: [
        { question: "Quel est le barycentre des sommets d'un triangle affectés de coefficients égaux?", answer: "Le centre de gravité du triangle" },
        { question: "Quelle est la propriété du centre de gravité G d'un triangle par rapport aux médianes?", answer: "G divise chaque médiane dans le rapport 2/1 à partir du sommet" }
      ],
      exercises: [
        { question: "Montrez que le centre de gravité G d'un triangle divise chaque médiane dans le rapport 2/1 à partir du sommet.", answer: "Si M est le milieu de [BC], alors G est le barycentre de A, B et C, donc ⃗OG = (⃗OA + ⃗OB + ⃗OC)/3. Or, ⃗OM = (⃗OB + ⃗OC)/2, donc ⃗AG = ⃗OG - ⃗OA = (⃗OB + ⃗OC - 2⃗OA)/3 et ⃗AM = ⃗OM - ⃗OA = (⃗OB + ⃗OC - 2⃗OA)/2. Ainsi, ⃗AG = (2/3)⃗AM, donc G divise [AM] dans le rapport 2/1." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 