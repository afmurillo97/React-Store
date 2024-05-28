import { 
  AtSymbolIcon, 
  ClipboardDocumentCheckIcon, 
  WrenchScrewdriverIcon, 
  UserCircleIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';


const Navbar = () => {

  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4 text-white';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-red-400 shadow-md'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to = '/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/Clothes'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/Electronics'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/Furnitures'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/Toys'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to = '/Others'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60  flex items-center'>
          <span>afmurillo97</span>
          <AtSymbolIcon className='size-5'/>
          <span>gmail.com</span>
        </li>
        <li className='flex items-center'>
          <NavLink 
            to='/my-orders'
            className={( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            <ClipboardDocumentCheckIcon className='size-4'/>
            <span>My Orders</span>
          </NavLink>
        </li>
        <li className='flex flex-col items-center'>
          <NavLink 
            to='/my-account'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            <WrenchScrewdriverIcon className='size-4'/>
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className = {( {isActive} ) => 
              isActive ? activeStyle : undefined
            }
          >
            <UserCircleIcon className='size-4'/>
            <span>Sign In</span>
          </NavLink>
        </li>
        <li className='relative cursor-pointer'>
          <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center text-xs'>
            {context.count}
          </span>
          <ShoppingBagIcon className='size-7'/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;