/* eslint-disable @typescript-eslint/no-unused-vars */
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/types";

export default function AllBooks() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div className="container mx-auto px-2">
      <div>
        <h2 className="text-5xl font-bold pt-10 pb-20 text-center">
          All Books
        </h2>
      </div>
      <div className="col-span-9 grid sm:grid-cols-1 md:grid-cols-4  gap-10 pb-20">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
