/*
El objetivo del juego es adivinar si la siguiente carta en el mazo es mayor o menor que la carta actual. 
Se utiliza un mazo de cartas francesas que consta de 52 cartas.

Las cartas están divididas en 4 palos: :spades: (picas), :clubs: (tréboles), :diamonds: (diamantes) y 
:hearts: (corazones).

Cada palo tiene 13 cartas con los siguientes valores: 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jota), Q (reina),
 K (rey) y A (as).

Para este challenge tendrás que programar las siguientes funcionalidades o _features_:

- Generación de cartas: Crea una función que cree la baraja. Las cartas se generan combinando
 los valores y palos disponibles en el mazo de cartas francesas.

- Obtención de una carta aleatoria: Implementa una función para obtener una carta aleatoria del array de
 cartas generado previamente. La carta no tiene que eliminarse del mazo.

- Partida: Implementa una función que reúna todos los pasos de la partida, que por ahora sólo son dos:
  - Crear la baraja
  - Obtener una carta aleatoria e imprimirla por consola

Nota: ninguna de las funciones debe usar una variable externa a ella misma (salvo para invocar a 
  otras funciones). */

//FUnción crear baraja

let deckOfCards = [];

const generateDeckOfCards = () => {
  for (suitIndex = 1; suitIndex <= 4; suitIndex++) {
    for (numberIndex = 1; numberIndex <= 13; numberIndex++) {
      deckOfCards.push({ suit: suitIndex, number: numberIndex, stat: false });
    }
  }
  deckOfCards = deckOfCards.map((card) => {
    switch (card.suit) {
      case 1:
        suit = "spades";
        break;
      case 2:
        suit = "clubs";
        break;
      case 3:
        suit = "diamonds";
        break;
      case 4:
        suit = "hearts";
        break;
      default:
        break;
    }
    return {
      suit: suit,
      number: card.number,
      stat: card.stat,
    };
  });
};
generateDeckOfCards();

const getAleatoryCard = (cards) => {
  const aleatoryIndexCard = Math.floor(Math.random() * cards.length);
  const cardName = `The aleatory card is: ${cards[aleatoryIndexCard]}`;

  return cards[aleatoryIndexCard];
};
console.log(getAleatoryCard(deckOfCards));
