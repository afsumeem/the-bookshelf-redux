import { Link } from "react-router-dom";
import { setUser } from "../redux/features/users/userSlice";
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../firebase/firebase";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  // logout functionality

  const handleLogOut = () => {
    console.log("logout");
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    // navbar start

    <nav className="navbar bg-blue-950 flex justify-between">
      <Link
        to="/"
        className="btn btn-ghost hover:bg-inherit text-white normal-case text-xl"
      >
        The BookShelf
      </Link>

      <div className="navbar-end ">
        <details className="dropdown dropdown-end">
          <summary tabIndex={0} className="btn btn-ghost lg:hidden text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </summary>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52"
          >
            <li>
              <Link
                to="/"
                className="text-slate-200 hover:text-white text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <h4 className="text-slate-200 hover:text-white text-base">
                Books
              </h4>
              <ul className="p-2">
                <li>
                  <Link
                    to="/books"
                    className="text-slate-200 hover:text-white text-base"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-book"
                    className="text-slate-200 hover:text-white text-base"
                  >
                    Add New Book
                  </Link>
                </li>
              </ul>
            </li>

            {/* user sign in & sign up */}
            {!user.email && (
              <>
                <li>
                  <Link
                    to="/signin"
                    className="text-slate-200 hover:text-white text-base"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-slate-200 hover:text-white text-base"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {/* logout */}
            {user.email && (
              <li>
                <Link
                  to="/"
                  className="text-slate-200 hover:text-white text-base"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </details>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-slate-200 hover:text-white text-base">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="text-slate-200 hover:text-white text-base"
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="text-slate-200 hover:text-white text-base"
            >
              Add New Book
            </Link>
          </li>

          {/* user sign in & sign up */}

          {!user.email && (
            <>
              <li>
                <Link
                  to="/signin"
                  className="text-slate-200 hover:text-white text-base"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-slate-200 hover:text-white text-base"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}

          {/* logout */}
          {user.email && (
            <li onClick={handleLogOut}>
              <Link
                to="/"
                className="text-slate-200 hover:text-white text-base"
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
