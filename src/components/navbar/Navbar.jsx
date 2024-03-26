import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/listedbook'>Listed Books</NavLink>
      <NavLink to='/pagetoread'>Page to Read</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold text1">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg text-[#131313cc] gap-6">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/listedbook'>Listed Books</NavLink>
      <NavLink to='/pagetoread'>Page to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn rounded-lg bg-[#23BE0A] text-white outline-none hover:bg-white hover:outline-[#23BE0A] hover:text-[#23BE0A]">Sign In</a>
    <a className="btn rounded-lg bg-[#59C6D2] text-white outline-none hover:bg-white hover:outline-[#59C6D2] hover:text-[#59C6D2]">Sign Up</a>
    
  </div>
</div>
    );
};

export default Navbar;