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
import { useAppSelector } from "../redux/hook";
import swal from "sweetalert";
import { useState } from "react";

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { email } = useAppSelector((state) => state.user.user);

  const { data: book, isLoading, error } = useSingleBookQuery(id);

  //book details

  const [deleteBook] = useDeleteBookMutation();
  const [isDeleteLoad, setDeleteLoad] = useState(false);
  const handleDeleteBook = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["Cancel", "Yes"],
      dangerMode: false,
    }).then(async (willDelete) => {
      if (willDelete) {
        if (id) {
          setDeleteLoad(true);
          const response: any = await deleteBook(id);
          if (response?.data) {
            alert("success");
            navigate("/books");
            setDeleteLoad(false);
          } else {
            alert("failed");
            setDeleteLoad(false);
          }
        }
      }
    });
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl my-24 mx-8 relative">
        <figure>
          <img src={book?.image} alt={book?.title} />
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
              <button className="btn text-blue-950 hover:text-white font-bold bg-slate-400 hover:bg-blue-950 transition duration-1000">
                <BiSolidHeart />
              </button>
              <button className="btn text-blue-950 hover:text-white font-bold bg-slate-300 hover:bg-blue-800 transition duration-1000">
                <BiBookReader />
              </button>
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

      {/* review  */}
      <hr />
      <Reviews id={id!} />
    </>
  );
}
