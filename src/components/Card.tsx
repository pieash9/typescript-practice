import { BookType } from "./Books";

const Card = ({
  image,
  description,
  books_category,
  price,
  title,
}: BookType) => {
  return (
    <div className="space-y-1 md:p-4 p-3 shadow-xl hover:shadow-2xl duration-200 relative h-[26rem]">
      <img className="h-56 w-full rounded" src={image} alt="" />
      <p className="font-bold text-lg">{title}</p>
      <p className="">{books_category}</p>
      <p className="">${price}</p>
      <p className="">{description.slice(0, 25)}...</p>
      <button
        type="button"
        className=" px-4 py-1.5 font-semibold rounded-md bg-violet-400 text-gray-900 absolute bottom-4 left-4 right-4"
      >
        Read more
      </button>
    </div>
  );
};

export default Card;
