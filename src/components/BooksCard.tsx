import BookCard from "./BookCard";
import { IBook } from "../types/types";
import { useState, useEffect } from "react";

export default function BooksCard() {
  const [data, setData] = useState<IBook[]>([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto px-2">
      <div>
        <h2 className="text-3xl font-bold py-10">Latest Books</h2>
      </div>
      <div className="col-span-9 grid sm:grid-cols-1 md:grid-cols-4  gap-10 pb-20">
        {data?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
}