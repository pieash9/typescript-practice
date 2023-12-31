import { useReducer } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { BookType, addBookAction } from "../interface/bookInterface";

type FormData = FieldValues & BookType;
const initialState: BookType[] = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    price: 12.99,
    description: "A comedy science fiction series created by Douglas Adams.",
    booksCategory: "Science Fiction",
  },
];

const bookReducer = (state: BookType[], action: addBookAction) => {
  switch (action.type) {
    case "addBook":
      return [...state, action.payload];
    default:
      return state;
  }
};

const AddBooks = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [booksData, dispatch] = useReducer(bookReducer, initialState);
  const onSubmit: SubmitHandler<FormData> = (data: BookType) => {
    dispatch({ type: "addBook", payload: data });
    reset();
  };
  return (
    <div>
      <h3 className="text-2xl font-medium text-center mt-10 mb-5">Add Book</h3>
      <div className="hero bg-base-200  w-full">
        <div className="hero-content flex-col w-full ">
          <div className="card flex-shrink-0  w-1/2 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Category</span>
                </label>
                <input
                  {...register("booksCategory")}
                  type="text"
                  placeholder="Book category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  {...register("description")}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {booksData.length > 0 &&
          booksData.map((book) => {
            const { booksCategory, price, description, title } = book;
            return (
              <div
                className="border border-gray-300 rounded p-4"
                key={book.title}
              >
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="">Category: {booksCategory}</p>
                <p className="">Price: ${price}</p>
                <p className="">Description: {description.slice(0, 25)}...</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddBooks;
