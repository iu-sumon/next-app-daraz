import React from 'react';
import Image from 'next/image';
 
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <Image src="/1.avif"  alt='' width='1500' height='500'/>

                </div>
                <div id="item2" className="carousel-item w-full">
                    <Image src="/2.jpg" alt=''   width='1500' height='500' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <Image src="/3.jpg"  alt=''  width='1500' height='500'/>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">

                <a className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-300 ring-primary" href="#item1">1</a>

                <a className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-300 ring-primary" href="#item2">2</a>

                <a className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-300 ring-primary" href="#item3">3</a>
 
            </div>
        </div>
    );
};

export default Banner;