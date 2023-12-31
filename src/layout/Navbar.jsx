

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  const AllServices = (
    <>

    
      <li className="text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          Add Product
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
         My Cart
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>

      <div className="navbar text-[#ffd485]  bg-[#000000] py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" bg-[#292B2B] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 hover:text-[#ffd485]"
            >
              {AllServices}
            </ul>
          </div>
          <div className="flex gap[0px] md:gap-3 items-center">
           <div className="grid  justify-center md:text-center">
           <img
              className="w-[100px] ml-[-15px] md:ml-0 h-[45px] md:w-[120px] md:h-[75px] text-white"
              src="https://i.ibb.co/hVZS3Cw/gv-letter-initial-with-royal-wing-logo-template-vector-31565644-removebg-preview.png"
            ></img>
            <small className="text-[10px] md:mt-[-10px] ">GV Company</small>
           </div>
            <h2 className="text-lg ml-[-10px] md:ml-0 md:text-2xl  text-[#ffeac2]">
          <span className="text-[#ffbe46] text-2xl md:text-4xl  font-bold">G</span>low
              <span className="text-[#ffbf47] text-2xl font-bold md:text-4xl">V</span>ista 
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{AllServices}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <div className="grid justify-center items-center mx-auto ">
             <div className="avatar online mx-auto">
  <div className="w-7 md:w-11  rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
             <p className="text-xs md:text-base text-center">{user?.displayName}</p>
             </div>
              
              <button onClick={handleLogOut} className="btn rounded-lg md:rounded-full w-12 md:w-24 text-[#ffd485]  text-xs lowercase md:text-base   border-[#ffd485] bg-black">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg text-xs md:text-base  md:rounded-full w-12 md:w-24 text-[#ffd485] bg-black border-[#ffd485] "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
