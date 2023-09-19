import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";

interface LoginFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const { user, isLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading, navigate]);

  return (
    <div className="bg-bgGradient min-h-screen flex  items-center">
      <div className="sm:w-3/4 md:w-2/5 bg-slate-100 mx-auto p-10 rounded-xl ">
        <h2 className="text-center font-bold text-3xl ">Welcome Back!</h2>
        <h5 className="text-center text-normal mb-8">Login to Continue</h5>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          {/* email */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Email</span>
            </label>
            <input
              id="email"
              placeholder="Your Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* password */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Password</span>
            </label>
            <input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p>{errors.password.message}</p>}
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
