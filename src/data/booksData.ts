import { BookType } from "../interface/bookInterface";

const booksData: BookType[] = [
  {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    price: 12.99,
    description: "A comedy science fiction series created by Douglas Adams.",
    image: "/book1.jpeg",
    booksCategory: "Science Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    price: 10.99,
    description: "A Pulitzer Prize-winning novel by Harper Lee.",
    image: "/book2.jpg",
    booksCategory: "Classics",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    price: 19.99,
    description: "A fantasy novel written by J. R. R. Tolkien.",
    image: "/book3.jpg",
    booksCategory: "Fantasy",
  },
  {
    id: 4,
    title: "The Hunger Games",
    price: 11.99,
    description: "A dystopian novel by Suzanne Collins.",
    image: "/book4.jpg",
    booksCategory: "Dystopian",
  },
  {
    id: 5,
    title: "The Alchemist",
    price: 9.99,
    description: "A novel by Paulo Coelho.",
    image: "/book5.jpg",
    booksCategory: "Self-Help",
  },
  {
    id: 6,
    title: "The Girl with the Dragon Tattoo",
    price: 14.99,
    description: "A crime novel by Stieg Larsson.",
    image: "/book6.jpg",
    booksCategory: "Thriller",
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    price: 10.99,
    description: "A coming-of-age novel by J. D. Salinger.",
    image: "/book7.jpg",
    booksCategory: "Classics",
  },
];

export default booksData;
