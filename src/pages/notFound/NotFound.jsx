import { Link } from "react-router-dom";
import notFound from "../../assets/images/not-found.svg";

const NotFound = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-8">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-6xl mb-2">
            404 - Not Found
          </h1>
          <p className="font-light">
            The page you are looking for does not exist.
          </p>
          <p>
            Go back to the &nbsp;
            <Link className="underline" to="/home">
              Home page
            </Link>
            .
          </p>
        </div>
        <img src={notFound} alt="404" className="w-[200px] md:w-[400px] " />
      </div>
    </>
  );
};

export default NotFound;
