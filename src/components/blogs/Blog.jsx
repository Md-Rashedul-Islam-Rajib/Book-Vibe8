/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {id,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = blog;
  return (
    <Link to={`/book/${id}`} className="flex flex-col bg-white border rounded-lg p-4">
      <a
        aria-label={bookName}
      >
        <img
          alt=""
          className="object-contain w-full h-52"
          src={image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label={bookName}
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline text-violet-400"
        >
          {
          tags.map((tag,idx)=> <button className="mr-4 btn-sm rounded-lg bg-[#23BE0A0D] text-[#23BE0A] font-medium" key={idx}>{tag}</button>)
          }
        </a>
        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug text2 font-bold">
          {bookName}
        </h3>
        <p className="text1 font-medium text-[#131313CC] mb-4">By : {author}</p>
        <div className="border border-b border-dashed"></div>
        <div className="flex flex-wrap justify-between pt-3 space-x-2  text-[#131313CC] font-medium">
          <span>{category}</span>
          <span className="flex items-center gap-3">{rating} <CiStar /></span>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
