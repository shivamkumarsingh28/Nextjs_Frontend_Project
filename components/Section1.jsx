import React from 'react';
import { section1data } from './section1data';
import Image from 'next/image'


const Section1 = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
 
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {section1data.map((data, index) => {
        return(
            <div key={index} className="flex max-w-xl flex-col items-start justify-between">
      <article>
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-gray-500">{data.date}</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{data.tag}</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {data.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{data.discription}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
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
      </article>
      </div>
      )})}
    </div>

    
  </div>
</div>
  );
};

export default Section1;