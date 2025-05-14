export default {
  id: "generalites-fonctions",
  title: "Généralités sur les fonctions",
  parts: [
    {
      id: "definition-domaines",
      title: "Définition et domaines de définition",
      definition: "Une fonction f associe à chaque élément x d'un ensemble de départ (domaine de définition) un unique élément y = f(x) de l'ensemble d'arrivée. Le domaine de définition est l'ensemble des valeurs pour lesquelles la fonction est définie. En économie, les fonctions modélisent diverses relations comme la demande, le coût, ou l'utilité.",
      example: "La fonction f(x) = 1/(x-2) a pour domaine Df = ℝ\\{2}, car la division par zéro n'est pas définie. En économie, une fonction de coût C(q) = 5q + 10 a pour domaine ℝ⁺, car on ne peut produire une quantité négative.",
      gameQuestions: [
        { question: "Quel est le domaine de définition de la fonction f(x) = √(x+3)?", answer: "[-3, +∞[" },
        { question: "Si p(q) représente le prix de vente unitaire en fonction de la quantité vendue, quel est généralement le domaine de définition de cette fonction?", answer: "[0, +∞[" }
      ],
      exercises: [
        { question: "L'entreprise MathÉco produit des calculatrices avec une fonction de coût total C(q) = 10 000 + 25q et une fonction de demande q = 5 000 - 50p, où p est le prix unitaire. Déterminez le domaine de définition de la fonction de profit P(q) = q·p(q) - C(q), où p(q) est la fonction de prix inverse de la demande. Interprétez économiquement ce domaine.", answer: "La fonction de demande est q = 5 000 - 50p, donc p(q) = (5 000 - q)/50 = 100 - q/50.\nLa fonction de profit est P(q) = q·(100 - q/50) - (10 000 + 25q) = 100q - q²/50 - 10 000 - 25q = 75q - q²/50 - 10 000.\nLe domaine de définition mathématique est ℝ, mais économiquement, il doit être restreint :\n- La quantité q doit être positive ou nulle : q ≥ 0\n- Le prix doit être positif ou nul : p(q) = 100 - q/50 ≥ 0, donc q ≤ 5 000\n\nLe domaine économiquement significatif est donc [0, 5 000]. Cela signifie que l'entreprise peut produire entre 0 et 5 000 calculatrices, au-delà de quoi le prix deviendrait négatif, ce qui n'a pas de sens économique." }
      ],
      gameType: "quiz"
    },
    {
      id: "image-antecedent",
      title: "Image et antécédent",
      definition: "Pour une fonction f de domaine D, l'image d'un élément x ∈ D est la valeur y = f(x). L'antécédent d'un élément y par f est tout élément x ∈ D tel que f(x) = y. L'ensemble des images de tous les éléments du domaine est appelé l'image de f, notée f(D). En économie, ces concepts permettent d'analyser par exemple le niveau de production nécessaire pour atteindre un profit donné.",
      example: "Si f(x) = x² sur ℝ, alors f(3) = 9 (l'image de 3), et les antécédents de 4 sont 2 et -2, car f(2) = f(-2) = 4. Dans un contexte économique, si C(q) = q² + 5q + 10 représente le coût de production, alors C(3) = 9 + 15 + 10 = 34 est le coût pour produire 3 unités. Si on cherche la quantité pour laquelle le coût est de 50, on résout C(q) = 50.",
      gameQuestions: [
        { question: "Si f(x) = 3x - 6, quelle est l'image de x = 5?", answer: "f(5) = 9" },
        { question: "Si une fonction de demande est q = 100 - 2p, quel est l'antécédent de q = 60?", answer: "p = 20" }
      ],
      exercises: [
        { question: "Un fabricant a une fonction de revenu R(q) = 100q - q² et une fonction de coût C(q) = 20q + 30. (a) Calculez le profit pour une production de 30 unités. (b) Déterminez les niveaux de production pour lesquels le profit est de 400.", answer: "(a) Le profit pour q = 30 est :\nP(30) = R(30) - C(30) = 100×30 - 30² - (20×30 + 30) = 3 000 - 900 - 600 - 30 = 1 470\n\n(b) Pour que P(q) = 400, on doit résoudre :\nR(q) - C(q) = 400\n100q - q² - 20q - 30 = 400\n80q - q² - 430 = 0\nq² - 80q + 430 = 0\n\nCalculons le discriminant : Δ = (-80)² - 4×1×430 = 6 400 - 1 720 = 4 680\nDonc q = (80 ± √4 680)/2 = (80 ± 68.41)/2 ≈ 74.2 ou 5.8\n\nLes niveaux de production qui donnent un profit de 400 sont environ q ≈ 5.8 et q ≈ 74.2 unités." }
      ],
      gameType: "quiz"
    },
    {
      id: "operations-fonctions",
      title: "Opérations sur les fonctions",
      definition: "Les opérations de base sur les fonctions incluent l'addition (f+g)(x) = f(x)+g(x), la soustraction (f-g)(x) = f(x)-g(x), la multiplication (f·g)(x) = f(x)·g(x), la division (f/g)(x) = f(x)/g(x) pour g(x) ≠ 0, et la composition (f∘g)(x) = f(g(x)). Ces opérations permettent de construire des modèles économiques complexes à partir de fonctions simples.",
      example: "Si f(x) = 2x+1 et g(x) = x², alors (f+g)(x) = 2x+1+x² et (f∘g)(x) = f(g(x)) = f(x²) = 2x²+1. En économie, si C(q) est une fonction de coût et R(q) une fonction de revenu, alors le profit est P(q) = R(q) - C(q), ce qui correspond à la soustraction de fonctions.",
      gameQuestions: [
        { question: "Si f(x) = 3x-4 et g(x) = x²+2, calculez (f∘g)(3).", answer: "(f∘g)(3) = f(g(3)) = f(9+2) = f(11) = 3×11-4 = 33-4 = 29" },
        { question: "En économie, comment s'exprime la fonction de profit marginal en termes des fonctions de revenu marginal et coût marginal?", answer: "Profit marginal = Revenu marginal - Coût marginal" }
      ],
      exercises: [
        { question: "Une entreprise fabrique deux types de produits. La fonction de coût pour le produit A est C_A(q) = q²+5q+10, et celle pour le produit B est C_B(q) = 2q²+3q+15. (a) Exprimez la fonction de coût total si l'entreprise produit q_A unités du produit A et q_B unités du produit B. (b) Si l'entreprise applique une contrainte telle que q_B = 2q_A, exprimez la fonction de coût total en fonction de q_A uniquement.", answer: "(a) La fonction de coût total est la somme des coûts individuels :\nC(q_A, q_B) = C_A(q_A) + C_B(q_B) = (q_A²+5q_A+10) + (2q_B²+3q_B+15) = q_A²+5q_A+2q_B²+3q_B+25\n\n(b) Si q_B = 2q_A, alors :\nC(q_A) = q_A²+5q_A+2(2q_A)²+3(2q_A)+25\n= q_A²+5q_A+8q_A²+6q_A+25\n= 9q_A²+11q_A+25\n\nCela représente la fonction de coût total exprimée uniquement en fonction de la quantité du produit A." }
      ],
      gameType: "quiz"
    },
    {
      id: "proprietes-fonctions",
      title: "Propriétés des fonctions",
      definition: "Les fonctions peuvent avoir diverses propriétés : parité (paire si f(-x) = f(x), impaire si f(-x) = -f(x)), périodicité (si f(x+T) = f(x) pour un T > 0), croissance (f croissante si x < y implique f(x) ≤ f(y)), et monotonie. En économie, ces propriétés permettent de comprendre le comportement des variables économiques avec plus de nuances.",
      example: "La fonction f(x) = x² est paire car f(-x) = (-x)² = x² = f(x). Une fonction de coût fixe C(q) = k est constante, tandis qu'une fonction de coût marginal croissante indique des rendements d'échelle décroissants.",
      gameQuestions: [
        { question: "La fonction f(x) = 2x³ + x est-elle paire, impaire ou ni l'une ni l'autre?", answer: "Impaire" },
        { question: "Si une fonction de demande p(q) est strictement décroissante, qu'est-ce que cela signifie économiquement?", answer: "Plus le prix augmente, plus la quantité demandée diminue (loi de la demande)" }
      ],
      exercises: [
        { question: "La fonction d'utilité d'un consommateur pour deux biens est donnée par U(x, y) = x⁰.⁵ y⁰.⁵, où x et y sont les quantités consommées. (a) Cette fonction est-elle croissante par rapport à chacune des variables? (b) Si le consommateur double sa consommation des deux biens, quel est l'effet sur son utilité? Quelle propriété économique cela illustre-t-il?", answer: "(a) Les dérivées partielles sont : \n∂U/∂x = 0.5x⁻⁰.⁵y⁰.⁵ = 0.5y⁰.⁵/x⁰.⁵ > 0 pour x, y > 0\n∂U/∂y = 0.5x⁰.⁵y⁻⁰.⁵ = 0.5x⁰.⁵/y⁰.⁵ > 0 pour x, y > 0\nDonc la fonction est strictement croissante par rapport à chaque variable, ce qui signifie que l'utilité augmente quand la consommation de l'un ou l'autre bien augmente.\n\n(b) Si x et y sont doublés : U(2x, 2y) = (2x)⁰.⁵(2y)⁰.⁵ = 2⁰.⁵x⁰.⁵ × 2⁰.⁵y⁰.⁵ = 2¹x⁰.⁵y⁰.⁵ = 2U(x,y).\nL'utilité est donc doublée. Cette propriété illustre les rendements d'échelle constants : doubler tous les inputs double l'output, ce qui est caractéristique des fonctions homogènes de degré 1." }
      ],
      gameType: "tictactoe"
    }
  ]
}; 