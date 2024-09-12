import React from "react";
import { Link } from "react-router-dom";

const CardService = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-700">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/bookService/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardService;
