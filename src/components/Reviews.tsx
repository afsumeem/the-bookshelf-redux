import { useState, ChangeEvent, FormEvent } from "react";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../redux/features/books/booksApi";
import { BiSend } from "react-icons/bi";

interface IProps {
  id: string;
}

export default function Reviews({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postReview, { isLoading, isError, isSuccess }] =
    usePostReviewMutation();
  console.log(isLoading, isError, isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    console.log(inputValue);
    postReview(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-5 mx-8">
      <form className=" form-control flex gap-5  mb-8" onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text text-xl font-bold uppercase">
            Write your Review
          </span>
        </label>
        <div className="flex items-center">
          <textarea
            className="min-h-[30px] w-4/5 textarea textarea-bordered"
            placeholder="Write here...."
            onChange={handleChange}
            value={inputValue}
          />
          <button
            type="submit"
            className="rounded-full h-10 w-10 p-2 text-[25px] text-blue-700"
          >
            <BiSend />
          </button>
        </div>
      </form>
      <hr />
      <div className="my-10">
        <h3 className="text-xl font-bold uppercase mb-8">All Reviews</h3>
        {data?.reviews?.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p className="italic "> - {review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
