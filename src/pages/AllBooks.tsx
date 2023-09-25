/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBook } from "../types/types";
import { useState } from "react";
import { useAppSelector } from "../redux/hook";

export default function AllBooks() {
  const { user } = useAppSelector((state) => state.user);
  //

  const bookGenre = [
    "Mystery",
    "Fiction",
    "Fantasy",
    "Novel",
    "Thriller",
    "Historical Fiction",
    "Biography",
    "Comedy",
    "Poetry",
  ];
  const publicationYear = [
    "1990",
    "1992",
    "2023",
    "2022",
    "2021",
    "2020",
    "2000",
    "2001",
    "1998",
    "1997",
    "2010",
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

  return (
    <div className="mx-auto">
      <h2 className="text-5xl font-bold py-10 text-center ">All Books</h2>
      <div className="bg-blue-950 h-24 flex items-center w-full">
        <form className="join mx-auto w-2/3">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered join-item w-full md:w-2/3 md:mx-auto"
            placeholder="Search here"
          />
        </form>
        {user.email && (
          <Link to="/add-new-book">
            {" "}
            <button className="btn mx-8 rounded text-blue-950 hover:text-white  bg-slate-400 hover:bg-blue-950 transition duration-1000">
              Add new
            </button>{" "}
          </Link>
        )}
      </div>

      {/*  filter and get books section */}

      <div className="m-8 flex flex-col md:flex-row gap-2 justify-between">
        {/* filter  */}

        <div className=" flex justify-center text-white  gap-8 w-full md:w-1/4 md:justify-start md:flex-col md:gap-0">
          <div className="bg-blue-950">
            <button
              onClick={() => {
                setSelectGenre("");
              }}
              className="btn w-full rounded-none text-blue-950 hover:text-white  bg-slate-400 hover:bg-blue-950 transition duration-1000"
            >
              Reset Genre
            </button>
            {/* genre filter */}
            <div className="mx-2 mb-8 text-white">
              <h2 className="font-bold my-4 text-center uppercase">Genre</h2>
              {bookGenre?.map((genre, i) => {
                return (
                  <div key={i} className="flex items-center mx-4 mb-2">
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
          </div>

          {/* publication year filter */}
          <div className="bg-blue-950">
            <button
              onClick={() => {
                setSelectPYear("");
              }}
              className="btn w-full rounded-none text-blue-950 hover:text-white  bg-slate-400 hover:bg-blue-950 transition duration-1000"
            >
              Reset Publication year
            </button>
            <h2 className="font-bold my-4  text-center uppercase ">
              Publication Year
            </h2>
            <div className="m-2">
              {publicationYear?.map((year, i) => {
                return (
                  <div key={i} className="flex mx-4 items-center mb-[8px]">
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
        <div className="w-full md:w-3/4">
          {data?.data?.length === 0 ? (
            <h2 className="text-center text-2xl">Data not found</h2>
          ) : (
            <>
              {isLoading ? (
                <h3 className="text-3xl font-[500] text-center">Loading...</h3>
              ) : (
                <div className="col-span-9 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 ">
                  {data?.data?.map((book: IBook, index: number) => (
                    <BookCard key={index} book={book} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
