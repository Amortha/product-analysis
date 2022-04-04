import React from 'react';
import './ReviewCart.css';

const ReviewCart = ({ reviews }) => {
    const { name, img, review, rateing
} = reviews;
    console.log(name)
    return (
        <div className='cart'>
            <h3 className='review'><small>{review}</small></h3>
            <h2 className='name'>--{name}</h2>
            <h3 className='rateing'>Rateing: <small>{rateing}</small></h3>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default ReviewCart;