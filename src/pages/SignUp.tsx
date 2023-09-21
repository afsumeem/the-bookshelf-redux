import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { createUser } from "../redux/features/users/userSlice";

interface SignUpFormInput {
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>();

  const dispatch = useAppDispatch();

  // create user

  const onSubmit = (data: SignUpFormInput) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="bg-bgGradient min-h-screen flex  items-center">
      <div className="sm:w-3/4 md:w-2/5 bg-slate-100 mx-auto p-10 rounded-xl ">
        <h2 className="text-center font-bold text-3xl mb-8">
          Create an Account
        </h2>

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
              placeholder="name@example.com"
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
              autoCorrect="off"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* confirm password  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              id="password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
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
