import reader from "/reader.png";
import librarian from "/librarian.png";
import admin from "/admin.png";

export const usersList: {
  id: number;
  name: string;
  url: string;
  link: string;
  duration: number;
  position: number;
}[] = [
  {
    id: 1,
    name: "Reader",
    url: reader,
    link: "/reader",
    duration: 1,
    position: -50,
  },
  {
    id: 2,
    name: "Admin",
    url: admin,
    link: "/admin",
    duration: 1.5,
    position: -80,
  },
  {
    id: 3,
    name: "Librarian",
    url: librarian,
    link: "/librarian",
    duration: 2,
    position: -90,
  },
];
