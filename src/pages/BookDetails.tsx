/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/features/books/booksApi";
import {
  BiSolidHeart,
  BiSolidTrash,
  BiBookReader,
  BiEditAlt,
} from "react-icons/bi";
import Reviews from "../components/Reviews";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useState } from "react";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { addToReadList } from "../redux/features/readList/readListSlice";
import { IBook } from "../types/types";
import { toast } from "react-toastify";
import swal from "sweetalert";

//

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { email } = useAppSelector((state) => state.user.user);

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  console.log(isLoading, error);
  //

  const dispatch = useAppDispatch();

  const handleAddBook = (book: IBook) => {
    dispatch(addToWishlist(book));
  };

  const handleAddToReadList = (book: IBook) => {
    dispatch(addToReadList(book));
  };

  //book delete

  const [deleteBook] = useDeleteBookMutation();
  const [isDeleteLoad, setDeleteLoad] = useState(false);

  //
  const handleDeleteBook = () => {
    swal({
      title: "Are you sure?",
      buttons: ["Cancel", "Yes"],
      dangerMode: true,
    }).then(async (willDelete: any) => {
      if (willDelete) {
        if (id) {
          setDeleteLoad(true);
          const response: any = await deleteBook(id);

          if (response?.data) {
            toast.success("Book Deleted!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            navigate("/books");
            setDeleteLoad(false);
          } else {
            toast.error("Failed to Delete Book!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setDeleteLoad(false);
          }
        }
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <h3 className="text-3xl font-[500] text-center">
          <span className="loading loading-ring loading-lg"></span>
        </h3>
      ) : (
        <div className="card lg:card-side bg-base-100 shadow-xl my-24 mx-8 relative">
          <figure>
            <img className="h-80" src={book?.image} alt={book?.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase text-2xl font-bold mb-2">
              {book?.title}
              <span className="badge lowercase badge-ghost">{book?.genre}</span>
            </h2>

            <h2 className="mb-8">
              by <span>{book?.author}</span>
            </h2>

            <h4 className="">
              Publication Date:
              <span> {book?.publicationDate}</span>
            </h4>
            {email && (
              <div className="card-actions justify-end absolute end-8 bottom-12">
                <div className="tooltip" data-tip="Add to wish list">
                  <button
                    onClick={() => handleAddBook(book)}
                    className="btn text-blue-950 hover:text-white font-bold bg-slate-400 hover:bg-blue-950 transition duration-1000"
                  >
                    <BiSolidHeart />
                  </button>
                </div>
                <div className="tooltip" data-tip="Add to read list">
                  <button
                    onClick={() => handleAddToReadList(book)}
                    className="btn text-blue-950 hover:text-white font-bold bg-slate-300 hover:bg-blue-800 transition duration-1000"
                  >
                    <BiBookReader />
                  </button>
                </div>
                <Link to={`/edit-book/${book?._id}`}>
                  {email == book?.email && (
                    <button className="btn text-green-950 hover:text-white font-bold bg-green-400 hover:bg-green-800 transition duration-1000">
                      <BiEditAlt /> Edit Book
                    </button>
                  )}
                </Link>

                {/* delete book */}

                {email == book?.email &&
                  (isDeleteLoad ? (
                    <button
                      disabled
                      className="flex items-center px-4 py-[3px] bg-red-500 text-black rounded hover:bg-red-600 ml-3"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      onClick={handleDeleteBook}
                      className="btn text-red-800 hover:text-white font-bold bg-red-300 hover:bg-red-600 transition duration-1000"
                    >
                      <BiSolidTrash /> Delete Book
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
      {/* review  */}
      <hr />
      <Reviews id={id!} />
    </>
  );
}
