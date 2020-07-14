import React from 'react';
import Head from "next/head";
import FrseSupermario from "../src/components/FrseSupermario/FrseSupermario";

const FrsePixelarts = () => {
  return (
    <div>
      <Head>
        <title>FRSE Pixelart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FrseSupermario/>
      </main>
    </div>
  );
};

export default FrsePixelarts;
