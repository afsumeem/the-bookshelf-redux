import { useAppDispatch, useAppSelector } from "../redux/hook";
import { removeFromReadList } from "../redux/features/readList/readListSlice";
import { BiBookReader } from "react-icons/bi";
import { BiX, BiCheck } from "react-icons/bi";
import { removeFromWishList } from "../redux/features/wishlist/wishlistSlice";
import { IBook } from "../types/types";
import { toast } from "react-toastify";

//
export default function ReadList() {
  const { books } = useAppSelector((state) => state.readList);
  const { wishListBooks } = useAppSelector((state) => state.wishlist);

  const dispatch = useAppDispatch();

  //wishlist
  const handleRemoveWishlist = (book: IBook) => {
    dispatch(removeFromWishList(book));
    toast.success("book removed!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //readlist
  const handleComplete = (book: IBook) => {
    dispatch(removeFromReadList(book));
    toast.success("Completed", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className=" text-3xl mx-auto text-white active:bg-inherit focus:bg-inherit"
        >
          <BiBookReader />
        </label>
      </div>
      <div className="drawer-side z-10 mx-0">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className=" p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* wish list */}
          <div>
            <h2 className=" font-bold text-xl uppercase my-2">Wish list</h2>
            <hr />
            <div className="mt-2">
              {wishListBooks.map((book) => (
                <div
                  key={book._id}
                  className="card card-side my-2 rounded-md bg-slate-200 shadow-sm border w-full  mx-auto "
                >
                  <figure className="p-2 ">
                    <img className="h-8" src={book.image} alt={book.title} />
                  </figure>
                  <div className="card-body flex flex-row items-center justify-between p-2">
                    <div className="flex flex-col">
                      <h2 className="card-title">{book.title}</h2>
                      <h2 className="">{book.author}</h2>
                    </div>

                    <div className="card-actions">
                      <button
                        onClick={() => handleRemoveWishlist(book)}
                        className="text-xl rounded bg-blue-950 text-white"
                      >
                        <BiX />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* read list */}

          <div className="mt-8">
            <h2 className="font-bold text-xl uppercase my-2">Read List</h2>
            <hr />
            <div className="mt-2">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="card card-side my-2 rounded-md bg-slate-200 shadow-sm border w-full  mx-auto "
                >
                  <figure className="p-2">
                    <img className="h-8" src={book.image} alt={book.title} />
                  </figure>
                  <div className="card-body flex p-2 flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <h2 className="card-title">{book.title}</h2>
                      <h2 className="">{book.author}</h2>
                    </div>

                    <div className="card-actions">
                      {!book.completed && (
                        <button
                          onClick={() => handleComplete(book)}
                          className="text-xl rounded bg-blue-950 text-white"
                        >
                          <BiCheck />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
