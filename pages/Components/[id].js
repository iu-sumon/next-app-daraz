import React, { useState } from 'react';
import data from '../../public/data'
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
const Single = () => {
    const [quantity, setQuantity] = useState()
    const router = useRouter()
    const { id } = router.query;
    const res = data.find((item) => item.id == id)


    return (
        <>
            <Header></Header>
            <div className='bg-[#677E81] py-5  px-10 h-screen '>
                <h1 className='text-3xl uppercase text-white font-semibold p-5'>Shopping Cart</h1>


                <div className=' flex gap-5'>

                    <div className="overflow-x-auto">

                        <table className="table md:w-[1000px] ">

                            <thead>
                                <tr>

                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-lg">
                                                <img src={res.image} />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{res.name}</td>
                                    <td>
                                        <select
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}

                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                        </select>
                                    </td>
                                    <td>{res.price}</td>
                                    <td><button className="btn btn-xs btn-warning">Delete</button></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div>

                        <div>
                            <div className=" w-72  bg-base-300 rounded-lg">

                                <div className="card-body">

                                    <h2 className="card-title">SubTotal: {res.price * parseInt(quantity)}$</h2>

                                    <div className="card-actions">

                                        <button className="btn  bg-lime-500 uppercase w-full">check out</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Single;