import React from 'react'
import { section2data } from './section2data';
import Image from 'next/image'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

export const Section2 = () => {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("#box", {});
      // gsap.fromTo("#box", {y:0}, {y:10});
      gsap.fromTo("#box", {x: 0}, {x: 10});
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl lg:mx-0">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h1>
      <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {section2data.map((data,index) => {
      return(
        <div id='box' key={index} className={`flex max-w-xl flex-col items-start justify-between rounded-lg p-8 ${data.style }`}>

          <article>
          <div className="relative mt-8 flex items-center gap-x-4 text-center">
          <Image src={data.profile} alt="" width={50}
      height={50} className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                {data.name}
              </a>
            </p>
            <p className="text-gray-600">{data.jobtitle}</p>
          </div>
        </div>

            <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {data.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{data.content}</p>
        </div>
          </article>
          
        </div>
      )
    })}


      </div>
      </div>
      </div>
  );
};


export default Section2;
