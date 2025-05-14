export default {
  id: "representation-graphique-fonction",
  title: "Représentation graphique d'une fonction",
  parts: [
    {
      id: "notion-representation",
      title: "Notion de représentation graphique",
      definition: "La représentation graphique d'une fonction f est l'ensemble des points de coordonnées (x, f(x)) dans un repère cartésien, où x parcourt le domaine de définition de f. Cette courbe, notée Cf, permet de visualiser le comportement de la fonction et ses propriétés (croissance, extrema, symétries, etc.).",
      example: "Pour la fonction f(x) = x², la représentation graphique est une parabole d'équation y = x². Si x = 2, alors f(2) = 4, ce qui correspond au point (2, 4) sur la courbe.",
      gameQuestions: [
        { question: "Quel est le point de la courbe représentative de f(x) = 3x - 1 correspondant à x = 2?", answer: "(2, 5)" },
        { question: "Si un point de coordonnées (3, 7) appartient à la courbe représentative d'une fonction f, que vaut f(3)?", answer: "f(3) = 7" }
      ],
      exercises: [
        { question: "Soit f(x) = x² - 4x + 3. (a) Déterminez les coordonnées des points d'intersection de la courbe avec l'axe des abscisses. (b) Déterminez les coordonnées du sommet de la parabole.", answer: "(a) Les points d'intersection avec l'axe des abscisses correspondent aux valeurs de x telles que f(x) = 0.\nx² - 4x + 3 = 0\nΔ = 16 - 12 = 4\nx₁ = (4 - 2)/2 = 1 et x₂ = (4 + 2)/2 = 3\nLes points d'intersection sont (1, 0) et (3, 0).\n\n(b) Le sommet de la parabole a pour abscisse x = 4/2 = 2 (milieu des racines).\nSon ordonnée est f(2) = 2² - 4×2 + 3 = 4 - 8 + 3 = -1.\nLe sommet a donc pour coordonnées (2, -1)." }
      ],
      gameType: "quiz"
    },
    {
      id: "elements-caracteristiques",
      title: "Éléments caractéristiques d'une courbe",
      definition: "Les éléments caractéristiques d'une courbe incluent : le domaine de définition, les intersections avec les axes, les extrema (maximum, minimum), les asymptotes, les points d'inflexion, les intervalles de croissance et décroissance, et les symétries éventuelles. Ces éléments permettent d'esquisser et d'analyser la courbe.",
      example: "Pour f(x) = 1/x, la courbe présente deux branches infinies avec des asymptotes : l'axe des ordonnées (x = 0) et l'axe des abscisses (y = 0). La fonction est décroissante sur ]−∞, 0[ et sur ]0, +∞[, et la courbe présente une symétrie par rapport à l'origine.",
      gameQuestions: [
        { question: "Quelle est l'équation de l'asymptote horizontale de la fonction f(x) = (3x-1)/(x+2) quand x tend vers +∞?", answer: "y = 3" },
        { question: "Pour la fonction g(x) = x³ - 3x² + 2, en quel point la tangente à la courbe est-elle horizontale?", answer: "Pour x = 0 et x = 2" }
      ],
      exercises: [
        { question: "Soit f(x) = (x² - 1)/(x - 1). (a) Déterminez le domaine de définition. (b) Étudiez les asymptotes éventuelles. (c) Calculez les intersections avec les axes.", answer: "(a) Le domaine de définition est ℝ\\{1} car x ≠ 1.\n\n(b) On peut simplifier : f(x) = (x-1)(x+1)/(x-1) = x+1 pour x ≠ 1.\nIl n'y a pas d'asymptote verticale en x = 1, mais une discontinuité ponctuelle.\nPour x→±∞, f(x) ~ x, donc la droite d'équation y = x est asymptote oblique.\n\n(c) Intersection avec l'axe des abscisses : f(x) = 0 ⟺ x+1 = 0 ⟺ x = -1\nIntersection avec l'axe des ordonnées : f(0) = 0+1 = 1, donc le point (0, 1)." }
      ],
      gameType: "quiz"
    },
    {
      id: "techniques-trace",
      title: "Techniques de tracé",
      definition: "Pour tracer la courbe représentative d'une fonction, on utilise plusieurs techniques : tableau de variation, calcul des coordonnées de points particuliers, étude des tangentes, et utilisation des symétries. Pour les fonctions complexes, on peut utiliser la décomposition en fonctions plus simples ou l'approximation locale par des fonctions de référence.",
      example: "Pour tracer f(x) = x³, on peut calculer quelques points : (-1, -1), (0, 0), (1, 1), et utiliser le fait que f est impaire (symétrie par rapport à l'origine). Le tableau de variation montre que f est strictement croissante sur ℝ avec f'(x) = 3x².",
      gameQuestions: [
        { question: "Quelle propriété de la fonction f(x) = cos(x) permet de simplifier son tracé?", answer: "Sa périodicité de 2π et sa parité (fonction paire)" },
        { question: "Pour tracer rapidement la fonction g(x) = e^(-x²), quel est l'élément essentiel à calculer?", answer: "Le maximum en x = 0, où g(0) = 1" }
      ],
      exercises: [
        { question: "Tracez la courbe représentative de la fonction f(x) = x² - 4x + 3 en utilisant un tableau de variation et en déterminant les points caractéristiques.", answer: "Étude de f(x) = x² - 4x + 3 :\n\n1) Domaine de définition : ℝ\n\n2) Dérivée : f'(x) = 2x - 4\nf'(x) = 0 ⟺ x = 2\nf'(x) < 0 sur ]-∞, 2[\nf'(x) > 0 sur ]2, +∞[\n\n3) Tableau de variation :\nx        | -∞    2    +∞\nf'(x)    |     -  0  +\nf(x)     | \\    -1    /\n\n4) Points caractéristiques :\n- Intersection avec l'axe des abscisses : (1, 0) et (3, 0)\n- Intersection avec l'axe des ordonnées : (0, 3)\n- Sommet de la parabole : (2, -1)\n\nLa courbe est une parabole ouverte vers le haut, avec un minimum en (2, -1)." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-sciences",
      title: "Applications en sciences expérimentales",
      definition: "En sciences expérimentales, la représentation graphique est essentielle pour visualiser des relations entre variables, interpréter des données, modéliser des phénomènes physiques, biologiques ou chimiques, et prévoir des comportements. Des techniques comme la régression permettent d'ajuster une courbe théorique à des points expérimentaux.",
      example: "En physique, le graphique position-temps d'un objet en chute libre est une parabole. En chimie, la concentration d'un réactif en fonction du temps lors d'une réaction d'ordre 1 suit une décroissance exponentielle, représentée par C(t) = C₀e^(-kt).",
      gameQuestions: [
        { question: "En biologie, quelle fonction modélise généralement la croissance d'une population bactérienne en phase exponentielle?", answer: "P(t) = P₀e^(rt) où r est le taux de croissance" },
        { question: "Dans l'étude d'un circuit RC en physique, comment varie la tension aux bornes du condensateur lors de sa décharge?", answer: "Selon une fonction exponentielle décroissante : U(t) = U₀e^(-t/RC)" }
      ],
      exercises: [
        { question: "Un objet en chute libre a pour équation de mouvement h(t) = -4.9t² + 20t + 15, où h est la hauteur en mètres et t le temps en secondes. (a) Tracez la courbe représentant la hauteur en fonction du temps. (b) Déterminez le moment où l'objet atteint sa hauteur maximale. (c) À quel instant l'objet touche-t-il le sol?", answer: "(a) La courbe est une parabole ouverte vers le bas.\n\n(b) Pour trouver la hauteur maximale, on dérive : h'(t) = -9.8t + 20\nh'(t) = 0 ⟺ t = 20/9.8 ≈ 2.04 secondes\nLa hauteur maximale est h(2.04) = -4.9×(2.04)² + 20×2.04 + 15 ≈ 35.5 mètres.\n\n(c) L'objet touche le sol quand h(t) = 0 :\n-4.9t² + 20t + 15 = 0\nDiscriminant : Δ = 400 + 4×4.9×15 = 400 + 294 = 694\nt = (-20 ± √694)/(2×(-4.9)) = (20 ± 26.34)/9.8\nt₁ ≈ -0.65 (non physique) et t₂ ≈ 4.73 secondes\nL'objet touche le sol après environ 4.73 secondes." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 