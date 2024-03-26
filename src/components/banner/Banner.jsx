

const Banner = () => {


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-3/4 flex-col lg:flex-row-reverse justify-between">
        <img
          src='/banner.png'
          className="max-w-sm rounded-lg shadow-2xl bg-base-200"
        />
        <div>
          <h1 className="text-5xl font-bold text2 leading-[84px] mb-8">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn-lg rounded-lg text-white bg-[#23BE0A] text1 text-xl font-bold outline-none hover:text-[#23BE0A] hover:bg-white hover:outline-[#23BE0A]">View Book List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
