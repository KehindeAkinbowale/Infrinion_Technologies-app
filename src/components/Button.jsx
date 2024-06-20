import React from 'react'

const Button = () => {
  return (
    <button className='campaign_button d-flex justify-content-center'>
        <figure className='mb-0 d-flex align-items-center'>
            <img src="./images/Vector (11).png" alt="plus" className='img-fluid' />
        </figure>
        <span className='d-flex align-items-center mb-0'>
            <small className='mb-0 text-white'>New Campaign</small>
        </span>
    </button>
  )
}

export default Button;