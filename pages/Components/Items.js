import React from 'react';

const Items = () => {
    return (
        <div className='m-10 p-10'>
            <div class="card w-80 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;