import React, { useState } from 'react';
import axios from 'axios';

const NewCampaign = () => {
  const [newCamp, setNewCamp] = useState({
    campaignName: "",
    campaignDescription: "",
    startDate: "",
    endDate: "",
    digestCampaign: true,
    linkedKeywords: [],
    dailyDigest: ""
  });

  const [newKeyword, setNewKeyword] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCamp(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleKeywordChange = (e) => {
    setNewKeyword(e.target.value);
  };

  const addKeyword = () => {
    if (newKeyword && !newCamp.linkedKeywords.includes(newKeyword)) {
      setNewCamp(prevState => ({
        ...prevState,
        linkedKeywords: [...prevState.linkedKeywords, newKeyword]
      }));
      setNewKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setNewCamp(prevState => ({
      ...prevState,
      linkedKeywords: prevState.linkedKeywords.filter(kw => kw !== keywordToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Payload:', newCamp);
    try {
      const response = await axios.post(
        'https://infinion-test-int-test.azurewebsites.net/api/Campaign', 
        newCamp, 
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log('Campaign created successfully:', response.data);
    
    } catch (error) {
      if (error.response) {
  
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }

      console.log(response.data);

    }
  };

  return (
    <div className='d-flex flex-column campaign-form-container'>
      <h4 className='fw-semibold' style={{color: "#247B7B"}}>Create New Campaign</h4>
      <form onSubmit={handleSubmit}>
        <div className='mt-2'>
          <label>Campaign Name:</label>
          <input 
            type="text" 
            name="campaignName" 
            value={newCamp.campaignName} 
            onChange={handleChange} 
            className='form-control rounded-0'   
          />
        </div>
        <div className='mt-2'>
          <label>Campaign Description:</label>
          <textarea 
            name="campaignDescription" 
            value={newCamp.campaignDescription} 
            onChange={handleChange} 
            className='form-control rounded-0'
          />
        </div>
        <div className='d-flex justify-content-between mt-2'>
          <div>
            <label>Start Date:</label>
            <input 
              type="date" 
              name="startDate" 
              value={newCamp.startDate} 
              onChange={handleChange} 
              className='form-control rounded-0'
            />
          </div>
          <div>
            <label>End Date:</label>
            <input 
              type="date" 
              name="endDate" 
              value={newCamp.endDate} 
              onChange={handleChange} 
              className='form-control rounded-0'
            />
          </div>
        </div>
        <div className='mt-4'>
          <label>Digest Campaign:</label>
           <label className="switch mt-3 ms-4">
            <input type="checkbox" checked={newCamp.digestCampaign} name="digestCampaign"  
            onChange={handleChange} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className='mt-3'>
          <label>Linked Keywords:</label>
          <input 
            type="text" 
            value={newKeyword} 
            onChange={handleKeywordChange} 
            className='form-control rounded-0'
          />
          <button type="button" className='btn btn-success' onClick={addKeyword}>Add Keyword</button>
          <ul>
            {newCamp.linkedKeywords.map((kw, index) => (
              <li key={index}>
                {kw} <button type="button" onClick={() => removeKeyword(kw)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <select className='p-2 w-25 border-light-subtle' name='dailyDigest' value={newCamp.dailyDigest} 
        onChange={handleChange}>
          <option value=""></option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className='d-flex mt-5' style={{gap: "16px"}}>
          <button className='btn btn-outline-success col-3'><small>Cancel</small></button>
          <button type="submit" className='btn btn-success col-3'><small>Create Campaign</small></button>
        </div>
      </form>
    </div>
  );
};

export default NewCampaign;










































