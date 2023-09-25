/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { ChangeEvent, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { IBookInfo } from "../types/types";
import { useAddBookMutation } from "../redux/features/books/booksApi";

const AddNewBook = () => {
  const navigate = useNavigate();

  const { email } = useAppSelector((state) => state.user.user);
  const [addBook] = useAddBookMutation();

  const [load, setLoad] = useState(false);

  const [bookInfo, setBookInfo] = useState<IBookInfo>({
    email: "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  //
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email) {
      bookInfo.email = email;
      bookInfo.reviews = [];
    }
    setLoad(true);

    const response: any = await addBook(bookInfo);
    console.log(response?.data);

    if (response?.data) {
      toast.success("New book added", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Reset the form fields
      setBookInfo({
        email: "",
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        image: "",
      });

      navigate("/books");
      setLoad(false);
    } else {
      toast.error("Something is wrong! Failed to added new book!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoad(false);
    }
  };

  return (
    <div className="mx-auto bg-slate-300 py-8">
      <h2 className="text-5xl font-bold py-10 text-center ">Add New Book</h2>
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col justify-center items-center"
      >
        {/* book title */}
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="title" className="text-lg font-bold mb-2">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookInfo.title}
            onChange={handleChange}
            className="input input-bordered border-blue-600 "
            placeholder="Book Title"
            required
          />
        </div>

        {/* author name */}
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="author" className="text-lg font-bold mb-2">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookInfo.author}
            onChange={handleChange}
            className="input input-bordered border-blue-600 "
            placeholder="Author Name"
            required
          />
        </div>

        {/* genre */}
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="genre" className="text-lg font-bold mb-2">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={bookInfo.genre}
            onChange={handleChange}
            className="input input-bordered border-blue-600 "
            required
          >
            <option value="">Select Genre</option>
            <option value="Mystery">Mystery</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Novel">Novel</option>
            <option value="Poetry">Poetry</option>
            <option value="">Select Genre</option>
            <option value="Thriller">Thriller</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Historical Fiction">Historical Fiction</option>
          </select>
        </div>

        {/* publication date */}
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="publicationDate" className="text-lg font-bold mb-2">
            Publication Date
          </label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            value={bookInfo.publicationDate}
            onChange={handleChange}
            className="input input-bordered border-blue-600"
            required
          />
        </div>

        {/* book image */}
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="image" className="text-lg font-bold mb-2">
            Book Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            className="input input-bordered  border-blue-600"
            placeholder="Image url.."
            required
          />
        </div>

        {load ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          <button
            type="submit"
            className="btn w-2/4 mb-6 rounded text-white  bg-slate-600 hover:bg-blue-950 transition duration-1000"
          >
            Add Book
          </button>
        )}
      </form>
    </div>
  );
};

export default AddNewBook;
