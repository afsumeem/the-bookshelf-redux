/* eslint-disable @typescript-eslint/no-unused-vars */
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/types";

export default function AllBooks() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div>
      <h2 className="text-5xl font-bold py-10 text-center">All Books</h2>
      <div className="bg-blue-950 h-24 flex items-center justify-center w-full">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search here"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Genre
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Publication Year
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            <button className="btn rounded rounded-r-lg text-blue-950 hover:text-white  bg-slate-400 hover:bg-blue-950 transition duration-1000">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-9 px-2 grid sm:grid-cols-1 md:grid-cols-4  gap-10 pb-20">
        {data?.data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}
