import logo from "../../img/masala-dosa.png"
import {Link } from "react-router-dom";


function Navbar() {
  return (
    <>
    

      <nav className="bg-purple-800 text-white flex justify-between">
        <Link to="/">
        <img
          id="logo"
          className="w-13 h-14 relative left-100 py-1 bottom-3 rounded-xl mt-4 ml-6 hover:drop-shadow-xl shadow-indigo-500/40 ..."
          src={logo}
          alt="didn't load"
        ></img>
        </Link>
        <ul className="px-28 py-4 flex space-x-11 justify-end">
          <li className="cursor-pointer hover:text-blue-300">About</li>
          <Link className="cursor-pointer hover:text-blue-300" to="/login">Explore Our Services!</Link>
        </ul>
      </nav>

    </>
  );
}
export default Navbar;
