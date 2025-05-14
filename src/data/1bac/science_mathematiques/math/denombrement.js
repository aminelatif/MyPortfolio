export default {
  id: "denombrement",
  title: "Dénombrement",
  parts: [
    {
      id: "principes-base",
      title: "Principes fondamentaux",
      definition: "Le dénombrement s'appuie sur deux principes fondamentaux : le principe multiplicatif (si une action peut être décomposée en k actions successives avec n₁, n₂, ..., nₖ façons d'effectuer chacune, alors il y a n₁×n₂×...×nₖ façons d'effectuer l'action complète) et le principe additif (si une action peut être réalisée de n façons ou de m façons, et que ces façons sont disjointes, alors il y a n+m façons au total).",
      example: "Si on veut s'habiller en choisissant parmi 5 chemises et 3 pantalons, on peut créer 5×3 = 15 tenues différentes (principe multiplicatif).",
      gameQuestions: [
        { question: "Un restaurant propose 4 entrées, 6 plats et 3 desserts. Combien de menus différents (entrée + plat + dessert) peut-on composer ?", answer: "4×6×3 = 72 menus" }
      ],
      exercises: [
        { question: "Une urne contient 10 boules numérotées de 1 à 10. On tire successivement 3 boules sans remise. Combien de tirages différents peut-on obtenir ?", answer: "10×9×8 = 720 tirages" }
      ],
      gameType: "quiz"
    },
    {
      id: "arrangements-permutations",
      title: "Arrangements et permutations",
      definition: "Un arrangement de p éléments parmi n (p≤n) est une liste ordonnée de p éléments choisis parmi n. Le nombre d'arrangements est A(n,p) = n!/(n-p)!. Une permutation de n éléments est un arrangement particulier où p=n, soit P(n) = n!.",
      example: "Les arrangements de 2 lettres parmi {a,b,c} sont : ab, ac, ba, bc, ca, cb. Il y en a A(3,2) = 3!/(3-2)! = 6.",
      gameQuestions: [
        { question: "Combien de codes à 3 chiffres différents peut-on former avec les chiffres de 0 à 9 ?", answer: "A(10,3) = 10×9×8 = 720" }
      ],
      exercises: [
        { question: "De combien de façons peut-on ranger 5 livres différents sur une étagère ?", answer: "P(5) = 5! = 120" }
      ],
      gameType: "quiz"
    },
    {
      id: "combinaisons",
      title: "Combinaisons",
      definition: "Une combinaison de p éléments parmi n est un sous-ensemble de p éléments choisis parmi n, sans tenir compte de l'ordre. Le nombre de combinaisons est C(n,p) = n!/(p!(n-p)!).",
      example: "Les combinaisons de 2 lettres parmi {a,b,c} sont : {a,b}, {a,c}, {b,c}. Il y en a C(3,2) = 3!/(2!(3-2)!) = 3.",
      gameQuestions: [
        { question: "Dans une classe de 30 élèves, combien d'équipes de 5 élèves peut-on former ?", answer: "C(30,5) = 30!/(5!×25!) = 142 506" }
      ],
      exercises: [
        { question: "Combien de façons de choisir 3 cartes parmi un jeu de 32 cartes ?", answer: "C(32,3) = 32!/(3!×29!) = 4 960" }
      ],
      gameType: "tictactoe"
    }
  ]
}; 