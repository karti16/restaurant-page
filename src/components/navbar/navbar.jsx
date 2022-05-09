import { menuItems } from './menuItems';
import { Link } from 'react-router-dom';
import { VscMenu } from 'react-icons/vsc';

export const Navbar = () => {
  return (
    <nav className="relative  mx-auto p-4  flex items-center justify-between">
      <div className="shrink-0">
        <Link to="/">
          <img className="h-8" src="./img/icon.svg" alt="" />
        </Link>
      </div>

      <ul className="flex flex-row space-x-6 w-auto ml-auto">
        {menuItems.map((data) => {
          return (
            <li
              className="capitalize text-gray-500 hover:text-white hover:bg-kartblue p-2 rounded-md"
              key={data.item}
            >
              <Link to={data.url}>{data.item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
