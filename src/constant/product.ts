import book1 from "/book1.jpg";
import book2 from "/book2.jpg";
import book3 from "/book3.jpg";
import book4 from "/book4.jpg";
import book5 from "/book5.jpg";
import book6 from "/book6.jpg";
import book7 from "/book7.jpg";
import book8 from "/book8.jpg";
import book9 from "/book9.jpg";
import book10 from "/book10.jpg";

export const bookList: {
  id: number,
  name: string,
  author: string,
  url: string,
  duration:number,
}[] = [
  {
    id: 1,
    name: "Soul",
    author: "Olivia Wilson",
    url: book1,
    duration:0.1
  },
  {
    id: 2,
    name: "Made",
    author: "Olivia Wilson",
    url: book2,
    duration:0.2
  },
  {
    id: 3,
    name: "Sword",
    author: "Olivia Wilson",
    url: book3,
    duration:0.3
  },
  {
    id: 4,
    name: "Soldier",
    author: "Olivia Wilson",
    url: book4,
    duration:0.4
  },
  {
    id: 5,
    name: "Conquest of Flames",
    author: "Shawn Garcia",
    url: book5,
    duration:0.5
  },
  {
    id: 6,
    name: "Forest of Secret",
    author: "Cia Rodriguez",
    url: book6,
    duration:0.6
  },
  {
    id: 7,
    name: "The Red House",
    author: "Itsuki Takahashi",
    url: book7,
    duration:0.7
  },
  {
    id: 8,
    name: "The Dark Side",
    author: "Morgan Maxwell",
    url: book8,
    duration:0.8
  },
  {
    id: 9,
    name: "Walk Into The Shadow",
    author: "Estelle Darcy",
    url: book9,
    duration:0.9
  },
  {
    id: 10,
    name: "The Dark Side of Winter",
    author: "Morgan Maxwell",
    url: book10,
    duration:1
  },
];
