import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar bg-white px-10 lg:px-32 fixed z-10 top-0 inset-x-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a href="">Promo</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          </ul>
        </div>
        <a className="text-xl font-black text-[#303459]">Uniq<span className='text-[#FE9345]'>Soft</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#303459] font-bold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="">Promo</a>
          </li>
          <li>
            <a>Product</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        {/* <a href=''>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </a> */}
        <Link href="/login" className='btn bg-[#FE9345] rounded-full text-white px-6'>
          Login
        </Link>
      </div>
    </div>
  );
}
