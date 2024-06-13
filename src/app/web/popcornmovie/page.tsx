"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PopcornMoviePage = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <section className="flex flex-col max-w-[560px] px-3">
      <h1>PopcornMoviePage</h1>
    </section>
  );
};

export default PopcornMoviePage;
