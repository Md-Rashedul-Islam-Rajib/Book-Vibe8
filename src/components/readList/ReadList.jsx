import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookInfo } from "../../utilities/localStorage";
import ReadlistCard from "../readlistCard/ReadlistCard";


const ReadList = () => {
    const [bookList,setBookList] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        const storedBookIds = getStoredBookInfo();
        if (books.length > 0) {
          const readList = books.filter((book) => storedBookIds.includes(book.id));
            setBookList(readList)
        }
      }, []);
    return (
        <div>
            
            {bookList.map((book,idx)=><ReadlistCard key={idx} book={book}></ReadlistCard>)}
        </div>
    );
};

export default ReadList;