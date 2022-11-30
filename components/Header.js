/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div>
      <header>
        <nav className="fixed w-full flex h-12 justify-between items-center px-4 shadow-md bg-blue-300 opacity-60">
          <Link href="/">
            <a className="flex text-lg font-bold text-blue-900">
              <div>
                <img
                  src="/images/logo-astra.png"
                  alt="logo"
                  className="h-10 min-w-10"
                />
              </div>
              <h2>ASTRA</h2>
            </a>
          </Link>
          <div>
            <Link href="/">
              <a className="px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white focus:text-orange-600">
                Home
              </a>
            </Link>
            <Link href="/#Service">
              <a className="px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white focus:text-orange-500">
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white focus:text-orange-500">
                Contact
              </a>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <a className="px-3 py-2 text-black font-bold rounded-lg hover:bg-black hover:text-white focus:text-orange-500">
                Login
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
