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
    imageurl: "https://i.ibb.co/1q7Qvdz/card3.jpg",
  },
  {
    description: "Male/Man Husband Masculine",
    imageurl: "https://i.ibb.co/ZLCxcxD/card4.jpg",
  },
  {
    description: "Work Profession Craft",
    imageurl: "https://i.ibb.co/WtV3Kzg/card5.jpg",
  },
  {
    description: "Recreation Sport Activity",
    imageurl: "https://i.ibb.co/xCw1JWS/card6.jpg",
  },
  {
    description: "Wildlife Animal",
    imageurl: "https://i.ibb.co/Ph6fChd/card7.jpg",
  },
  {
    description: "Flora Nature Plant",
    imageurl: "https://i.ibb.co/gmXTgTn/card8.jpg",
  },
  {
    description: "Literature Writing Book",
    imageurl: "https://i.ibb.co/Xj0c08k/card9.jpg",
  },
  {
    description: "Music Song Note",
    imageurl: "https://i.ibb.co/10yvTHp/card10.jpg",
  },
  {
    description: "Theatre Film Camera",
    imageurl: "https://i.ibb.co/D7C8dpM/card11.jpg",
  },
  {
    description: "Arts Sculpture/Painting Drawing/Comics",
    imageurl: "https://i.ibb.co/9GtRtYf/card12.jpg",
  },
  {
    description: "Telivision Broadcast Series",
    imageurl: "https://i.ibb.co/3Rth0QM/card13.jpg",
  },
  {
    description: "Title Brand Name",
    imageurl: "https://i.ibb.co/sgXHJ7M/card14.jpg",
  },
  {
    description: "Idea Thought Concept",
    imageurl: "https://i.ibb.co/VLvRTNX/card15.jpg",
  },
  {
    description: "Expression/Quote Speak Word",
    imageurl: "https://i.ibb.co/k9nGQ5T/card16.jpg",
  },
  {
    description: "Location Country Flag",
    imageurl: "https://i.ibb.co/MgY97vQ/card17.jpg",
  },
  {
    description: "Holidays Birthday Celebration",
    imageurl: "https://i.ibb.co/CW0D4zT/card18.jpg",
  },
  {
    description: "Building Construction City",
    imageurl: "https://i.ibb.co/XXZQRkQ/card19.jpg",
  },
  {
    description: "Date Event Daytime",
    imageurl: "https://i.ibb.co/Y7MGTX9/card20.jpg",
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
  // words.forEach((seed) => {
  //   Word.create(seed, (err, word) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(word);
  //     }
  //   });
  // });
};

module.exports = seedDB;
