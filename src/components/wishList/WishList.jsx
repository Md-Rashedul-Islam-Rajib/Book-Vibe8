import { useLoaderData } from "react-router-dom";


const WishList = () => {
    const books = useLoaderData();
    return (
        <div>
            WishList
        </div>
    );
};

export default WishList;