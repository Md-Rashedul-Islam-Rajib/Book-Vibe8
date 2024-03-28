import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  

  return (
    <div>
      <div className="h-20 flex justify-center items-center bg-[#1313130D] rounded-xl">
        <h2 className="text1 text-3xl font-bold">Books</h2>
      </div>
      {/* dropdown sorting menu */}
      <div className="flex justify-center mt-6">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white text1 text-lg font-semibold">
            Sort <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-50 rounded-box w-32">
            <li onClick={()=>handleSort('rating')} className="text1 text-lg font-semibold text-[#23BE0A]">
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSort('totalPages')} className="text1 text-lg font-semibold text-[#23BE0A]">
              <a>Number of Pages</a>
            </li>
            <li onClick={()=>handleSort('yearOfPublishing')} className="text1 text-lg font-semibold text-[#23BE0A]">
              <a>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tabs */}
      <div className=" mt-8 flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 rounded-md px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } border-gray-400 text-black`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 rounded-md px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-400 text-black`}
        >
          <span>Wish List Books</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
