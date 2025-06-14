"use client"
import { Badge } from 'antd';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import Login from '@/app/components/login/Login';

export default function Navbar() {

        const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ['banner', 'shop', 'aboutus', 'blog'];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop - 80 &&
                        scrollPosition < offsetTop + offsetHeight - 80
                    ) {
                        setActiveLink(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


      const openModal = () => {
    document.getElementById('my_modal_3')?.showModal();
  };


  const navMenu = () => (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/shop">Shop</Link></li>
      <li><Link href="/aboutus">About Us</Link></li>
      <li><Link href="/blog">Blog</Link></li>
    </>
  );

  return (
    <div className=''>
      <div className="navbar lg:px-32  bg-transparent absolute z-10">
        <div className="navbar-start">
          <Link href="/" className='flex items-center gap-2'>
            <Image src={logo} alt='' width={40} />
            <h2 className='lg:text-2xl text-xl font-bold'>Fresh Harvests</h2>

          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu()}
          </ul>
        </div>

        {/* Right Side for Desktop */}
        <div className="navbar-end hidden lg:flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <MdOutlineFavorite className='text-white w-5 h-5' />
            <p className='text-white font-medium'>Favorites</p>
          </div>
          <div className="flex items-center gap-2">
            
            <Badge count={5}>
                    <FaCartShopping  className='text-white w-5 h-5' />
            </Badge>
            <p className='text-white font-medium'>Carts</p>
          </div>
          <button onClick={openModal} className="text-left btn bg-transparent shadow-none text-white">Sign in</button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="dropdown lg:hidden navbar-end">
            <Link href={"/"}>
                <Badge count={5}>
                    <FaCartShopping className='w-5 h-5' />
                </Badge>
            </Link> 
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-56 w-52 p-2 shadow">
            {navMenu()}
            <li>
              <Link href="/favorites" className="flex items-center gap-1">
                <MdOutlineFavorite />
                Favorites
              </Link>
            </li>
            <li>
              <button onClick={openModal} className="text-left">Sign in</button>
            </li>
          </ul>
        </div>
      </div>


      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-md mx-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Login />
        </div>
      </dialog>

    </div>
  )
}
