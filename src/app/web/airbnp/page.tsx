"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AirbnpPage = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return <section className="flex flex-col max-w-[560px] px-3">
    <h1>AirbnpPage</h1>
  </section>;
};

export default AirbnpPage;
