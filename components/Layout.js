/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
// import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Astra' : 'Astra'}</title>
        <meta name="description" content="Online Workplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
