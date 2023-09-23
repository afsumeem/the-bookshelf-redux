/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/types";
import { useState } from "react";

export default function AllBooks() {
  //

  const bookGenre = [
    "Classic",
    "Mystery",
    "Fiction",
    "Young Adult Fantasy",
    "Fantasy",
  ];
  const publicationYear = [
    "1950",
    "1960",
    "1813",
    "1925",
    "2018",
    "1988",
    "1951",
    "1997",
    "1954",
  ];

  //search and filter functionality for books

  const [selectGenre, setSelectGenre] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectPYear, setSelectPYear] = useState("");

  const { data, isLoading } = useGetBooksQuery({
    search: searchText,
    genre: selectGenre,
    publicationYear: selectPYear,
  });

  console.log(data);

  return (
    <div>
      <h2 className="text-5xl font-bold py-10 text-center">All Books</h2>
      <div className="bg-blue-950 h-24 flex items-center justify-center w-full">
        <form className="join">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered join-item w-96"
            placeholder="Search here"
          />
        </form>
      </div>

      {/*  filter and get books section */}

      <div className=" px-2 flex flex-col md:flex-row gap-10 justify-around">
        {/* filter  */}

        <div className=" my-8  mt-8 flex items-center justify-center text-white">
          <div className="bg-blue-950 w-72">
            <button
              onClick={() => {
                setSelectGenre("");
                setSelectPYear("");
              }}
              className="btn w-full rounded-none text-blue-950 hover:text-white  bg-slate-400 hover:bg-blue-950 transition duration-1000"
            >
              Reset Filter
            </button>
            {/* genre filter */}
            <div className="m-2 text-white">
              <h2 className="font-bold my-4 text-center uppercase">Genre</h2>
              {bookGenre?.map((genre, i) => {
                return (
                  <div key={i} className="flex items-center ml-4 mb-[8px]">
                    <input
                      onChange={() => setSelectGenre(genre)}
                      className="h-3 w-3"
                      id={genre}
                      type="radio"
                      name="genre"
                      checked={selectGenre === genre}
                    />
                    <label className="text-[14px] ml-4" htmlFor={genre}>
                      {genre}
                    </label>
                  </div>
                );
              })}
            </div>

            {/* publication year filter */}

            <h2 className="font-bold mt-8 mb-4  text-center uppercase ">
              Publication Year
            </h2>
            <div className="m-2">
              {publicationYear?.map((year, i) => {
                return (
                  <div key={i} className="flex ml-4 items-center mb-[8px]">
                    <input
                      onChange={() => setSelectPYear(year)}
                      className="h-3 w-3"
                      id={year}
                      type="radio"
                      name="year"
                      checked={selectPYear === year}
                    />
                    <label className="text-[14px] ml-3" htmlFor={year}>
                      {year}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* books */}
        <div className="mt-8 flex items-center justify-center">
          {isLoading ? (
            <div>
              <h3 className="text-3xl font-[500] text-center">Loading...</h3>
            </div>
          ) : (
            <div className="col-span-9 px-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 pb-20">
              {data?.data?.map((book: IBook, index: number) => {
                // <BookCard key={index} book={book} />
                return (
                  <Link key={index} to={`/book-details/${book._id}`}>
                    {/* <Card book={book} /> */}
                    <BookCard book={book}></BookCard>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
