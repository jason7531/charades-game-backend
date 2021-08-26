const mongoose = require("mongoose");

const Card = require("./models/card");
const Word = require("./models/word");
const data = [
  {
    description: "Object Thing Package",
    imageurl: "https://i.ibb.co/MZxd3v2/card1.jpg",
  },
  {
    description: "Person Family Group",
    imageurl: "https://i.ibb.co/Fw7csLx/card2.jpg",
  },
  {
    description: "Female/Woman Wife Feminine",
    imageurl: "https://i.ibb.co/Fw7csLx/card3.jpg",
  },
  {
    description: "Male/Man Husband Masculine",
    imageurl: "https://i.ibb.co/Fw7csLx/card4.jpg",
  },
  {
    description: "Work Profession Craft",
    imageurl: "https://i.ibb.co/Fw7csLx/card5.jpg",
  },
  {
    description: "Recreation Sport Activity",
    imageurl: "https://i.ibb.co/Fw7csLx/card6.jpg",
  },
  {
    description: "Wildlife Animal",
    imageurl: "https://i.ibb.co/Fw7csLx/card7.jpg",
  },
  {
    description: "Flora Nature Plant",
    imageurl: "https://i.ibb.co/Fw7csLx/card8.jpg",
  },
  {
    description: "Literature Writing Book",
    imageurl: "https://i.ibb.co/Fw7csLx/card9.jpg",
  },
  {
    description: "Music Song Note",
    imageurl: "https://i.ibb.co/Fw7csLx/card10.jpg",
  },
  {
    description: "Theatre Film Camera",
    imageurl: "https://i.ibb.co/Fw7csLx/card11.jpg",
  },
  {
    description: "Arts Sculpture/Painting Drawing/Comics",
    imageurl: "https://i.ibb.co/Fw7csLx/card12.jpg",
  },
  {
    description: "Telivision Broadcast Series",
    imageurl: "https://i.ibb.co/Fw7csLx/card13.jpg",
  },
  {
    description: "Title Brand Name",
    imageurl: "https://i.ibb.co/Fw7csLx/card14.jpg",
  },
  {
    description: "Idea Thought Concept",
    imageurl: "https://i.ibb.co/Fw7csLx/card15.jpg",
  },
  {
    description: "Expression/Quote Speak Word",
    imageurl: "https://i.ibb.co/Fw7csLx/card16.jpg",
  },
  {
    description: "Location Country Flag",
    imageurl: "https://i.ibb.co/Fw7csLx/card17.jpg",
  },
  {
    description: "Holidays Birthday Celebration",
    imageurl: "https://i.ibb.co/Fw7csLx/card18.jpg",
  },
  {
    description: "Building Construction City",
    imageurl: "https://i.ibb.co/Fw7csLx/card19.jpg",
  },
  {
    description: "Date Event Daytime",
    imageurl: "https://i.ibb.co/Fw7csLx/card20.jpg",
  },
];

const words = [
  {
    text: "Silver Lining Playbook",
  },
  {
    text: "Memento",
  },
  {
    text: "Donnie Darko",
  },
  {
    text: "The Prestige",
  },
  {
    text: "Shutter Island",
  },
  {
    text: "The Great Gatsby",
  },
  {
    text: "Gone Girl",
  },
  {
    text: "The Reader",
  },
  {
    text: "Leonardo Di Caprio",
  },
  {
    text: "A Beautiful Mind",
  },
  {
    text: "The Man Who Knew Infinity",
  },
  {
    text: "One Direction",
  },
  {
    text: "Zodiac",
  },
  {
    text: "Se7en",
  },
  {
    text: "James Bond",
  },
  {
    text: "Jason Bourne",
  },
  {
    text: "IT",
  },
  {
    text: "Inception",
  },
  {
    text: "Forrest Gump",
  },
  {
    text: "Good Will Hunting",
  },
];

const seedDB = () => {
  data.forEach((seed) => {
    Card.create(seed, (err, card) => {
      if (err) {
        console.log(err);
      } else {
        console.log(card);
      }
    });
  });
  words.forEach((seed) => {
    Word.create(seed, (err, word) => {
      if (err) {
        console.log(err);
      } else {
        console.log(word);
      }
    });
  });
};

module.exports = seedDB;
