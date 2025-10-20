
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {

  const user = false;

  const handleLogout = () => {
    console.log('logout')

  };


  const navLinks = (
    <>
      {/* Home navbar  */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
      </li>


      <li>
        <NavLink
          to="/MoreAboutMe"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          About Me
        </NavLink>
      </li>

      {/* projects navbar  */}
      <li>
        <NavLink
          to="/projectAll"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Projects
        </NavLink>

      </li>
      <li><Link to="/">  </Link></li>
      {/* blogs navbar  */}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Blogs
        </NavLink>
      </li>


      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          Contact
        </NavLink>
      </li>



      {/* <li ><a className=""> <Link to='/dashboard'> Dashboard  </Link> </a></li> */}
    </>
  );

  return (
    //todo { if i going to use this {fixed top-0 z-50  navbar is came responsive } <div className="w-full fixed top-0 z-50 shadow-md bg-black bg-opacity-70 text-white backdrop-blur-md"> 

    <div className=" w-full z-50 shadow-md bg-white  text-black">

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="navbar py-2">

          {/* Navbar Start (Logo + Dropdown for Mobile) */}
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 z-10">
                {navLinks}
              </ul>
            </div>
            <Link
              to="/"
              className="hidden md:inline-block px-4 py-2 bg-yellow-400 text-black text-xl normal-case font-medium sans"
            >
              Sagor Cowdhury
            </Link>

          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              {navLinks}
            </ul>
          </div>

          {/* Navbar End (Auth Buttons) */}
          <div className="navbar-end flex items-center gap-3">




            <Link to='/dashboard/cart'>
              <button className="btn bg-white text-black">
                <FaCartPlus /> <div className="badge badge-sm badge-secondary">+</div>
              </button>
            </Link>




            {user ? (
              <div className="dropdown dropdown-end">
                <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'} alt="User Avatar" />
                  </div>
                </button>
                <ul className="menu menu-sm dropdown-content mt-3 p-3 bg-white shadow rounded-box w-64 z-20">
                  <div className="flex items-center gap-3 mb-2 border-b pb-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'} alt="User Avatar" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-black">{user?.displayName || 'Mr. Sagy'}</p>
                      {/* <p className="text-sm text-gray-500">{user?.email}</p> */}
                    </div>
                  </div>
                  <li><a className="text-black">Profile</a></li>
                  <li ><a className="text-black"> <Link to='/dashboard'> Dashboard  </Link> </a></li>
                  <li><a className="text-black">Settings</a></li>

                  <li className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 text-center">
                    <button
                      onClick={handleLogout}

                    >
                      Logout
                    </button>
                  </li>


                </ul>
              </div>
            ) : (

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login ↗
              </button>

            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
