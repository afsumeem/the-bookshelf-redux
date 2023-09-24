/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { UpdateBookInfo } from "../types/types";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/hook";

//

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { email } = useAppSelector((state) => state.user.user);

  // Call the useBookDetailsQuery hook
  let bookData: UpdateBookInfo | null = null;
  const { data } = useSingleBookQuery(id);
  bookData = data;

  //
  const [bookInfo, setBookInfo] = useState<UpdateBookInfo>({
    email: email || "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: "",
  });

  // Update the bookInfo state
  useEffect(() => {
    if (bookData) {
      setBookInfo(bookData);
    }
  }, [bookData, id]);

  //

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const [updateBook] = useUpdateBookMutation();
  const [isLoading, setIsLoading] = useState(false);

  //

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response: any = await updateBook({ id: id, data: bookInfo });
    if (response?.data) {
      alert("success");
      if (id) {
        navigate(`/book-details/${id}`);
      }
      setIsLoading(false);
    } else {
      alert("failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-slate-300 py-8">
      <h1 className="text-5xl font-bold py-10 text-center">
        Edit Book Information
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col justify-center items-center"
        action="#"
      >
        <div className="mb-6 flex flex-col w-2/4">
          <label htmlFor="title" className="text-lg font-bold mb-2">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookInfo.title}
            onChange={handleInputChange}
            className="input input-bordered border-blue-600"
            placeholder="Book Title"
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
            onChange={handleInputChange}
            className="input input-bordered border-blue-600 "
            placeholder="Author Name"
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
            onChange={handleInputChange}
            className="input input-bordered border-blue-600 "
          >
            <option value="">Select Genre</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
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
            onChange={handleInputChange}
            className="input input-bordered border-blue-600"
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
            onChange={handleInputChange}
            name="image"
            className="input input-bordered  border-blue-600"
            placeholder="Image url.."
          />
        </div>

        {isLoading ? (
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
}
