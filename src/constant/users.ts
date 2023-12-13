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
    link: "reader/login",
    duration: 1,
    position: -50,
  },
  {
    id: 2,
    name: "Admin",
    url: admin,
    link: "admin/login",
    duration: 1.5,
    position: -80,
  },
  {
    id: 3,
    name: "Librarian",
    url: librarian,
    link: "librarian/login",
    duration: 2,
    position: -90,
  },
];
