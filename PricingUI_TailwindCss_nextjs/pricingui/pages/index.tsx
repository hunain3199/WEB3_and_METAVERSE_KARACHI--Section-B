import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className=" max-w-6xl mx-auto py-8 py-5 flex justify-between lg:px-8">
        <a href="#/" className="font-semibold text-gray-900 text-2xl pl-3 text-white">
          Pricing <span className="text-emerald-600">UI</span>
        </a>
        <nav className="">
          <ul className="flex pt-1.5 text-md lg:pt-0 lg:text-lg">
            <li className="lg:px-4">
              <a className="p-3 text-white font-semibold">About</a>
            </li>
            <li className="lg:px-4">
              <a className="p-3 text-white font-semibold">Blog</a>
            </li>
            <li className="lg:px-4">
              <a className="p-3 text-white font-semibold">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div className="text-center mx-auto max-w-md mb-14">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl text-white">
            <span className="text-emerald-600">Flexible</span> Plans
          </h1>
          <p className="text-gray-500 text-xl font-medium">
            Choose a plan that works best for you and your team
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex-1  mt-8 p-8 shadow-2xl rounded-3xl sm:w-96 lg:rounded-r-none order-2 lg:order-1 lg:w-full ">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                className="rounded-3xl w-20 h-20"
                alt=""
              />
              <div className="ml-5 text-white">
                <span className="block font-bold text-2xl">Basic</span>
                <span>
                  <span>$&thinsp;</span>
                  <span>10 </span>
                </span>
                <span>/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-semibold text-gray-500">
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  Get started with <span className="text-emerald-600">messaging</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  Flexible <span className="text-emerald-600">team meetings</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  5 TB <span className="text-emerald-600"> cloud storage</span>
                </span>
              </li>
            </ul>
            <a
              href=""
              className="flex justify-center items-center bg-emerald-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                alt=""
                className="ml-2 bg-emerald-600"
              />
            </a>
          </div>

          <div className="w-full flex-1  p-8 shadow-2xl rounded-3xl sm:w-96 lg:rounded-l-none lg:rounded-r-none order-1 lg:mt-0 lg:order-2 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                className="rounded-3xl w-20 h-20"
                alt=""
              />
              <div className="ml-5 text-white">
                <span className="block font-bold text-2xl">Startup</span>
                <span>
                  <span>$&thinsp;</span>
                  <span>24 </span>
                </span>
                <span>/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-semibold text-gray-500">
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  All features in <span className="text-emerald-600">Basic</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  Flexible <span className="text-emerald-600">call scheduling</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  15 TB <span className="text-emerald-600"> cloud storage</span>
                </span>
              </li>
            </ul>
            <a
              href=""
              className="flex justify-center items-center bg-emerald-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                alt=""
                className="ml-2 bg-emerald-600"
              />
            </a>
          </div>
          <div className="w-full flex-1  mt-8 p-8 shadow-2xl rounded-3xl sm:w-96 lg:rounded-l-none order-3 lg:order-3 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                className="rounded-3xl w-20 h-20"
                alt=""
              />
              <div className="ml-5 text-white">
                <span className="block font-bold text-2xl">Enterprise</span>
                <span>
                  <span>$&thinsp;</span>
                  <span>35 </span>
                </span>
                <span>/ user</span>
              </div>
            </div>
            <ul className="mb-7 font-semibold text-gray-500">
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  All features in <span className="text-emerald-600">Basic</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  Flexible <span className="text-emerald-600">call scheduling</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt=""
                />
                <span className="ml-3">
                  15 TB <span className="text-emerald-600"> cloud storage</span>
                </span>
              </li>
            </ul>
            <a
              href=""
              className="flex justify-center items-center bg-emerald-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                alt=""
                className="ml-2 bg-emerald-600"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
