import Container from "@/containers/Container";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/Preview.png";
import Link from "next/link";
import Button from "@/components/ui/Button";

const AboutPage = () => {
  return (
    <Container className="flex flex-col items-start justify-start gap-10 p-5 py-10">
      <div className="aspect-video w-[300px] mx-auto object-cover bg-gray-200 dark:bg-gray-600 rounded-lg drop-shadow-2xl overflow-hidden relative">
        <Image
          src={logo.src}
          alt="shopspot"
          fill
          className="object-cover w-full"
        />
      </div>
      <section className="flex flex-col gap-2 ">
        <h1 className="text-lg capitalize font-semibold text-wrap ">
          Welcome to ShopSpot - Your Ultimate Marketplace Experience
        </h1>
        <p className="text-neutral-900 dark:text-neutral-200">
          At ShopSpot, we are dedicated to providing a seamless and enjoyable
          shopping experience for our users. With a wide range of products from
          top brands, unique items from independent sellers, and exclusive
          deals, ShopSpot is your one-stop destination for all your shopping
          needs.
        </p>
      </section>
      <section className="flex flex-col gap-2 ">
        <h2 className="text-lg capitalize font-semibold text-wrap ">
          Our Vision
        </h2>
        <p className="text-neutral-900 dark:text-neutral-200">
          Our vision at ShopSpot is to revolutionize the way people shop online.
          We strive to create a platform that not only offers convenience and
          variety but also fosters a sense of community and connection among our
          users.
        </p>
      </section>
      <section className="flex flex-col gap-2 ">
        <h2 className="text-lg capitalize font-semibold text-wrap ">
          Why Choose ShopSpot?
        </h2>
        <ul className="text-neutral-900 dark:text-neutral-200 decoration-dashed list-inside list-disc space-y-1">
          <li>
            Wide Range of Products: From fashion and beauty to electronics and
            home decor, ShopSpot offers a diverse selection of products to cater
            to every taste and preference.
          </li>
          <li>
            Secure Transactions: Your security is our top priority. Shop with
            confidence knowing that your transactions are safe and protected.
          </li>
          <li>
            Personalized Recommendations: Discover new products tailored to your
            interests and preferences with our personalized recommendation
            feature.
          </li>
          <li>
            Support Local Businesses: ShopSpot supports local businesses and
            independent sellers, giving them a platform to showcase their
            products to a wider audience.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2 ">
        <h2 className="text-lg capitalize font-semibold text-wrap ">
          Tips for Using ShopSpot as a source of Income:
        </h2>
        <ul className="text-neutral-900 dark:text-neutral-200 decoration-dashed list-inside list-decimal space-y-1">
          <li>
            Create an{" "}
            <Link
              href={process.env.NEXT_DASHBOARD_URL!}
              className="text-green-500"
              target="_blank"
            >
              Account
            </Link>
            : Sign up for a ShopSpot account to create your store, add your
            exclusive products, and track your orders.
          </li>
          <li>
            Explore Categories: Browse through our categories to discover new
            products and find exactly what you're looking for.
          </li>
          <li>
            Check for Deals: Keep an eye out for special promotions and
            discounts to get the best value for your money.
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col items-start justify-start gap-5">
        <p className="text-neutral-900 dark:text-neutral-200">
          Experience the future of online shopping with{" "}
          <span className="text-green-500 font-bold">ShopSpot</span>. Happy
          Shopping!
        </p>
        <Link
          href={process.env.NEXT_DASHBOARD_URL!}
          target="_blank"
          className="text-white bg-green-500 capitalize font-bold mx-auto px-4 py-3 hover:scale-110 transition-all rounded-full text-lg drop-shadow-2xl"
        >
          build your own market
        </Link>
      </section>
    </Container>
  );
};

export default AboutPage;
