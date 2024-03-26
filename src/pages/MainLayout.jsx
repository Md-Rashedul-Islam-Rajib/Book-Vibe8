import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import BookDetails from "./BookDetails";


const MainLayout = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;