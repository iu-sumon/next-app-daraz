import React from 'react';
import data from '../../public/data'
import { useRouter } from 'next/router';
const Single = () => {
    const router = useRouter()
    const {id} = router.query;
    const res = data.find((item) => item.id == id)

    return (
        <div>
            <h1>{res.name}</h1>
        </div>
    );
};

export default Single;