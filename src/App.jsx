import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CampaignTable from './components/CampaignTable';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from './components/Button';
import SiderBar from "./components/SiderBar"
import NewCampaign from './components/NewCampaign';
import SingleCampaign from './components/SingleCampaign';
import EditCampaign from './components/EditCampaign';
import Home from './components/Home';

const App = () => {

  const API_URL = "https://infinion-test-int-test.azurewebsites.net/api/Campaign"; 
  const [campaignList, setCampaignList] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await axios.get(API_URL);
            setCampaignList(response.data);
          }
          catch (err){
            console.log(err);
          }
        }
        fetchData();
    }, []);

  const handleDelete = (id) => {
    const listItems = campaignList.filter((item) => item.id !== id);
    setCampaignList(listItems);
  }

  return (
    <main className='d-flex'>
        <div className='side_bar_container d-flex flex-column px-4 pt-4' style={{gap: "60px"}}>
            <div className="side_bar-brand-container d-flex">
              <span className="side_bar-brand">
                <img src="../images/Vector.png" alt="" />
              </span>
              <span className="side_bar-text">
                <img src="../images/Scrutz.png" alt="" />
              </span>
            </div>
            <div className="side_bar-content d-flex flex-column">
              <Link to="/newCampaign">
                <Button />
              </Link>
              <div className="side_bar-links-container">
                <SiderBar />
              </div>
            </div>
            <div className="side_bar-help-content mt-5">
              <div className="d-flex flex-column">
                <span className="d-flex flex-column align-items-center">
                  <img src="../images/help.png" alt="" width="24" height='24' />
                  <span>Need Help</span>
                  <small className="text-center">We'are readily available to provide help</small>
                </span>
                <button className="btn btn-outline-success mt-3">Get help</button>
              </div>
            </div>
        </div>
        <div className="d-flex flex-column" style={{width: "80%"}}>
            <header className="header-container justify-content-between" style={{width: "93%"}}>
              <span className="search-box d-flex bg-white border">
                <input type="text" placeholder="Search..."  className="w-100 form-control border-0"/>
                <img src="../images/ic_baseline-search.png" alt="" />
              </span>
              <span className="notification-box col-2">
                <figure className="mb-0 d-flex align-items-center col-2">
                  <img src="../images/Vector (8).png" alt="notification"/>
                </figure>
                <span className="col-10 d-flex justify-content-end" style={{gap: "12px"}}>
                  <figure className="mb-0">
                    <img src="../images/image 16.png" alt="notification"/>
                  </figure>
                  <span className="d-flex align-items-center">
                    <small>Big Tech</small>
                  </span>
                  <figure className="mb-0 d-flex align-items-center">
                    <img src="../images/Vector (9).png" alt="notification"/>
                  </figure>
                </span>
              </span>
            </header>
            <div className="d-flex flex-column side_bar-main">
              <div className="content mx-auto" style={{width: "87%"}}>
                  <Routes>
                  <Route path="/" element={<Home />}></Route>
                    <Route path="/newCampaign" element={<NewCampaign campaignList={campaignList} setCampaignList={setCampaignList} />}></Route>
                    <Route path="/campaign/:id" element={<SingleCampaign />} />
                    <Route path="/edit/:id" element={<EditCampaign />} />
                    <Route path="/Campaign" element={<CampaignTable campaignList={campaignList} handleDelete={handleDelete} />} />
                  </Routes>
              </div>
            </div>
          </div>
    </main>
  );
};

export default App;


































