import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="bg-bgGradient min-h-screen flex  items-center">
      <div className="sm:w-3/4 md:w-2/5 bg-slate-100 mx-auto p-10 rounded-xl ">
        <h2 className="text-center font-bold text-3xl mb-8">
          Create an Account
        </h2>

        <form className="flex flex-col items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn text-white bg-blue-950 mt-4 w-full max-w-xs">
            Create Account
          </button>
        </form>

        <h5 className="text-center text-normal mt-8">
          Already have an account?
          <span className="text-blue-800 underline font-bold">
            {" "}
            <Link to="/signin">Log in</Link>
          </span>
        </h5>
        <h5 className="text-center text-normal mt-4">
          Back to{" "}
          <span className="text-blue-800 underline font-bold">
            {" "}
            <Link to="/">Home</Link>
          </span>
        </h5>
      </div>
    </div>
  );
}
