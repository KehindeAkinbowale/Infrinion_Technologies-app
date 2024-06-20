import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SingleCampaign = () => {
  const location = useLocation();
  const { campaign } = location.state;

  const [formData, setFormData] = useState({
    campaignName: campaign.campaignName,
    campaignDescription: campaign.campaignDescription,
    startDate: campaign.startDate,
    endDate: campaign.endDate,
    campaignStatus: campaign.campaignStatus,
    digestCampaign: campaign.digestCampaign,
    linkedKeywords: campaign.linkedKeywords,
    dailyDigest: campaign.dailyDigest
  });


  return (
    <div className='campaign-form-container d-flex flex-column'>
      <h2 className='mb-0' style={{fontSize: "20px", color: "#247B7B"}}>Campaign Information</h2>
      <form>
        <div className='mb-2'>
          <label>Campaign Name:</label>
          <input type="text"
           name="campaignName"
            value={formData.campaignName} 
            className='form-control rounded-0 p-2' readOnly  />
        </div>
        <div>
          <label>Campaign Description:</label>
          <input type="text" 
          name="campaignDescription" 
          value={formData.campaignDescription}
           className='form-control rounded-0' 
           readOnly style={{height: "80px"}} />
        </div>
        <div className='d-flex my-2'>
            <div>
            <label>Start Date:</label>
            <input type="date" 
            name="startDate"
            value={formData.startDate.substring(0, 10)}
                readOnly 
                className='form-control rounded-0'/>
            </div>
            <div>
            <label>End Date:</label>
            <input type="date" 
            name="endDate" value={formData.endDate.substring(0, 10)} 
            className='form-control rounded-0'  readOnly />
            </div>
        </div>
        <div className='mt-3'>
          <label>Linked Keywords:</label>
          <input 
            type="text" 
            value={formData.linkedKeywords} 
            className='form-control rounded-0 keyword-form'
            readOnly style={{height: "80px"}}
          />
        </div>
        <select className='p-2 w-25 border-light-subtle mt-2' name='dailyDigest' value={formData.dailyDigest}>
          <option value="">{formData.dailyDigest}</option>
        </select>
        <div className='d-flex mt-5' style={{gap: "16px"}}>
          <button className='btn btn-danger col-3'><small>Stop campaign</small></button>
          <button type="submit" className='btn btn-outline-success col-3'><small>Edit Information</small></button>
        </div>
      </form>
    </div>
  );
};

export default SingleCampaign;
