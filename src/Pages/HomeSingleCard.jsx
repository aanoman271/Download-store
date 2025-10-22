import React from "react";

const HomeSingleCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="w-full h-52 overflow-hidden object-cover"
          src={data.image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleCard;
