import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="w-full h-[600px]" alt='' />

                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://media.istockphoto.com/photos/pair-of-keds-picture-id1048636028?k=20&m=1048636028&s=612x612&w=0&h=kZVQ8vFHGA-ndylZDvlxE3FICMLNva-92Aa6xU8MBqg=" alt='' className="w-full h-[600px]" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://media.istockphoto.com/photos/back-of-pair-brown-leather-keds-picture-id1309922348?k=20&m=1309922348&s=612x612&w=0&h=ediyG23G3JJ-wPH13waCObMgbNRKOoucfgrWom3CHyM=" className="w-full h-[600px]" alt='' />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-300 ring-primary">1</a>

                <a href="#item2" className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">2</a>
                <a href="#item3" className="text-center text-white text-xl bg-lime-500 leading-tight z-10 rounded-full w-8  h-8 border-2 border-white cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-primary">3</a>

            </div>
        </div>
    );
};

export default Banner;