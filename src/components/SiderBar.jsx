import React from 'react'
import { SideBarData } from './SidebarData'
import { Link } from 'react-router-dom'

const SiderBar = () => {
  return (
    <ul className='side_bar-links'>
        {SideBarData.map((data, key) => {
            return <Link to={data.link} key={key} className='d-flex' style={{listStyleType: "none", gap:"10px"}}>
                <li>
                    <img src={data.icon} alt="social-icon" />
                </li>
                <li>{data.title}</li>
            </Link>
        })}
    </ul>
  )
}

export default SiderBar