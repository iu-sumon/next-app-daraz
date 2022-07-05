import React from 'react';
import data from '../public/data'
import Link from 'next/link';
import Image from 'next/image';
const Items = () => {

    const items = data.map((i) => {
        return i;
    })
    const item = items[0];

    return (
        <div>
            <div>
                <div
                   
                    className="card w-[350px] mx-auto shadow border my-5 ">
                    <figure className="px-10 pt-10">
                        {/* <Image src={item.image} alt="Shoes" className=" w-[400px] h-[400] rounded-xl" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-center uppercase">{item.name}</h2>

                        <p className='text-center text-xl'><span >${item.price}</span></p>
                        <div className="rating mx-auto">
                           <div>
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                        </div>


                        <div className="card-actions mt-3 mx-auto">

                           <Link href={`/cart/${item.id}`} passHref><button className="btn bg-lime-500 rounded-full px-10">Add to cart</button></Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;