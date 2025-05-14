export default {
  id: "logarithme-decimal",
  title: "Logarithme décimal",
  parts: [
    {
      id: "definition-proprietes",
      title: "Définition et propriétés",
      definition: "Le logarithme décimal d'un nombre positif x, noté log(x), est l'exposant auquel il faut élever 10 pour obtenir x. Autrement dit, log(x) = y signifie que 10^y = x. Le logarithme décimal n'est défini que pour les nombres strictement positifs. Les logarithmes sont utilisés en économie pour transformer des relations multiplicatives en relations additives, simplifier des calculs avec de grands nombres, et modéliser des phénomènes de croissance.",
      example: "log(100) = 2 car 10² = 100. log(0,01) = -2 car 10⁻² = 0,01. En économie, les échelles logarithmiques sont utilisées pour représenter des données couvrant plusieurs ordres de grandeur, comme la croissance du PIB sur de longues périodes.",
      gameQuestions: [
        { question: "Quel est le logarithme décimal de 1000?", answer: "log(1000) = 3" },
        { question: "Si log(x) = -1, quelle est la valeur de x?", answer: "x = 0,1" }
      ],
      exercises: [
        { question: "Une entreprise a vu son chiffre d'affaires multiplié par 2,5 entre 2010 et 2020. Exprimez cette croissance en utilisant le logarithme décimal. Si cette tendance se poursuit, en quelle année le chiffre d'affaires aura-t-il été multiplié par 10 par rapport à 2010?", answer: "Soit x le facteur multiplicatif. On a x = 2,5. On peut exprimer cette croissance en logarithme : log(x) = log(2,5) ≈ 0,398.\nSi cette tendance se poursuit, le facteur de croissance après t années sera de x^(t/10) = 2,5^(t/10).\nPour un facteur multiplicatif de 10, on cherche t tel que 2,5^(t/10) = 10.\nPrenons le logarithme des deux côtés : (t/10)×log(2,5) = log(10) = 1\nDonc t = 10/log(2,5) ≈ 10/0,398 ≈ 25,1 années.\nLe chiffre d'affaires sera multiplié par 10 environ 25 ans après 2010, soit en 2035." }
      ],
      gameType: "quiz"
    },
    {
      id: "regles-calcul",
      title: "Règles de calcul logarithmique",
      definition: "Les logarithmes transforment les produits en sommes, les quotients en différences, et les puissances en produits : log(a×b) = log(a) + log(b), log(a/b) = log(a) - log(b), et log(a^n) = n×log(a). Ces propriétés sont fondamentales pour simplifier les calculs complexes et sont utilisées en économie pour linéariser des modèles exponentiels.",
      example: "log(30) = log(3×10) = log(3) + log(10) = log(3) + 1 ≈ 0,477 + 1 = 1,477. En économie, le taux de croissance composé sur plusieurs périodes peut être calculé en additionnant les logarithmes des facteurs de croissance de chaque période : log(1+r₁) + log(1+r₂) = log((1+r₁)×(1+r₂)).",
      gameQuestions: [
        { question: "Calculez log(500) en utilisant les propriétés des logarithmes", answer: "log(500) = log(5×100) = log(5) + log(100) = log(5) + 2 ≈ 0,699 + 2 = 2,699" },
        { question: "Simplifiez l'expression log(a²b/c³)", answer: "log(a²b/c³) = log(a²) + log(b) - log(c³) = 2log(a) + log(b) - 3log(c)" }
      ],
      exercises: [
        { question: "Le PIB d'un pays a connu des taux de croissance annuels de 3%, 2,5%, -1,5% et 4% sur quatre années consécutives. Utilisez les propriétés des logarithmes pour calculer le taux de croissance moyen sur cette période.", answer: "Soit P₀ le PIB initial. Après 4 ans, le PIB vaut :\nP₄ = P₀×(1+0,03)×(1+0,025)×(1-0,015)×(1+0,04)\nPrenons le logarithme : log(P₄/P₀) = log(1,03) + log(1,025) + log(0,985) + log(1,04)\nlog(P₄/P₀) ≈ 0,0128 + 0,0107 - 0,0066 + 0,0170 ≈ 0,0339\nDonc P₄/P₀ ≈ 10^0,0339 ≈ 1,081, ce qui correspond à une croissance totale d'environ 8,1% sur 4 ans.\nLe taux de croissance moyen annuel r vérifie (1+r)^4 = 1,081\nDonc 1+r = (1,081)^(1/4) ≈ 1,0197\nLe taux de croissance moyen est donc d'environ 1,97% par an." }
      ],
      gameType: "tictactoe"
    },
    {
      id: "equation-logarithmique",
      title: "Équations logarithmiques",
      definition: "Une équation logarithmique est une équation où l'inconnue apparaît dans un logarithme. Pour résoudre ces équations, on utilise les propriétés des logarithmes et le fait que la fonction logarithme est bijective : si log(x) = log(y), alors x = y. Il faut toujours vérifier que les solutions obtenues sont dans le domaine de définition des logarithmes (nombres strictement positifs).",
      example: "Pour résoudre l'équation log(2x+3) = 1, on convertit d'abord en exponentielle : 10^(log(2x+3)) = 10^1, donc 2x+3 = 10, ce qui donne x = 3,5. Dans un contexte économique, une équation logarithmique peut modéliser le temps nécessaire pour qu'un investissement atteigne une certaine valeur avec un taux de croissance composé.",
      gameQuestions: [
        { question: "Résolvez l'équation log(x) + log(x+3) = 1", answer: "log(x(x+3)) = 1, donc x(x+3) = 10, x² + 3x = 10, x² + 3x - 10 = 0, d'où x = 2 (car x > 0)" },
        { question: "Résolvez log(x+1) - log(x-1) = 1", answer: "log((x+1)/(x-1)) = 1, donc (x+1)/(x-1) = 10, x+1 = 10(x-1), x+1 = 10x-10, 11 = 9x, x = 11/9" }
      ],
      exercises: [
        { question: "Un investissement croît selon la formule A(t) = P(1+r)^t, où P est le principal, r est le taux d'intérêt annuel, et t est le temps en années. (a) Exprimez le temps nécessaire pour doubler l'investissement en fonction de r en utilisant les logarithmes. (b) Si r = 7%, combien d'années faudra-t-il pour doubler l'investissement?", answer: "(a) Pour un doublement, on a A(t) = 2P, donc :\n2P = P(1+r)^t\n2 = (1+r)^t\nPrenons le logarithme des deux côtés :\nlog(2) = t×log(1+r)\nDonc t = log(2)/log(1+r)\n\n(b) Avec r = 7% = 0,07 :\nt = log(2)/log(1,07) ≈ 0,301/0,029 ≈ 10,38 années\nIl faudra environ 10,4 ans pour doubler l'investissement avec un taux d'intérêt annuel de 7%." }
      ],
      gameType: "quiz"
    },
    {
      id: "applications-economie",
      title: "Applications en économie et finance",
      definition: "Le logarithme décimal est largement utilisé en économie pour l'analyse des séries temporelles, la comparaison de croissances exponentielles, l'étude des échelles de revenus, et la modélisation financière. La règle des 70 (ou 72) est une application pratique qui permet d'estimer rapidement le temps nécessaire pour doubler un capital : temps ≈ 70/taux (en pourcentage).",
      example: "Si un pays a un taux de croissance annuel du PIB de 3,5%, le temps nécessaire pour doubler son PIB est approximativement 70/3,5 ≈ 20 ans. Cette estimation rapide est basée sur l'approximation log(2) ≈ 0,3 et utilise le fait que si (1+r)^t = 2, alors t ≈ 0,7/r quand r est petit (exprimé en valeur décimale).",
      gameQuestions: [
        { question: "Un investissement augmente de 5% par an. En utilisant la règle des 70, estimez le temps nécessaire pour qu'il double de valeur.", answer: "70/5 = 14 ans" },
        { question: "En économie, pourquoi utilise-t-on souvent des échelles logarithmiques pour représenter le PIB sur de longues périodes?", answer: "Pour visualiser les taux de croissance plutôt que les valeurs absolues et faciliter la comparaison sur plusieurs ordres de grandeur" }
      ],
      exercises: [
        { question: "La courbe de Phillips suggère une relation inverse entre l'inflation et le chômage. Un économiste modélise cette relation pour un pays par la formule log(U) + log(I) = log(k), où U est le taux de chômage, I est le taux d'inflation, et k est une constante. (a) Simplifiez cette équation. (b) Si k = 12 et le taux d'inflation est de 3%, quel est le taux de chômage selon ce modèle? (c) Comment évolue le taux de chômage si l'inflation double?", answer: "(a) En utilisant les propriétés des logarithmes :\nlog(U) + log(I) = log(k)\nlog(U×I) = log(k)\nDonc U×I = k\n\n(b) Si k = 12 et I = 3%, alors :\nU×0,03 = 12\nU = 12/0,03 = 400\nCe qui donnerait un taux de chômage de 400%, ce qui n'est pas réaliste. Le modèle a probablement des limites ou k n'est pas exprimé dans les bonnes unités.\n\n(c) Si l'inflation double (de I à 2I), alors :\nU×2I = k\n2U×I = k\nComme U×I = k, on a 2U×I = 2×k, ce qui n'est pas égal à k.\nPour maintenir l'égalité U×I = k, si I double, alors U doit être divisé par 2. Donc le taux de chômage serait divisé par 2 si l'inflation double, selon ce modèle." }
      ],
      gameType: "quiz"
    }
  ]
}; 