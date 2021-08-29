let cards = [];

const addCard = (gotCards) => {
  cards = [];

  if (gotCards) {
    gotCards.forEach((c) => {
      cards.push(c);
    });
  } else {
    return;
  }
};

const getCards = () => {
  return cards;
};

module.exports = {
  addCard,
  getCards,
};
