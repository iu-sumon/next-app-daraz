import React from 'react';
import data from '../public/data'
const Items = () => {

    const prod1 = data.map((x) => {
        return x;
    })
    const prod = prod1[0];

    return (
        <div>
            <div>
                <div
                    data-aos="zoom-in"
                    className="card shadow border ">
                    <figure className="px-10 pt-10">
                        <img src={prod.image} alt="Shoes" className=" w-[300px] h-[300] rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold text-center uppercase">{prod.name}</h2>

                        <p className='text-center text-xl'><span >${prod.price}</span></p>
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
                            <button className="btn bg-blue-900 rounded-full px-10">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;