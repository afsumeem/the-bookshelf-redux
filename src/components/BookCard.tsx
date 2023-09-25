import { Link } from "react-router-dom";
import { IBook } from "../types/types";
import { BiSolidHeart } from "react-icons/bi";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../redux/hook";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddBook = (book: IBook) => {
    dispatch(addToWishlist(book));
  };
  return (
    <div>
      <div className="card bg-base-400 shadow-xl border border-state-400">
        <figure>
          <Link to={`/book-details/${book._id}`}>
            <img
              className="h-64 mt-8 hover:scale-125 transition duration-1000"
              src={book.image}
              alt={book.title}
            />
          </Link>
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">
            {book.title}
            <div className="badge badge-ghost">{book.genre}</div>
          </h2>
          <p>by {book.author}</p>
          <h4 className="mt-6">
            Publication Date:
            <span> {book.publicationDate}</span>
          </h4>
        </div>

        <button
          onClick={() => handleAddBook(book)}
          className="btn text-blue-950 hover:text-white font-bold bg-slate-400 hover:bg-blue-950 transition duration-1000"
        >
          Add to Wishlist <BiSolidHeart />
        </button>
        <button
        //  onClick={() => handleAddProduct(bookData)}
        >
          Add to ReadList
        </button>
      </div>
    </div>
  );
}
