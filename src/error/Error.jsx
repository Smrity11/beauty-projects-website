import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="lg:flex  justify-center gap-24 lg:mt-48 my-12">
      <div className="lg:w-1/2">
        <img
          className="w-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
          alt=""
        />
      </div>
      <div className="lg:mt-56 text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p>page not found</p>
        <Link className="underline text-purple-600" to="/">
          <button className="btn btn-success">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
