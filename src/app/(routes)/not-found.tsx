import Container from "@/containers/Container";
import Image from "next/image";
import React from "react";
import not_found_layout from "../../../public/images/not-found-layout.svg";
import not_found_content from "../../../public/images/not-found-content.svg";
import Link from "next/link"; 
const NotFound = () => {
  return (
    <Container className="w-full my-0 min-h-[500px] flex flex-wrap items-center justify-between  relative gap-10 lg:gap-0 py-10 lg:py-0">
      <div className="w-full lg:w-[50%] relative z-20 flex flex-col items-start justify-start gap-3 p-5 min-h-fit lg:min-h-[500px]">
        <h1 className=" text-7xl lg:text-9xl font-extrabold font-mono">
          OOPS ..
        </h1>
        <p className="text-2xl lg:text-3xl font-semibold text-left">
          Page not found
        </p>
        <p className="mt-5 text-lg lg:text-2xl text-gray-500 dark:text-gray-300 max-w-[70%] ">
          The page you are looking for doesn’t exist or any other error
          occurred, go back to home page.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-start gap-5">
          <Link
            href={"/"}
            className="px-4 py-3 hover:scale-110 transition-all rounded-full text-black bg-white dark:bg-white dark:text-black capitalize text-lg font-semibold"
          >
            go back
          </Link>
          <Link
            href={process.env.NEXT_DASHBOARD_URL!}
            target="_blank"
            className="px-4 py-3 hover:scale-110 transition-all rounded-full  bg-green-500  text-white capitalize text-lg font-semibold"
          >
            create your market
          </Link>
        </div>
      </div>
      <Image
        src={not_found_layout.src}
        width={100}
        height={100}
        alt="l"
        className="min-w-[500px] h-full absolute top-0 right-0"
      />
      <div className="w-full lg:w-[50%] flex items-center justify-center overflow-hidden h-full aspect-video relative">
        <Image
          src={not_found_content.src}
          fill
          alt="l"
          className=" relative z-10"
        />
      </div>
    </Container>
  );
};

export default NotFound;
