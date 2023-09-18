import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-bgGradient min-h-screen flex  items-center">
      <div className="sm:w-3/4 md:w-2/5 bg-slate-100 mx-auto p-10 rounded-xl ">
        <h2 className="text-center font-bold text-3xl ">Welcome Back!</h2>
        <h5 className="text-center text-normal mb-8">Login to Continue</h5>

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

          <button className="btn text-white bg-blue-950 mt-4 w-full max-w-xs">
            Login
          </button>
        </form>

        <h5 className="text-center text-normal mt-8">
          Don't have an account?
          <span className="text-blue-800 underline font-bold">
            {" "}
            <Link to="/signup">Sign Up</Link>
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
