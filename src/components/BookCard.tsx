import { BookType } from "../interface/bookInterface";

const BookCard = ({
  image,
  description,
  booksCategory,
  price,
  title,
}: BookType) => {
  return (
    <div className="space-y-1 md:p-4 p-3 shadow-xl hover:shadow-2xl duration-200 relative h-[30rem]">
      <img className="h-56 w-full rounded" src={image} alt="" />
      <p className="font-bold text-lg">{title}</p>
      <p className="">Category: {booksCategory}</p>
      <p className="">Price: ${price}</p>
      <p className="">Description: {description.slice(0, 25)}...</p>
      <button
        type="button"
        className=" px-4 py-1.5 font-semibold rounded-md bg-violet-400 text-gray-900 absolute bottom-4 left-4 right-4"
      >
        Read more
      </button>
    </div>
  );
};

export default BookCard;
