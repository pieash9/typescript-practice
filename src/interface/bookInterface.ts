export type BookType = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  booksCategory: string;
};

export interface addBookAction {
  type: "addBook";
  payload: BookType;
}
