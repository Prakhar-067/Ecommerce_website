import React from 'react';
import './Card.css'; 
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const BASE_URL = "https://backend-eta-seven-18.vercel.app";
    return (
        <div className="card">
            <img src={`${BASE_URL}/${product.image}`} alt={product.title} className="card-image" />
            <div className="card-details">
                <h2 className="card-title">{product.name}</h2>
               
                <p className="card-price">₹{product.price}</p>
                <Link className="card-button" to={`/products/${product._id}`} >
                Shop Now</Link>
            </div>
        </div>
    );
};

export default Card;

