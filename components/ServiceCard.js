/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ServiceCard({ item }) {
  return (
    <div className="card bg-blue-100">
      <Link href={`/service/${item.slug}`}>
        <a>
          <img src={item.image} alt="infoimg" className="rounded shadow" />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/service/${item.slug}`}>
          <a>
            <h1 className="font-bold text-lg text-blue-900 py-2">
              {item.title}
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
}
