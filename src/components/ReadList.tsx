import { useAppDispatch, useAppSelector } from "../redux/hook";
import { removeFromReadList } from "../redux/features/readList/readListSlice";
import { BiBookReader } from "react-icons/bi";
import { BiX } from "react-icons/bi";

//
export default function ReadList() {
  const { books } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
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
          <h2 className="text-center font-bold text-2xl uppercase my-4">
            ReadList
          </h2>
          <hr />
          <div className="mt-4">
            {books.map((book) => (
              <div
                key={book._id}
                className="card card-side my-4 rounded-md bg-slate-200 shadow-sm border w-full  mx-auto pl-4"
              >
                <figure>
                  <img src={book.image} alt={book.title} />
                </figure>
                <div className="card-body flex flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="card-title">{book.title}</h2>
                    <h2 className="">{book.author}</h2>
                  </div>

                  <div className="card-actions">
                    <button
                      onClick={() => dispatch(removeFromReadList(book))}
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
      </div>
    </div>
  );
}
