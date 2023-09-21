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
      <a className="btn btn-ghost hover:bg-inherit text-white normal-case text-xl ">
        The BookShelf
      </a>

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
              <a className="text-slate-200 hover:text-white text-base">
                {" "}
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <h4 className="text-slate-200 hover:text-white text-base">
                Books
              </h4>
              <ul className="p-2">
                <li>
                  <a className="text-slate-200 hover:text-white text-base">
                    <Link to="/books">All Books</Link>
                  </a>
                </li>
                <li>
                  <a className="text-slate-200 hover:text-white text-base">
                    <Link to="/add-new-book">Add New Book</Link>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-slate-200 hover:text-white text-base">
                {" "}
                <Link to="/signin">Sign In</Link>
              </a>
            </li>
            <li>
              <a className="text-slate-200 hover:text-white text-base">
                {" "}
                <Link to="/signup">Sign Up</Link>
              </a>
            </li>
            <li>
              <a className="text-slate-200 hover:text-white text-base">
                {" "}
                <Link to="/">Logout</Link>
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-slate-200 hover:text-white text-base">
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a className="text-slate-200 hover:text-white text-base">
              <Link to="/books">All Books</Link>
            </a>
          </li>
          <li>
            <a className="text-slate-200 hover:text-white text-base">
              {" "}
              <Link to="/add-new-book">Add New Book</Link>
            </a>
          </li>

          {/* user sign in & sign up */}

          {!user.email && (
            <>
              <li>
                <a className="text-slate-200 hover:text-white text-base">
                  {" "}
                  <Link to="/signin">Sign In</Link>
                </a>
              </li>
              <li>
                <a className="text-slate-200 hover:text-white text-base">
                  {" "}
                  <Link to="/signup">Sign Up</Link>
                </a>
              </li>
            </>
          )}

          {/* logout */}
          {user.email && (
            <li onClick={handleLogOut}>
              <a className="text-slate-200 hover:text-white text-base">
                {" "}
                <Link to="/">Logout</Link>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
