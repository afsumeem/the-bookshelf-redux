import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/src/assets/undraw_reading_time_re_phf7.svg"
          className="max-w-sm rounded-lg"
        />
        <div className="md:text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Feast Your Eyes on <br /> A Good Book!
          </h1>
          <p className="py-6">
            Books play a quintessential role in every student's life by
            introducing them to a world of imagination, providing knowledge of
            the outside world, improving their reading, writing and speaking
            skills as well as boosting memory and intelligence.
          </p>
          <Link to="books">
            <button className="btn text-white hover:bg-blue-950 bg-blue-900">
              See Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
