import booksData from "../data/booksData";
import Card from "./Card";

export type BookType = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  books_category: string;
};
const Books = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {/* {booksData.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            image={book.image}
            price={book.price}
            description={book.description}
            books_category={book.books_category}
          />
        ))} */}
        {booksData.map((book) => (
          <Card key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
