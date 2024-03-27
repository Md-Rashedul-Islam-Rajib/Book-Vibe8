import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { saveBookInfo } from "../utilities/localStorage";
import { saveWishListInfo } from "../utilities/localStorage2";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const intId =parseInt(id);
  const book = books.find((book) => book.id === intId);

  const handleWishlist =() =>{
    saveWishListInfo(intId)
    toast.success('This book added successfully to wishlist ')
  }
  const handleReadlist =() =>{
    saveBookInfo(intId)
    toast.success('This book added successfully to readlist')
  }
  return (
    <div className="container max-w-6xl h-full p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#1313130D]">
        <img
          src={book.image}
          alt=""
          className="object-contain w-full h-[600px] justify-center items-center rounded sm:h-96 lg:col-span-7 my-auto"
        />
        <div className="p-6 space-y-2 lg:col-span-5 bg-white">
          <h3 className="text-4xl font-bold text2 sm:text-4xl group-hover:underline group-focus:underline mb-2">
            {book.bookName}
          </h3>
          <span className="text-xl text-[#131313CC] font-medium text1">By : {book.author}</span>
          <hr />
          <p className="text1 text-xl font-medium my-3">{book.category}</p>
          <hr />
          <p className="text1 text-[#131313CC]"><span className="font-bold">Review : </span> {book.review}</p>
           <p className="text1"> <span className="font-bold">Tags : </span> {book.tags.map((tag,idx)=><button className="mr-4 btn-sm rounded-lg bg-[#23BE0A0D] text-[#23BE0A] font-medium" key={idx}>#{tag}</button>)}</p>
           <hr />
           <div className="flex gap-20">
           <div className="flex flex-col text1 text-[#131313B2]">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
           </div>
           <div className="flex flex-col text1 font-semibold text-[#131313]">
           <p>{book.totalPages}</p>
            <p>{book.publisher}</p>
            <p>{book.yearOfPublishing}</p>
            <p>{book.rating}</p>
           </div>
           </div>
           <div className="flex gap-6">
            <button onClick={handleReadlist} className="btn rounded-lg bg-white text-black outline-none hover:bg-white hover:outline-black hover:text-[#59C6D2]">Read</button>
            <button onClick={handleWishlist} className="btn rounded-lg bg-[#59C6D2] text-white outline-none hover:bg-white hover:outline-[#59C6D2] hover:text-[#59C6D2]">Wishlist</button>
           </div>
           
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BookDetails;
