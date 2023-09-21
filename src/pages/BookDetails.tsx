/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../redux/features/books/booksApi";
import {
  BiSolidHeart,
  BiSolidTrash,
  BiBookReader,
  BiEditAlt,
} from "react-icons/bi";

export default function BookDetails() {
  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  console.log(book);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-24 mx-8">
      <figure>
        <img src={book?.image} alt={book?.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase text-2xl font-bold mb-8">
          {book?.title}
          <span className="badge lowercase badge-ghost">{book?.genre}</span>
        </h2>

        <h2>
          by <span>{book?.author}</span>
        </h2>

        <h4 className="">
          Publication Date:
          <span> {book?.publicationDate}</span>
        </h4>
        <div className="card-actions justify-end">
          <button className="btn text-blue-950 hover:text-white font-bold bg-slate-400 hover:bg-blue-950 transition duration-1000">
            <BiSolidHeart />
          </button>
          <button className="btn text-blue-950 hover:text-white font-bold bg-slate-300 hover:bg-blue-800 transition duration-1000">
            <BiBookReader />
          </button>
          <button className="btn text-green-950 hover:text-white font-bold bg-green-400 hover:bg-green-800 transition duration-1000">
            <BiEditAlt />
          </button>
          <button className="btn text-red-800 hover:text-white font-bold bg-red-300 hover:bg-red-600 transition duration-1000">
            <BiSolidTrash />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold ">Reviews about this book!</h2>
          <hr />
          <ol className="space-y-1 text-lg">
            {book?.reviews?.map((review: string) => (
              <li key={review}> - {review}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
