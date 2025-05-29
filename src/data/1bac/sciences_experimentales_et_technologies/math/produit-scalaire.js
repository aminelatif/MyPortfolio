export default {
  id: "produit-scalaire",
  title: "Étude analytique du produit scalaire",
  parts: [
    {
      id: "definition-produit-scalaire",
      title: "Définition et propriétés",
      sections: [
        { title: "Définition", content: "Le produit scalaire de deux vecteurs ⃗u et ⃗v du plan est défini par ⃗u·⃗v = ||⃗u||·||⃗v||·cos(θ) où θ est l'angle entre les deux vecteurs. Dans un repère orthonormé, si ⃗u(x₁, y₁) et ⃗v(x₂, y₂), alors ⃗u·⃗v = x₁x₂ + y₁y₂." },
        { title: "Exemple", content: "Pour ⃗u(3, 4) et ⃗v(1, 2), le produit scalaire est ⃗u·⃗v = 3×1 + 4×2 = 3 + 8 = 11." },
        { title: "Remarque", content: "Le produit scalaire permet de relier la géométrie (angles, distances) à l'algèbre vectorielle. Il est fondamental pour l'étude des droites, des cercles et des projections." }
      ],
      gameQuestions: [
        { question: "Si ⃗u et ⃗v sont deux vecteurs orthogonaux, que vaut leur produit scalaire?", answer: "0" },
        { question: "Quelle est la valeur de ||⃗u||² en fonction du produit scalaire?", answer: "||⃗u||² = ⃗u·⃗u" }
      ],
      exercises: [
        { question: "Calculez le produit scalaire des vecteurs ⃗u(2, -1) et ⃗v(3, 4).", answer: "⃗u·⃗v = 2×3 + (-1)×4 = 6 - 4 = 2" }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-geometriques",
      title: "Applications géométriques",
      sections: [
        { title: "Définition", content: "Le produit scalaire permet de caractériser l'orthogonalité (⃗u·⃗v = 0), de calculer des angles (cos(θ) = ⃗u·⃗v/(||⃗u||·||⃗v||)), des distances et des projections orthogonales." },
        { title: "Exemple", content: "Pour déterminer l'angle entre ⃗u(1, 1) et ⃗v(0, 1), on calcule cos(θ) = ⃗u·⃗v/(||⃗u||·||⃗v||) = 1/(√2×1) = 1/√2 = √2/2, donc θ = π/4 = 45°." },
        { title: "Remarque", content: "Le produit scalaire est un outil puissant pour vérifier l'orthogonalité, calculer des distances et résoudre des problèmes de géométrie analytique." }
      ],
      gameQuestions: [
        { question: "Comment peut-on vérifier si deux droites d₁ et d₂ de vecteurs directeurs ⃗u et ⃗v sont perpendiculaires?", answer: "En vérifiant que ⃗u·⃗v = 0" },
        { question: "Comment calcule-t-on la projection orthogonale d'un vecteur ⃗a sur un vecteur ⃗b?", answer: "proj⃗ₕ⃗a = (⃗a·⃗b/||⃗b||²)·⃗b" }
      ],
      exercises: [
        { question: "Déterminez l'angle entre les vecteurs ⃗u(1, 3) et ⃗v(2, -1).", answer: "cos(θ) = ⃗u·⃗v/(||⃗u||·||⃗v||) = (1×2 + 3×(-1))/(√(1²+3²)×√(2²+1²)) = -1/(√10×√5) = -1/√50 = -1/(5√2). L'angle θ est environ 98.13°." }
      ],
      gameType: "quiz"
    },
    {
      id: "formules-analytiques",
      title: "Formules analytiques et applications",
      sections: [
        { title: "Définition", content: "Dans un repère orthonormé, plusieurs formules font intervenir le produit scalaire: la distance entre deux points A(x₁, y₁) et B(x₂, y₂) est d(A,B) = ||⃗AB|| = √[(x₂-x₁)² + (y₂-y₁)²]. L'équation d'un cercle de centre Ω(a, b) et de rayon R est (x-a)² + (y-b)² = R²." },
        { title: "Exemple", content: "L'équation d'une droite perpendiculaire à un vecteur ⃗n(a, b) passant par un point P(x₀, y₀) est a(x-x₀) + b(y-y₀) = 0, ce qui se réécrit ax + by + c = 0 avec c = -(ax₀ + by₀)." },
        { title: "Remarque", content: "Les formules analytiques utilisant le produit scalaire permettent de relier les équations de droites, de cercles et de résoudre des problèmes de géométrie analytique de façon efficace." }
      ],
      gameQuestions: [
        { question: "Comment exprime-t-on l'équation d'un cercle de centre (2, 3) et de rayon 4?", answer: "(x-2)² + (y-3)² = 16" },
        { question: "Quelle est l'équation d'une droite perpendiculaire au vecteur ⃗n(2, 5) passant par le point P(1, -3)?", answer: "2(x-1) + 5(y-(-3)) = 0, soit 2x + 5y - 2 + 15 = 0, soit 2x + 5y + 13 = 0" }
      ],
      exercises: [
        { question: "Trouvez l'équation du cercle passant par les points A(1, 2), B(3, 4) et C(5, 2).", answer: "Soit Ω(a, b) le centre du cercle. Il est équidistant des trois points, donc (a-1)² + (b-2)² = (a-3)² + (b-4)² = (a-5)² + (b-2)². En développant la première égalité: a²-2a+1+b²-4b+4 = a²-6a+9+b²-8b+16 ⟹ -2a+1-4b+4 = -6a+9-8b+16 ⟹ 4a = 9-1+16-4+8b-4b ⟹ 4a = 20+4b ⟹ a = 5+b. En substituant dans (a-1)² + (b-2)² = (a-5)² + (b-2)² : (5+b-1)² + (b-2)² = (5+b-5)² + (b-2)² ⟹ (4+b)² = b² ⟹ 16+8b+b² = b² ⟹ 8b = -16 ⟹ b = -2. Donc a = 5+(-2) = 3. Le centre est Ω(3, -2) et le rayon R = √[(3-1)² + (-2-2)² = √[4+16] = √20. L'équation du cercle est (x-3)² + (y-(-2))² = 20, soit (x-3)² + (y+2)² = 20." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 