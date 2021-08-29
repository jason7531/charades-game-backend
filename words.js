let word;

const addWord = (gotWord) => {
  word = "";
  word = gotWord;
};

const getWord = () => {
  return word;
};

module.exports = {
  addWord,
  getWord,
};
