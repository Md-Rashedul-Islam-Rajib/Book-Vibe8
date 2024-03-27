import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-3/4 flex-col-reverse  lg:flex  lg:flex-row-reverse justify-between">
        <img
          src="/banner.png"
          className="max-w-sm rounded-lg shadow-2xl bg-base-200"
        />
        <div>
          <h1 className=" text-3xl text-center lg:text-start lg:text-5xl font-bold text2 lg:leading-[84px] mb-8">
            Books to freshen up <br /> your bookshelf
          </h1>

          <Link to="/listedbook" className="flex justify-center lg:justify-start">
            <button className="btn-md lg:btn-lg rounded-lg text-white bg-[#23BE0A] text1 text-xl font-bold outline-none hover:text-[#23BE0A] hover:bg-white hover:outline-[#23BE0A]">
              View Book List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
