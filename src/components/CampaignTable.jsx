import React from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link, useNavigate } from 'react-router-dom';

const CampaignTable = ({ campaignList, handleDelete}) => {
  const navigate = useNavigate();
  const handleView = (campaign) => {
    navigate(`/campaign/${campaign.id}`, { state: { campaign } });
  };
  
  const handleEdit = (campaign) => {
    navigate(`/edit/${campaign.id}`, { state: { campaign } });
  };
  
  const dateBodyTemplate = (rowData) => {
    return rowData.startDate.substring(0, 10);
  };

  const action = {
    outline: "../images/Vector (14).png",
    edit: "../images/Vector (16).png",
    delete: "../images/Vector (17).png"
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <div className='d-flex' style={{ gap: "24px" }}>
        <button className='border-0 bg-white' onClick={() => handleView(rowData)}>
          <img src={action.outline} alt="outline" />
        </button>
        <button className='border-0' onClick={() => handleEdit(rowData)}>
          <figure className='edit-icon'>
            <img src={action.edit} alt="edit" />
          </figure>
        </button>
        <button className='border-0 bg-white'>
          <img src={action.delete} alt="delete" />
        </button>
      </div>
    );
  };

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-between'>
        <div className='campaign_btn-container'>
          <button className="all_campaign_button bg-white">
            All
          </button>
          <button className="inactive_campaign_button bg-white">
            Inactive
          </button>
          <button className="active_campaign_button bg-white">
            Active
          </button>
        </div>
        <div className='bg-info col-6'>
          <span className="d-flex bg-white border bg-success h-100">
            <input type="text" placeholder="Search..." className="w-50 form-control border-0" />
            <img src="../images/ic_baseline-search.png" alt="" />
          </span>
        </div>
      </div>
      <DataTable value={campaignList} className='mt-5' paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column field="id" header="S/N" className='col-2 px-0'></Column>
        <Column field="campaignName" header="Campaign Name" className='col-3'></Column>
        <Column field="startDate" header="Start Date" body={dateBodyTemplate} className='col-2'></Column>
        <Column field="campaignStatus" header="Campaign Status" className='col-2'></Column>
        <Column field="Action" header="Actions" body={imageBodyTemplate} className='col-2'></Column>
      </DataTable>
    </div>
  );
};

export default CampaignTable;





























/*import React, { useState } from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';

const Campaign = ({ campaignList, isDialogVisible,  selectedCampaign, handleEdit, setIsDialogVisible}) => {

  const dateBodyTemplate = (rowData) => {
    return rowData.startDate.substring(0, 10);
  };

  const action = {
    outline: "../images/Vector (14).png",
    edit: "../images/Vector (16).png",
    delete: "../images/Vector (17).png"
  };



  const imageBodyTemplate = (rowData) => {
    return (
      <div className='d-flex' style={{ gap: "24px" }}>
        <Link className='border-0 bg-white'>
          <img src={action.outline} alt="outline" />
        </Link>
        <button className='border-0' onClick={() => handleEdit(rowData)}>
          <figure className='edit-icon'>
            <img src={action.edit} alt="edit" />
          </figure>
        </button>
        <button className='border-0 bg-white'>
          <img src={action.delete} alt="delete" />
        </button>
      </div>
    );
  };

  return (
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-between'>
        <div className='campaign_btn-container'>
          <button className="all_campaign_button bg-white">
            All
          </button>
          <button className="inactive_campaign_button bg-white">
            Inactive
          </button>
          <button className="active_campaign_button bg-white">
            Active
          </button>
        </div>
        <div className='bg-info col-6'>
          <span className="d-flex bg-white border bg-success h-100">
            <input type="text" placeholder="Search..." className="w-50 form-control border-0 bg-danger" />
            <img src="../images/ic_baseline-search.png" alt="" />
          </span>
        </div>
      </div>
      <DataTable value={campaignList} className='mt-5' paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column field="id" header="S/N" className='col -2 px-0'></Column>
        <Column field="campaignName" header="Campaign Name" className='col-3'></Column>
        <Column field="startDate" header="Start Date" body={dateBodyTemplate} className='col-2'></Column>
        <Column field="campaignStatus" header="Campaign Status" className='col-2'></Column>
        <Column field="Action" header="Actions" body={imageBodyTemplate} className='col-2'></Column>
      </DataTable>

      {selectedCampaign && (
        <Dialog header="Campaign Details" visible={isDialogVisible} style={{ width: '50vw' }} onHide={() => setIsDialogVisible(false)}>
          <div>
            <p><strong>ID:</strong> {selectedCampaign.id}</p>
            <p><strong>Campaign Name:</strong> {selectedCampaign.campaignName}</p>
            <p><strong>Campaign Description:</strong> {selectedCampaign.campaignDescription}</p>
            <p><strong>Start Date:</strong> {selectedCampaign.startDate}</p>
            <p><strong>End Date:</strong> {selectedCampaign.endDate}</p>
            <p><strong>Campaign Status:</strong> {selectedCampaign.campaignStatus}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Campaign;*/



















































