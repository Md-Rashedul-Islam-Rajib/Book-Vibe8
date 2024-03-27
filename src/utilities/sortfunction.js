import { useLoaderData } from "react-router-dom";
import { getStoredBookInfo } from "./localStorage"
const handleSort = (query) => {
    console.log(books);
    const storedBookIds = getStoredBookInfo();

}
export {handleSort}

// const [bookList,setBookList] = useState([]);
//     const books = useLoaderData();
//     useEffect(() => {
//         const storedBookIds = getStoredBookInfo();
//         if (books.length > 0) {
//           const readList = books.filter((book) => storedBookIds.includes(book.id));
//             setBookList(readList)
//         }
//       }, []);