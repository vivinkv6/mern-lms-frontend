import category1 from "/category1.jpg";
import category2 from "/category2.jpg";
import category3 from "/category3.jpg";
import category4 from "/category4.jpg";
import category5 from "/category5.jpg";
import category6 from "/category6.jpg";
import category7 from "/category7.jpg";

export const categoryList: {
  id: number;
  name: string;
  url: string;
  duration: number;
}[] = [
  {
    id: 1,
    name: "Horror",
    url: category7,
    duration: 0.1,
  },
  {
    id: 2,
    name: "Science",
    url: category1,
    duration: 0.2,
  },
  {
    id: 3,
    name: "Drama",
    url: category6,
    duration: 0.3,
  },
  {
    id: 4,
    name: "Noval",
    url: category3,
    duration: 0.4,
  },
  {
    id: 5,
    name: "History",
    url: category4,
    duration: 0.5,
  },
  {
    id: 6,
    name: "Detective",
    url: category2,
    duration: 0.6,
  },
  {
    id: 7,
    name: "Adventure",
    url: category5,
    duration: 0.7,
  },
];
