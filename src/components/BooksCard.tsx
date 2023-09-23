/* eslint-disable @typescript-eslint/no-unused-vars */
import BookCard from "./BookCard";
import { IBook } from "../types/types";
import { useGetLatestBooksQuery } from "../redux/features/books/booksApi";

export default function BooksCard() {
  const { data, isLoading, error } = useGetLatestBooksQuery(undefined);

  return (
    <div className="container mx-auto px-2">
      <div>
        <h2 className="text-3xl font-bold py-10">Latest Books</h2>
      </div>
      <div className="col-span-9 grid sm:grid-cols-1 md:grid-cols-4  gap-10 pb-20">
        {data?.data?.map((book: IBook, index: number) => (
          <BookCard book={book} key={index} />
        ))}
      </div>
    </div>
  );
}
