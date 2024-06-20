import React from 'react'
import Button from './Button'
const Home = () => {
  return (
    <div className='d-flex flex-column' style={{gap: "65px"}}>
        <div className='d-flex justify-content-between'>
            <span className='col-2'>
                <h4>Overview</h4>
            </span>
            <div className='d-flex date_info col-9 justify-content-between'>
              <div className='date_range-container d-flex container-fluid p-0' style={{border: "0.2px solid #999999"}}>
                <div className='d-flex col-11 justify-content-between'>
                  <span className='d-flex'>
                    <figure className='m-0 d-flex align-items-center'>
                      <img src="../images/Vector (12).png" alt="" />
                    </figure>
                    <span className='d-flex align-items-center'>
                      <small className='ms-2'>Date Range</small>
                    </span>
                  </span>
                  <span className='col-8 d-flex align-items-center justify-content-center'>
                    <small className='text-muted'>Nov 1, 2022 - Nov 7, 2022</small>
                  </span>
                </div>
                <figure className="d-flex align-items-center col-1">
                    <img src="../images/Vector (9).png" alt="notification"/>
                </figure>
              </div>
              <button className='export-box justify-content-center'>
                <div className='d-flex' style={{gap: "10px"}}>
                  <figure className='mb-0'>
                    <img src="./images/Vector (13).png" alt="" />
                  </figure>
                  <span className='mb-0 d-flex align-items-center'>
                    <small className=''>Export</small>
                  </span>
                </div>
              </button>
            </div>
        </div>
        <div className='d-flex flex-column align-items-center' style={{gap: "30px"}}>
          <figure className='clip-art mb-0 d-flex flex-column align-items-center justify-content-center'>
            <img src="./images/search.png" alt="" />
          </figure>
          <span className='d-flex flex-column align-items-center'>
            <small className='mb-4'>No activity yet. Create a new campaign to get started</small>
            <Button />
          </span>
        </div>
    </div>
  )
}
export default Home