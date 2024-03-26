import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));
  return (
    <div className="container max-w-6xl h-full p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#1313130D]">
        <img
          src={book.image}
          alt=""
          className="object-contain w-full h-[600px] justify-center items-center rounded sm:h-96 lg:col-span-7 my-auto"
        />
        <div className="p-6 space-y-2 lg:col-span-5 bg-white">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            {book.bookName}
          </h3>
          <span className="text-xs text-gray-400">By : {book.author}</span>
          <hr />
          <span>{book.category}</span>
          <hr />
          <p><span>Review : </span> {book.review}</p>
           <p> <span>Tags : </span> {book.tags.map((tag,idx)=><span className="mr-4" key={idx}>{tag}</span>)}</p>
           <hr />
           <div className="flex gap-20">
           <div className="flex flex-col">
            <p>Number of Pages :</p>
            <p>Publisher :</p>
            <p>Year of Publishing :</p>
            <p>Rating :</p>
           </div>
           <div className="flex flex-col">
           <p>{book.totalPages}</p>
            <p>{book.publisher}</p>
            <p>{book.yearOfPublishing}</p>
            <p>{book.rating}</p>
           </div>
           </div>
           <div>
            <button>Read</button>
            <button>Wishlist</button>
           </div>
           
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
