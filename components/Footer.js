/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col justify-center items-center">
        <div className="px-4 flex justify-between items-center h-40 bg-blue-300 w-full">
          <div>
            <Link href="/">
              <a className="flex text-lg font-bold text-black">
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
          </div>
          <div>
            <p>Contact Information</p>
            <p>Email Address</p>
          </div>
          <div>Forum</div>
          <div>Social Media Links</div>
        </div>
        <div className="text-black">
          <p>Copyright &copy; 2022 ASTRA</p>
        </div>
      </footer>
    </div>
  );
}
