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
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="">Promo</a>
            </li>
            <li>
              <Link href="/products">Product</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl font-black text-[#303459]">
          Uniq<span className="text-[#FE9345]">Soft</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#303459] font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="">Promo</a>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <Link href="/wishlist">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Link>
        <Link
          href="/login"
          className="btn bg-[#FE9345] rounded-full text-white px-6"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
