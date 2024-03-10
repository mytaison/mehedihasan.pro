"use client";
import React from "react";
import ComingSoon from "../shared/ComingSoon";
import useHash from "@/app/hooks/useHash";

const Blog = () => {
  // console.log(useHash());

  return (
    <section id="blog" className="container mx-auto">
      <div className="w-full p-4 mt-[102px] md:pt-[102px] md:mt-0 min-h-[calc(100dvh-87.19px)] lg:min-h-[calc(100dvh-102px)] flex flex-col gap-16 lg:gap-8">
        <div className="xl:pt-5 2xl:pt-10">
          <h1 className="text-3xl tracking-widest">Blog</h1>
          <h5 className="">Maybe a developer&apos;s notebook</h5>
          <ComingSoon />
        </div>
      </div>
    </section>
  );
};

export default Blog;