/*import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

  const Campaign = ({campaignList}) => {
    

    /*const handleSelect = (id) => {
      const singleCampagin = campaignList.find(item => (item.id).toString() === id);
      console.log(singleCampagin);
    }*/

    /*const handleDelete = async (campaignId) => {
      const confirmed = window.confirm('Are you sure you want to delete this campaign?');
      if (!confirmed) return;
    }

    const dateBodyTemplate = (campaignList) => {
      return campaignList.startDate.substring(0, 9);
    };

    const action = {
      outline: "../images/Vector (14).png",
      edit: "../images/Vector (16).png",
      delete: "../images/Vector (17).png" 
    }

    const handleEdit = (campaign) => {
      console.log(campaign);
      // You can perform further actions like opening an edit modal here
    };
    
    const imageBodyTemplate = (rowData) => {
      return (
        <div className='d-flex' style={{ gap: "24px" }}>
          <Link className='border-0 bg-white'>
            <img src={action.outline} alt="outline" />
          </Link>
          <button className='border-0' onClick={() => handleEdit(rowData)}>
            <figure className='edit-icon'>
              <img src={action.edit} alt="edit" />
            </figure>
          </button>
          <button className='border-0 bg-white'>
            <img src={action.delete} alt="delete" />
          </button>
        </div>
      );
    };

    /*const imageBodyTemplate = (action) => {
      return(
        <div className='d-flex' style={{gap: "24px"}}>
          <Link className='border-0 bg-white'>
            <img src={action.outline} alt="outline" />
          </Link>
          <button className='border-0'>
            <figure className='edit-icon'>
              <img src={action.edit} alt="edit" />
            </figure>
          </button>
          <button className='border-0 bg-white'>
            <img src={action.delete} alt="delete" />
          </button>
        </div>
      )
    };
    
    return (
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <div className='campaign_btn-container'>
            <button className="all_campaign_button bg-white">
              All
            </button>
            <button className="inactive_campaign_button bg-white">
              Inactive
            </button>
            <button className="active_campaign_button bg-white">
              Active
            </button>
          </div>
          <div className='bg-info col-6'>
            <span className="d-flex bg-white border bg-success h-100">
              <input type="text" placeholder="Search..."  className="w-50 form-control border-0 bg-danger" />
              <img src="../images/ic_baseline-search.png" alt="" />
            </span>
          </div>
        </div>
        <DataTable value={campaignList} className='mt-5' paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
          <Column field="id" header="S/N" className='col-2 px-0'></Column>
          <Column field="campaignName" header="Campaign Name" className='col-3'></Column>
          <Column field="startDate" header="Start Date" body={dateBodyTemplate} className='col-2'></Column>
          <Column field="campaignStatus" header="Campaign Status" className='col-2'></Column>
          <Column field="Action" header="Actions" body={imageBodyTemplate(action)} className='col-2'></Column>
        </DataTable>
      </div>      
    )
  }

export default Campaign*/