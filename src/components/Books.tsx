import booksData from "../data/booksData";
import BookCard from "./BookCard";

const Books = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {booksData.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
