/* eslint-disable react/prop-types */
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishListCard = ({book}) => {
    const {id,bookName,image,author,tags,yearOfPublishing,publisher,totalPages,category,rating} = book;
    return (
        <div>
      <div className="h-96 p-4 rounded-xl">
        <div className="border rounded-xl lg:p-4">
          <div className="flex gap-2 lg:gap-6">
            <div className="bg-[#1313130D] rounded-xl w-2/5 lg:w-84 max-h-80">
              <img className="max-h-72 rounded-xl" src={image} alt="" />
            </div>
            <div className="flex flex-col lg:gap-4 w-3/5 justify-center">
              <div>
                <h2 className="text2 text-xl lg:text-3xl font-bold">
                  {bookName}
                </h2>
              </div>
              <div>
                <span className="text-[#131313CC] font-medium text1">
                  By : {author}
                </span>
              </div>
              <div className="flex gap-2 lg:gap-6">
                <div>
                  <p className="text1">
                    {" "}
                    <span className="font-bold">Tags : </span>{" "}
                    {tags.map((tag, idx) => (
                      <button
                        className=" mr-1 lg:mr-4 btn-xs lg:btn-sm rounded-lg bg-[#23BE0A0D] text-[#23BE0A] font-medium"
                        key={idx}
                      >
                        #{tag}
                      </button>
                    ))}
                  </p>
                </div>
                <div className="flex gap-2 text-xs lg:text-base items-center text1">
                  <IoCalendarNumberOutline /> Year of Publishing :{" "}
                  {yearOfPublishing}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 text-xs lg:text-base items-center text1">
                  <GoPeople /> Publisher : {publisher}
                </div>
                <div className="flex gap-2 text-xs lg:text-base items-center text1">
                  <IoBookOutline /> Pages : {totalPages}
                </div>
              </div>
              <hr />
              <div className="flex lg:gap-4 text1">
                <div>
                  <button className="mr-1 lg:mr-4 btn-xs lg:btn-sm text-xs lg:text-base rounded-3xl bg-[#328EFF26] text-[#328EFF] font-medium">
                    Category : {category}
                  </button>
                </div>
                <div>
                  <button className="mr-1 lg:mr-4 btn-xs lg:btn-sm text-xs lg:text-base rounded-3xl bg-[#FFAC3326] text-[#FFAC33] font-medium">
                    Rating : {rating}
                  </button>
                </div>
                <Link to={`/book/${id}`}>
                  <div>
                    <button className="mr-1 lg:mr-4 btn-xs lg:btn-sm text-xs lg:text-base rounded-3xl bg-[#23BE0A] text-white font-medium">
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WishListCard;