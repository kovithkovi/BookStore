
import React from 'react'

function Cards({ item }) {
  const categoryLength = item.category.length;
  const categoryPaddingClass = categoryLength > 10 ? "p-5" : "";

  return (
    <div>
      <div className="card bg-base-100 w-92 shadow-xl mt-2 hover:scale-105 duration-200 mt-6" style={{ height: "400px" }}>
        <figure>
          <img src={item.image} alt="Shoes" className="h-48 w-full object-cover"/>
        </figure>
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title">
            {item.name}
            <div className={`badge badge-secondary ${categoryPaddingClass}`}>
              {item.category}
            </div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between mt-2">
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-3">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-3">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
