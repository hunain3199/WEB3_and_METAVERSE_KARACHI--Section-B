import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from 'react';
import 'animate.css';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
   <div>
      <Head>
        <title>PanaverseDao</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      </Head>
      <nav className="w-full bg-gray-800 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <img src="/panaverse.png" alt="panaverse_logo" className="h-16 sm:h-16"/>
              <a href="#">
                <h2 className="text-2xl md:text-3xl text-white font-bold">PANAVERSE DAO</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white text-xl">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="/about">
                    About US
                  </Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="/contact">
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className=" bg-red-800 text-center shadow-inner shadow-red-200">
        <h1 className="pt-4 sm:p-4 text-2xl sm:text-6xl font-bold text-white">
        Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <p className="pb-4 mt-8 sm:text-2xl font-bold px-2">Getting Ready for the Next Generation and Future of the Internet  <br />  Join a 13 Trillion Dollar Industry with 5 Billion Users</p>
      </div>
      <h1 className="animate__animated animate__rollIn text-3xl mb-8 sm:mb-8 sm:text-4xl md:text-5xl text-center text-amber-500 mt-8 font-bold">Program of Studies</h1>
      
      <div id="flexx" className="flex flex-col lg:flex-col md:text-center bg-red-200">
          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-r-none order-1 lg:order-1 lg:w-full ">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
              <h1 className="text-2xl animate__animated animate__rollIn animate__delay-2s">Core Courses (Common in All Specializations):</h1>
              <div className="ml-5 text-white">
                
                
              </div>
            </div>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter I (Core) CS-101 :
                 <span className="text-red-900"> Object-Oriented Programming using TypeScript</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className=" ml-3 sm:-ml-6">
                Quarter II (Core) W2-201 :
                 <span className="text-red-900">Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</span>
                </span>
              </li>
              
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter III (Core) $-101 :
                <span className="text-red-900"> Dollar Making Bootcamp - Full-Stack Template and API Product Development</span>
                </span>
              </li>
            </ul>
           
          </div>

          <div className="w-full flex-1  p-8 rounded-3xl sm:w-96 lg:rounded-l-none lg:rounded-r-none order-2 lg:mt-0 lg:order-2 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
            <a
              href=""
              className="flex justify-center items-center bg-red-900 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Specialized Tracks

              
            </a>
              
              
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-3s">Web 3.0 (Blockchain) and Metaverse Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter IV : <span className="text-red-900"> Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</span>
                </span>
              </li>
             
            </ul>
            
          </div>
          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-l-none order-3 lg:order-3 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
             
             
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-4s">Artificial Intelligence (AI) and Deep Learning Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
               
                <span className="ml-3">
                Quarter IV : <span className="text-red-900">Developing Planet-Scale Intelligent APIs and Python Programming</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Deep Learning and MLOps</span>
                </span>
              </li>
              
            </ul>
           
          </div>
          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-l-none order-4 lg:order-4 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
             
             
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-5s">Cloud-Native Computing Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
               
                <span className="ml-3">
                Quarter IV : <span className="text-red-900">Certified Kubernetes Application Developer (CKAD)</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Developing Multi-Cloud APIs using CDK for Terraform</span>
                </span>
              </li>
              
            </ul>
           
          </div>
          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-l-none order-5 lg:order-5 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
             
             
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-5s">Ambient Computing and IoT Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
               
                <span className="ml-3">
                Quarter IV : <span className="text-red-900">Ambient Computing with Voice Assistants and Matter Protocol Devices
</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Embedded Programming using C and Rust</span>
                </span>
              </li>
              
            </ul>
           
          </div>


          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-l-none order-6 lg:order-6 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
             
             
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-5s">Genomics and Bioinformatics Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
               
                <span className="ml-3">
                Quarter IV : <span className="text-red-900">Python for Biologists</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Bioinformatics with Python</span>
                </span>
              </li>
              
            </ul>
           
          </div>
          <div className="w-full flex-1  mt-8 p-8  rounded-3xl sm:w-96 lg:rounded-l-none order-7 lg:order-7 lg:w-full md:items-center">
            <div className="mb-7 pb-7 flex items-center border-b border-amber-400">
             
             
            </div>
            <h1 className=" text-2xl mb-3 animate__animated animate__rollIn animate__delay-5s">Network Programmability and Automation Specialization</h1>
            <ul className="mb-7 font-semibold text-gray-900">
              <li className="flex text-lg mb-2">
               
                <span className="ml-3">
                Quarter IV : <span className="text-red-900">CCNA 200-301 Certification</span>
                </span>
              </li>
              <li className="flex text-lg mb-2">
                
                <span className="ml-3">
                Quarter V : <span className="text-red-900">Network Programmability and Automation</span>
                </span>
              </li>
              
            </ul>
           
          </div>
        </div>
    </div> 
    </>
  );
}
