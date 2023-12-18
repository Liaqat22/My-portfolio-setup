import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

function AddCetificates() {
  const [certificate, setCertificate] = useState('')
  const [client, setClient] = useState('')
  const [experience, setexperience] = useState('')
  const [data, setdata] = useState([])

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
     
      const { data } = axios.post(
        `https://personal-portfolio-api-s.vercel.app/api/v1/contacts/add-certificates`, { certificate , client , experience} );
      if (data?.success) {
        message.success("reward Created Successfully");
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  // get certificates
  const getCertificate = async() =>{
    try {
        const {data} = await axios.get("https://personal-portfolio-api-s.vercel.app/api/v1/contacts/get-certificate")
        setdata(data?.Rewards)
    } catch (error) {
        console.log(error);
      message.error("something went wrong");
    }
  }
  useEffect(()=>{
    getCertificate()
  },[])
  
  // delete certificates

  const handleDelete = async(id) =>{
    try {
        const {data} = await axios.delete(`https://personal-portfolio-api-s.vercel.app/api/v1/contacts/delete-certificate/${id}`)
        message.success("deleted ");
        getCertificate()
    } catch (error) {
        console.log(error);
        message.error("something went wrong");
    }
  }
  return (
    <div>

<div className="container-fluid">
      <div className='row d-flex align-items-start justify-content-center'>
        
        <div className='col-md-8'>
          <h1>Add Certificates </h1>
          <div className="m-1  ">
            
          
            <div className="mb-3">
              <input
                type="text"
                value={certificate}
                placeholder="certificates"
                className="form-control"
                onChange={(e) => setCertificate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={client}
                placeholder="clients"
                className="form-control"
                onChange={(e) => setClient(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={experience}
                placeholder="expericne "
                className="form-control"
                onChange={(e) => setexperience(e.target.value)}
              />
            </div>

           
            
            <div className="mb-3">
              <button className="btn btn-primary cartDetailBTN" onClick={handleCreate}>
                CREATE Certificate
              </button>
            </div>


          </div>
        </div>
      </div>

      <div className='row' >
              {data.map((s) => (
                <div className='col-md-4 allproductsAdminCol' key={s._id}>
                  <div className='card' >
                    <div>
                      <div className="card-body">
                        <h5 className="card-title productTitle">certificate : {s.certificate}</h5>
                        <p className="card-text paragraphText">client : {s.client}</p>
                        <p className="card-text paragraphText"> expericne :{s.experience}</p>
                       
                      </div>
                    </div>
                    <div className='m-3'>
                    <NavLink onClick={()=>handleDelete(s._id)} className='btn btn-danger  cartDetailBTN'>Delete </NavLink>
          </div>
                  </div>
                </div>
              ))}
            </div>
    </div>
    </div>
  )
}

export default AddCetificates
