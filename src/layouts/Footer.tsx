import { BiBold } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { setUser } from "../redux/features/users/userSlice";
import { auth } from "../firebase/firebase";

export default function Footer() {
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
    <footer className="bg-blue-950 ">
      <footer className="footer p-10 text-base-content flex justify-around">
        <nav className="text-white">
          <header className="footer-title">Company</header>

          <Link to="/" className="link link-hover">
            Home
          </Link>

          <Link to="/books" className="link link-hover">
            All Books
          </Link>
          {!user.email && (
            <>
              <Link to="/signup" className="link link-hover">
                Sign Up
              </Link>

              <Link to="/signin" className="link link-hover">
                Sign In
              </Link>
            </>
          )}
          {/* logout */}
          {user.email && (
            <Link
              onClick={handleLogOut}
              to="/"
              className="text-slate-200 hover:text-white text-base"
            >
              Logout
            </Link>
          )}
        </nav>
        <nav className="text-white">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-base-content border-base-30">
        <aside className="items-center grid-flow-col">
          <span className="text-white text-3xl">
            <BiBold />
          </span>
          <p className="text-white">
            <span className="font-bold">The BookShelf</span> <br />
            Copyright &copy;2023 All Rights Reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <span className="text-white text-xl">
                <BiLogoFacebookCircle />
              </span>
            </a>
            <a>
              <span className="text-white text-xl">
                <BiLogoTwitter />
              </span>
            </a>
            <a>
              <span className="text-white text-xl">
                <BiLogoYoutube />
              </span>
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
}
