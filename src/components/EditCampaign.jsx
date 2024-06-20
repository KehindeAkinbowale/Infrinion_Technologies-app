import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const EditCampaign = () => {
const [editingCampaign, setEditingCampaign] = useState(null);
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

  const [updateKeyword, setUpdateKeyword] = useState("")

  const API_URL = "https://infinion-test-int-test.azurewebsites.net/api/Campaign";


  const handleSave = (updatedCampaign) => {
    axios.put(API_URL, updatedCampaign) // Replace with your API endpoint
      .then(response => {
        setEditingCampaign(response.data);
        // Optionally update the local campaign list here
      })
      .catch(error => console.error('Error updating campaign:', error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleKeywordChange = (e) => {
    setUpdateKeyword(e.target.value);
  };

  const addKeyword = () => {
    if (updateKeyword && !formData.linkedKeywords.includes(updateKeyword)) {
      setFormData(prevState => ({
        ...prevState,
        linkedKeywords: [...prevState.linkedKeywords, updateKeyword]
      }));
      setUpdateKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setFormData(prevState => ({
      ...prevState,
      linkedKeywords: prevState.linkedKeywords.filter(kw => kw !== keywordToRemove)
    }));
  };

  return (
    <div className='campaign-form-container d-flex flex-column'>
      <h2 className='mb-0' style={{fontSize: "20px", color: "#247B7B"}}>Edit Campaign Information</h2>
      <form>
        <div className='mb-2'>
          <label>Campaign Name:</label>
          <input type="text"
           name="campaignName"
            value={formData.campaignName} 
            className='form-control rounded-0 p-2'
            onChange={handleChange} />
        </div>
        <div>
          <label>Campaign Description:</label>
          <input type="text" 
          name="campaignDescription" 
          value={formData.campaignDescription}
           className='form-control rounded-0' 
           style={{height: "80px"}} 
           onChange={handleChange}/>
        </div>
        <div className='d-flex my-2'>
            <div>
            <label>Start Date:</label>
            <input type="date" 
            name="startDate"
            value={formData.startDate.substring(0, 10)}
            className='form-control rounded-0'
            onChange={handleChange}/>
            </div>
            <div>
            <label>End Date:</label>
            <input type="date" 
            name="endDate" value={formData.endDate.substring(0, 10)} 
            className='form-control rounded-0' 
            onChange={handleChange} />
            </div>
        </div>
        <div className='mt-3'>
          <label>Linked Keywords:</label>
          <input 
            type="text" 
            value={updateKeyword} 
            className='form-control rounded-0 keyword-form'
             style={{height: "80px"}}
             onChange={handleKeywordChange}
          />
          <button type="button" className='btn btn-success' onClick={addKeyword}>Add Keyword</button>
          <ul>
            {formData.linkedKeywords.map((kw, index) => (
              <li key={index}>
                {kw} <button type="button" onClick={() => removeKeyword(kw)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <select className='p-2 w-25 border-light-subtle mt-2' name='dailyDigest' onChange={handleChange} value={formData.dailyDigest}>
          <option value=""></option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Montly">Monthly</option>
        </select>
        <div className='d-flex mt-5' style={{gap: "16px"}}>
          <button className='btn btn-danger col-3'><small>Stop campaign</small></button>
          <button type="submit" className='btn btn-outline-success col-3' onClick={handleSave(formData)}><small>Save Information</small></button>
        </div>
      </form>
    </div>
  );
};

export default EditCampaign;
