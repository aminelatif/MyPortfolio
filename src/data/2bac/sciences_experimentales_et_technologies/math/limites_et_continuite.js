// Leçon : Limites et continuité (Sciences Expérimentales)
export default {
  id: "limites_et_continuite",
  title: "Limites et continuité",
  parts: [
    {
      id: "definition-limite",
      title: "Définition de la limite",
      definition: "La limite d'une fonction $f$ en un point $a$ est la valeur vers laquelle tend $f(x)$ lorsque $x$ s'approche de $a$. On note : $$\\lim_{x \\to a} f(x) = L$$",
      example: "Pour $f(x) = x^2$, on a $$\\lim_{x \\to 2} f(x) = 4$$",
      gameQuestions: [
        { question: "Quelle est la limite de $f(x) = 2x + 1$ en $x = 3$ ?", answer: "$$\\lim_{x \\to 3} (2x + 1) = 7$$" }
      ],
      exercises: [
        { question: "Calculez $$\\lim_{x \\to 2} (x^2 - 1)$$", answer: "$$\\lim_{x \\to 2} (x^2 - 1) = 3$$" }
      ],
      gameType: "quiz"
    },
    {
      id: "definition-continuite",
      title: "Définition de la continuité",
      definition: "Une fonction $f$ est continue en un point $a$ si $$\\lim_{x \\to a} f(x) = f(a)$$",
      example: "La fonction $f(x) = x^2$ est continue en tout point de son domaine car $$\\lim_{x \\to a} x^2 = a^2 = f(a)$$",
      gameQuestions: [
        { question: "La fonction $f(x) = \\frac{1}{x}$ est-elle continue en $x = 0$ ?", answer: "Non, car $$\\lim_{x \\to 0} \\frac{1}{x}$$ n'existe pas" }
      ],
      exercises: [
        { question: "Étudiez la continuité de la fonction $f(x) = |x|$ en $x = 0$", answer: "La fonction est continue en $x = 0$ car $$\\lim_{x \\to 0} |x| = 0 = f(0)$$" }
      ],
      gameType: "quiz"
    }
  ]
}; 