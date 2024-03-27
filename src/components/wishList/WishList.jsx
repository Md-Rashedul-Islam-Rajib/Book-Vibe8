import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import WishListCard from "../wishListCard/WishListCard";
import { getStoredWishListInfo } from "../../utilities/localStorage2";


const WishList = () => {
    const [bookList,setBookList] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedBookIds = getStoredWishListInfo();
        if (books.length > 0) {
          const readList = books.filter((book) => storedBookIds.includes(book.id));
            setBookList(readList)
        }
      }, []);

    return (
        <div>
            
            {bookList.map((book,idx)=><WishListCard key={idx} book={book}></WishListCard>)}
        </div>
    );
};

export default WishList;