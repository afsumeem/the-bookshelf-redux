/* eslint-disable @typescript-eslint/no-unused-vars */
import BookCard from "./BookCard";
import { IBook } from "../types/types";
import { useGetLatestBooksQuery } from "../redux/features/books/booksApi";

export default function BooksCard() {
  const { data, isLoading, error } = useGetLatestBooksQuery(undefined);
  console.log(error);
  return (
    <div className="container mx-auto px-2">
      <div>
        <h2 className="text-3xl font-bold py-10">Latest Books</h2>
      </div>
      <div className="w-full">
        {data?.data?.length === 0 ? (
          <h2 className="text-center text-2xl">Data not found</h2>
        ) : (
          <>
            {isLoading ? (
              <h3 className="text-3xl font-[500] text-center">
                <span className="loading loading-ring loading-lg"></span>
              </h3>
            ) : (
              <div className="col-span-9 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 ">
                {data?.data?.map((book: IBook, index: number) => (
                  <BookCard book={book} key={index} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
