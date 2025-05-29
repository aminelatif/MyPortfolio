export default {
  id: "etude-analytique-espace",
  title: "Étude analytique de l'espace",
  parts: [
    {
      id: "repere-espace",
      title: "Repère de l'espace",
      sections: [
        {
          title: "Définition",
          content: "Un repère orthonormé de l'espace est défini par un point O (origine) et trois vecteurs unitaires orthogonaux entre eux, notés généralement $\\vec{i}$, $\\vec{j}$ et $\\vec{k}$. Dans ce repère, tout point M de l'espace est repéré par ses trois coordonnées (x, y, z), telles que $\\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$."
        },
        {
          title: "Exemple",
          content: "Dans un repère orthonormé (O, $\\vec{i}$, $\\vec{j}$, $\\vec{k}$), le point M(3, -2, 5) est tel que $\\overrightarrow{OM} = 3\\vec{i} - 2\\vec{j} + 5\\vec{k}$. La distance OM est donnée par $\\sqrt{3^2 + (-2)^2 + 5^2} = \\sqrt{9 + 4 + 25} = \\sqrt{38}$."
        },
        {
          title: "Remarque",
          content: "Le choix d'un repère orthonormé est crucial pour simplifier les calculs de distances et d'angles. Dans un tel repère, les formules de distance et de produit scalaire prennent une forme particulièrement simple."
        }
      ],
      gameQuestions: [
        { question: "Quelle est la distance entre les points A(1, 2, 3) et B(4, -1, 5)?", answer: "$\\sqrt{(4-1)^2 + (-1-2)^2 + (5-3)^2} = \\sqrt{9 + 9 + 4} = \\sqrt{22}$" },
        { question: "Si M est le milieu du segment AB, quelles sont les coordonnées de M sachant que A(2, -3, 4) et B(6, 1, 0)?", answer: "M(4, -1, 2)" }
      ],
      exercises: [
        { question: "Soit un tétraèdre OABC tel que O est l'origine du repère, A(2, 0, 0), B(0, 3, 0) et C(0, 0, 4). (a) Calculez le volume de ce tétraèdre. (b) Déterminez l'équation du plan (ABC).", answer: "(a) Le volume d'un tétraèdre est donné par $V = \\frac{1}{6}|\\det(\\overrightarrow{OA}, \\overrightarrow{OB}, \\overrightarrow{OC})|$.\n$\\det(\\overrightarrow{OA}, \\overrightarrow{OB}, \\overrightarrow{OC}) = \\det\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix} = 2 \\times 3 \\times 4 = 24$\nDonc $V = \\frac{1}{6} \\times 24 = 4$ unités cubes.\n\n(b) L'équation du plan (ABC) peut s'écrire sous la forme $\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$\nOu encore : $6x + 4y + 3z = 12$" }
      ],
      gameType: "quiz"
    },
    {
      id: "vecteurs-espace",
      title: "Vecteurs et coordonnées dans l'espace",
      sections: [
        {
          title: "Définition",
          content: "Dans l'espace, un vecteur $\\vec{v}$ est représenté par ses trois composantes (a, b, c) dans le repère orthonormé. Les opérations vectorielles (addition, multiplication par un scalaire) s'effectuent composante par composante. La norme du vecteur est $\\|\\vec{v}\\| = \\sqrt{a^2 + b^2 + c^2}$."
        },
        {
          title: "Exemple",
          content: "Si $\\vec{u}(2, -1, 3)$ et $\\vec{v}(4, 0, -2)$, alors $\\vec{u} + \\vec{v} = (2+4, -1+0, 3+(-2)) = (6, -1, 1)$ et la norme de $\\vec{u}$ est $\\|\\vec{u}\\| = \\sqrt{2^2 + (-1)^2 + 3^2} = \\sqrt{4 + 1 + 9} = \\sqrt{14}$."
        },
        {
          title: "Remarque",
          content: "Les opérations vectorielles dans l'espace suivent les mêmes règles qu'en dimension 2, mais avec une composante supplémentaire. Le produit vectoriel, spécifique à la dimension 3, est particulièrement utile pour déterminer des vecteurs orthogonaux."
        }
      ],
      gameQuestions: [
        { question: "Soit $\\vec{u}(3, -2, 1)$ et $\\vec{v}(0, 4, -3)$. Calculez $\\vec{u} \\cdot \\vec{v}$.", answer: "$\\vec{u} \\cdot \\vec{v} = 3 \\times 0 + (-2) \\times 4 + 1 \\times (-3) = 0 - 8 - 3 = -11$" },
        { question: "Si $\\vec{w} = 2\\vec{u} - \\vec{v}$ avec $\\vec{u}(1, 2, -1)$ et $\\vec{v}(3, 0, 2)$, quelles sont les coordonnées de $\\vec{w}$?", answer: "$\\vec{w} = (2 \\times 1 - 3, 2 \\times 2 - 0, 2 \\times (-1) - 2) = (-1, 4, -4)$" }
      ],
      exercises: [
        { question: "Soient les vecteurs $\\vec{u}(1, 2, 3)$ et $\\vec{v}(2, -1, 0)$. (a) Calculez le produit scalaire $\\vec{u} \\cdot \\vec{v}$. (b) Déterminez l'angle entre ces deux vecteurs. (c) Trouvez un vecteur $\\vec{w}$ perpendiculaire à la fois à $\\vec{u}$ et à $\\vec{v}$.", answer: "(a) $\\vec{u} \\cdot \\vec{v} = 1 \\times 2 + 2 \\times (-1) + 3 \\times 0 = 2 - 2 + 0 = 0$\nLes vecteurs sont perpendiculaires.\n\n(b) L'angle θ entre les vecteurs est donné par $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|}$\nComme le produit scalaire est nul, $\\cos(\\theta) = 0$, donc $\\theta = 90°$.\n\n(c) On peut utiliser le produit vectoriel : $\\vec{w} = \\vec{u} \\times \\vec{v}$\n$\\vec{w} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 0 \\end{vmatrix} = \\begin{vmatrix} 2 & 3 \\\\ -1 & 0 \\end{vmatrix}\\vec{i} - \\begin{vmatrix} 1 & 3 \\\\ 2 & 0 \\end{vmatrix}\\vec{j} + \\begin{vmatrix} 1 & 2 \\\\ 2 & -1 \\end{vmatrix}\\vec{k}$\n$\\vec{w} = (2 \\times 0 - 3 \\times (-1))\\vec{i} - (1 \\times 0 - 3 \\times 2)\\vec{j} + (1 \\times (-1) - 2 \\times 2)\\vec{k}$\n$\\vec{w} = (0 + 3)\\vec{i} - (0 - 6)\\vec{j} + (-1 - 4)\\vec{k} = (3, 6, -5)$" }
      ],
      gameType: "quiz"
    },
    {
      id: "plan-espace",
      title: "Plans dans l'espace",
      sections: [
        {
          title: "Définition",
          content: "Un plan dans l'espace peut être défini par une équation cartésienne de la forme ax + by + cz + d = 0, où (a, b, c) sont les coordonnées du vecteur normal au plan, et d est une constante. Un plan peut aussi être défini par un point et un vecteur normal, ou par trois points non alignés, ou encore par un point et deux vecteurs directeurs."
        },
        {
          title: "Exemple",
          content: "Le plan d'équation 2x - 3y + z - 4 = 0 a pour vecteur normal $\\vec{n}(2, -3, 1)$. Si un point A(1, 2, 5) appartient à ce plan, alors 2×1 - 3×2 + 5 - 4 = 0, soit 2 - 6 + 5 - 4 = -3 ≠ 0, donc A n'appartient pas au plan."
        },
        {
          title: "Remarque",
          content: "L'équation cartésienne d'un plan est unique à un facteur multiplicatif près. Le vecteur normal au plan permet de déterminer facilement l'angle entre deux plans et de vérifier si un point appartient au plan."
        }
      ],
      gameQuestions: [
        { question: "Quelle est l'équation du plan passant par le point A(1, -2, 3) et perpendiculaire au vecteur $\\vec{n}(2, 0, -1)$?", answer: "2(x-1) + 0(y+2) - 1(z-3) = 0, soit 2x - z = 2 - 3 = -1, ou encore 2x - z + 1 = 0" },
        { question: "Le plan d'équation 3x + 2y - z + 4 = 0 passe-t-il par l'origine?", answer: "Non, car en substituant (0,0,0), on obtient 3×0 + 2×0 - 0 + 4 = 4 ≠ 0" }
      ],
      exercises: [
        { question: "Considérez les plans P₁ : 2x - y + 3z - 5 = 0 et P₂ : 4x - 2y + 6z + 1 = 0. (a) Ces plans sont-ils parallèles? (b) S'ils ne sont pas parallèles, déterminez l'équation de leur droite d'intersection.", answer: "(a) Pour que deux plans soient parallèles, leurs vecteurs normaux doivent être colinéaires.\nVecteur normal de P₁ : $\\vec{n_1}(2, -1, 3)$\nVecteur normal de P₂ : $\\vec{n_2}(4, -2, 6)$\nOn observe que $\\vec{n_2} = 2\\vec{n_1}$, donc les vecteurs normaux sont colinéaires et les plans sont parallèles.\n\n(b) Comme les plans sont parallèles et d'équations différentes, ils n'ont pas de droite d'intersection. Ils sont disjoints." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "droite-espace",
      title: "Droites dans l'espace",
      sections: [
        {
          title: "Définition",
          content: "Une droite dans l'espace peut être représentée par une équation paramétrique : $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$, où $(x_0, y_0, z_0)$ sont les coordonnées d'un point de la droite, $(a, b, c)$ sont les coordonnées d'un vecteur directeur de la droite, et $t$ est un paramètre réel. Une droite peut aussi être définie comme l'intersection de deux plans."
        },
        {
          title: "Exemple",
          content: "La droite passant par le point A(1, 2, -1) et de vecteur directeur $\\vec{v}(3, 0, 2)$ a pour équations paramétriques : $x = 1 + 3t$, $y = 2 + 0t = 2$, $z = -1 + 2t$. Le point B(4, 2, 1) appartient à cette droite pour t = 1."
        },
        {
          title: "Remarque",
          content: "Contrairement au plan, une droite dans l'espace ne peut pas être définie par une seule équation cartésienne. Elle nécessite soit des équations paramétriques, soit l'intersection de deux plans. La position relative de deux droites dans l'espace peut être plus complexe qu'en dimension 2."
        }
      ],
      gameQuestions: [
        { question: "Donnez un système d'équations paramétriques de la droite passant par les points A(1, 0, 2) et B(3, -2, 5).", answer: "Vecteur directeur : $\\vec{AB}(2, -2, 3)$\nÉquations : $x = 1 + 2t$, $y = 0 - 2t$, $z = 2 + 3t$" },
        { question: "Les droites D₁ : $x = 1 + t$, $y = 2 - t$, $z = 3 + 2t$ et D₂ : $x = 2 + 2s$, $y = 1 + s$, $z = 4 - s$ sont-elles parallèles?", answer: "Les vecteurs directeurs sont $\\vec{v_1}(1, -1, 2)$ et $\\vec{v_2}(2, 1, -1)$. Ils ne sont pas colinéaires, donc les droites ne sont pas parallèles." }
      ],
      exercises: [
        { question: "Soient les droites D₁ : $x = 2 + 3t$, $y = 1 - t$, $z = 4 + 2t$ et D₂ : $x = 1 + 2s$, $y = 3 + s$, $z = 2 - s$. (a) Déterminez si ces droites sont sécantes. (b) Si elles sont sécantes, trouvez les coordonnées de leur point d'intersection.", answer: "(a) Les vecteurs directeurs sont $\\vec{v_1}(3, -1, 2)$ et $\\vec{v_2}(2, 1, -1)$.\nCalculons le déterminant : $\\det(\\vec{v_1}, \\vec{v_2}, \\overrightarrow{A_1A_2}) = \\det\\begin{pmatrix} 3 & -1 & 2 \\\\ 2 & 1 & -1 \\\\ -1 & 2 & -2 \\end{pmatrix}$\nSi ce déterminant est nul, les droites sont coplanaires (potentiellement sécantes).\n\nRemarque : $\\overrightarrow{A_1A_2} = (1, 3, 2) - (2, 1, 4) = (-1, 2, -2)$\n\nLe calcul donne un déterminant non nul, donc les droites ne sont pas coplanaires et n'ont pas de point d'intersection.\n\n(b) Les droites ne sont pas sécantes." }
      ],
      gameType: "quiz"
    }
  ]
}; 