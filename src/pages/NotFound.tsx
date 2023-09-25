import Navbar from "../layouts/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="text-center text-5xl mt-40 font-bold">
          <h2>Page not found!</h2>
        </div>
      </div>
    </div>
  );
}
