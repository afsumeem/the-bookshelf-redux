import { Link } from "react-router-dom";
import { IBook } from "../types/types";
import { BiSolidHeart, BiBookReader } from "react-icons/bi";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "../redux/hook";
import { addToReadList } from "../redux/features/readList/readListSlice";
import { toast } from "react-toastify";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddBook = (book: IBook) => {
    dispatch(addToWishlist(book));
    toast.success("Book added to wishlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  //add to read list
  const handleAddToReadList = (book: IBook) => {
    dispatch(addToReadList(book));

    toast.success("Book added to readList", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="card bg-base-400 shadow-xl border border-state-400">
      <Link to={`/book-details/${book._id}`}>
        <figure>
          <img
            className="h-64 mt-8 hover:scale-125 transition duration-1000"
            src={book.image}
            alt={book.title}
          />
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
      </Link>
      <div className="justify-end flex me-4 mb-4 gap-4">
        <div className="tooltip" data-tip="Add to wishlist">
          <button
            onClick={() => handleAddBook(book)}
            className="btn  text-xl rounded-full text-blue-950 hover:text-white font-bold bg-slate-400 hover:bg-blue-950 transition duration-1000"
          >
            <BiSolidHeart />
          </button>
        </div>
        <div className="tooltip" data-tip="Add to read list">
          <button
            onClick={() => handleAddToReadList(book)}
            className="btn  text-xl rounded-full text-blue-950 hover:text-white font-bold bg-green-400 hover:bg-green-800 transition duration-1000"
          >
            <BiBookReader />
          </button>
        </div>
      </div>
    </div>
  );
}
