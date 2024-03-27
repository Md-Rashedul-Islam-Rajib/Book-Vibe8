import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const ListedBook = () => {
    const [tabIndex,setTabIndex] = useState(0);
  const books = useLoaderData();
  
  return (
    
    <div>
      <div className="h-20 flex justify-center items-center bg-[#1313130D] rounded-xl">
                <h2>Books</h2>
                </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
        <Link
          to=''
          onClick={()=>setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0? "border border-b-0": "border-b"} border-gray-400 text-black`}
        >
          <span>Read Books</span>
        </Link>
        <Link
         to={`wishlist`}
         onClick={()=>setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1? "border border-b-0": "border-b"} rounded-t-lg border-gray-400 text-black`}
        >
          
          <span>Wish List Books</span>
        </Link>
        
        
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
