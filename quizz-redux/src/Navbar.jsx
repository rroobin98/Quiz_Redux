import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-bold text-lg h-16">
      <h1 className="text-2xl pl-10">The Quiz </h1>
      <ul className="flex gap-10 mr-10 cursor-pointer">
        <li className="hover:text-sky-700">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-black-400 hover:text-blue-700"
                : "text-black hover:text-blue-700"
            }
            to="/"
          >
            Take the quiz
          </NavLink>
        </li>
        <li className="hover:text-blue-700">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 hover:text-blue-400"
                : "text-black hover:text-blue-400"
            }
            to="/Admin"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
}