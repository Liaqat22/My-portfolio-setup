import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

function AddServices() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const navigate  = useNavigate()

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
     
      const { data } = axios.post(
        `https://personal-portfolio-api-s.vercel.app/api/v1/services/create-service`, { name , description , icon} );
      if (data?.success) {
        message.success("Service Created Successfully");
        navigate("/allservices")
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div>

<div className="container-fluid">
      <div className='row d-flex align-items-start justify-content-center'>
        
        <div className='col-md-8'>
          <h1 className = "m-3">Create Services</h1>
          <div className="m-1  ">
            
          
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="write a name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={icon}
                placeholder="icon"
                className="form-control"
                onChange={(e) => setIcon(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="write a description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

           
          
            
            <div className="mb-3">
              <button className="btn btn-primary cartDetailBTN" onClick={handleCreate}>
                CREATE SERVICE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddServices
