import React from 'react'
import { CiMap } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi"
import { TfiPencilAlt } from "react-icons/tfi";

const CardBusiness = ({ business }) => {
  return (
    <div className="card w-96 h-[450px] bg-base-300 shadow-lg">
      <figure className='h-52'>
        <img
          src={business.image_url}
          className='object-cover zoom-image'
          alt={business.alias}
        />
      </figure>
      <div className="card-body flex-col justify-between">
        <h2 className="card-title">
          {business.name}
          <div className="badge badge-secondary">{business.rating}</div>
        </h2>
        <div>
          <div className='flex items-center gap-2'>
            <CiMap size={25} />
            <div className='text-sm'>{business.location.display_address.join(', ')}</div>
          </div>
          <div className='flex items-center gap-2 ml-1'>
            <GiPathDistance size={18} />
            <div className='text-sm ml-1'>{business.distance.toFixed(0)} M</div>
          </div>
          <div className='flex items-center gap-2 ml-1'>
            <TfiPencilAlt size={17} />
            <div className='text-sm ml-1'>{business.review_count} Reviews</div>
          </div>
          <div className="rating rating-md mt-2 rating-half items-center">
            {[0.1, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value, index) => (
              <input
                key={index}
                type="radio"
                name={`rating-${business.id}`}
                className={`bg-orange-400 mask mask-star-2 mask-half-${index % 2 === 0 ? '1' : '2'}`}
                checked={business.rating >= value}
              />
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className="card-actions justify-start">
            {business.categories.map((ctg, index) => (
              <div key={index} className="badge badge-outline">{ctg.title}</div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn rounded-xl bg-base-200 hover:bg-base-100 w-16 text-center">Detail</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBusiness