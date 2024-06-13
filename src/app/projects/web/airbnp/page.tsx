"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const AirbnpPage = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <section className="flex flex-col max-w-[560px] px-3">
      <Head>
        <title>Airbnp</title>
      </Head>
      <h1>AirbnpPage</h1>
    </section>
  );
};

export default AirbnpPage;
