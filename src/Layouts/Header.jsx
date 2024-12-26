import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import brand from "../assets/Brand.png";
import { MdDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaCartArrowDown,
  FaUserCircle,
  FaSearch,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import Topbar from "./Topbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Features/userSlice";
import { searchProducts } from "../features/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = React.useState(true);
  const [isMenu, setIsMenu] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const { totalCount } = useSelector((state) => state.carts);

  const location = useLocation();

  // retrive user from local storage
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };
  // call getUser
  useEffect(() => {
    getUser();
  }, [location]);

  // logout user
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    dispatch(logoutUser()).then((res) => {
      navigate("/login");
    });
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.trim();
    if (query === "") {
      return;
    }
    // Dispatch the search action
    dispatch(searchProducts({ query }));

    // Navigate to the search results page (you can use a dedicated search results page)
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg">
      <header className="">
        <Topbar />
        <div className="container mx-auto md:p-1 sm:px-4 sm:py-2 flex justify-between items-center">
          <Link to="/" className="flexCenter gap-1">
            <div className="rounded-full h-10 w-10 bg-[#1D242D] flexCenter">
              <img src={brand} alt="BM Shop" className="size-6" />
            </div>
            <div className="  md:text-xl sm:text-base font-extrabold text-textColor">
              Bhuiyan <span className="text-primary">Motors</span>
            </div>
          </Link>
          {/* Search bar  */}
          <div className="flexCenter gap-2 ">
            <input
              type="text"
              onChange={handleSearchChange}
              className={`sm:w-28 md:w-60 lg:w-96 border-2 border-section md:p-2 sm:p-2 rounded-3xl bg-section focus:outline-none focus:outline-primary ${
                isSearch ? `flex` : `hidden`
              }`}
              placeholder="Search..."
            />
            <FaSearch
              className="-ml-10 cursor-pointer text-primary"
              onClick={() => setIsSearch(!isSearch)}
              size={24}
            />
          </div>
          {/* navigationPanel  */}
          <nav className="sm:hidden lg:flex justify-around gap-8 bg-section p-3 rounded-3xl text-xl font-light text-primary">
            {user ? (
              <>
                {/* Dashboard  */}
                {user.role === "admin" && (
                  <Link
                    to="/dashboard/dash"
                    className="flexCenter"
                    title="Dashboard"
                  >
                    <MdDashboard size={24} />
                  </Link>
                )}
                {/* User  */}
                <Link to="/profile" className="flexCenter" title="User">
                  <FaUserCircle size={24} />
                </Link>
                {/* Cart  */}
                <Link to="/cart" className="flexCenter relative" title="Carts">
                  <span className="bg-red-600 text-white size-4 text-sm rounded-full flexCenter absolute -top-2 -right-2">
                    {totalCount}
                  </span>
                  <FaCartArrowDown size={24} />
                </Link>
                {/* signOut */}
                <Link
                  onClick={handleLogout}
                  className="flexCenter"
                  title="Sign out"
                >
                  <FaSignOutAlt size={24} />
                </Link>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link to="/login" className="flexCenter" title="Sign In">
                  <FaSignInAlt size={24} />
                </Link>
              </>
            )}
          </nav>
          {/* Mobile Navigation  */}
          <nav className="sm:flex lg:hidden relative">
            <GiHamburgerMenu
              size={24}
              onClick={() => setIsMenu(!isMenu)}
              className={`cursor-pointer ${
                isMenu
                  ? `rotate-90 transition-transform duration-500`
                  : `rotate-0 transition-transform duration-500`
              }`}
            />
            <ul
              className={`absolute top-20 -right-8 z-50 space-y-2 bg-secondary  text-lg font-light px-6 py-4 rounded-3xl flexCenter flex-col 
      transform transition-all duration-500 ease-in-out ${
        isMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
              style={{ transformOrigin: "top right" }}
            >
              {user ? (
                <>
                  {/* Dashboard  */}
                  {user.role === "admin" && (
                    <Link
                      to="/dashboard/dash"
                      className="flexCenter"
                      title="Dashboard"
                    >
                      <MdDashboard size={24} />
                    </Link>
                  )}
                  {/* User  */}
                  <Link to="/profile" className="flexCenter" title="User">
                    <FaUserCircle size={24} />
                  </Link>
                  {/* Cart  */}
                  <Link
                    to="/cart"
                    className="flexCenter relative"
                    title="Carts"
                  >
                    <span className="bg-red-600 text-white size-4 text-sm rounded-full flexCenter absolute -top-2 -right-2">
                      {totalCount}
                    </span>
                    <FaCartArrowDown size={24} />
                  </Link>
                  {/* signOut */}
                  <Link to="/login" className="flexCenter" title="Carts">
                    <FaSignOutAlt size={24} />
                  </Link>
                </>
              ) : (
                <>
                  {/* Sign In */}
                  <Link to="/login" className="flexCenter" title="Carts">
                    <FaSignInAlt size={24} />
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {/* BottomBar */}
      <div className=" bg-extra backdrop-blur-md text-slate-400 ">
        <div className="container mx-auto md:p-1 sm:px-4 sm:py-2 flexCenter gap-6">
          <Link to="/" className="flexCenter" title="Home">
            Home
          </Link>
          <Link to="/product" className="flexCenter" title="Products">
            Products
          </Link>

          <Link to="/" className="flexCenter" title="Categorys">
            Categorys
          </Link>
          <Link to="/contact" className="flexCenter" title="Contact">
            Contacts
          </Link>
          <Link to="/about" className="flexCenter" title="about">
            Abouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
