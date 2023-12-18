import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function AllServices() {
  const [services , setServices] = useState([])

  const getAllServices = async () => {
    try {
     
      const { data } =await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/services/get-service`);
      if (data?.success) {
        setServices(data?.service)
       
        console.log(data?.service._id , "service data")
        message.success(data?.message);
      } else {
        message.success("service got Successfully");    
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }}
    useEffect(()=>{
      getAllServices()
    },[])

    const handleDelete = async(id)=>{
      try {
        const {data} = await axios.delete(`https://personal-portfolio-api-s.vercel.app/api/v1/services/delete-service/${id}`)
        getAllServices()
        message.success(data?.message);

      } catch (error) {
        console.log(error);
      message.error("something went wrong");
      }
    }
  return (
    <div>

      <div className='container-fluid'>
      <div className="row d-flex align-items-start justify-content-evenly">

<div className='col-md-12'>
      <h1 className='m-3 text-center productTitle'>AllServices </h1>

<div className='row' >
              {services.map((s) => (
                <div className='col-md-4 allproductsAdminCol' key={s._id}>
                  <div className='card' >
                    <div>
                      <div className="card-body">
                        <p className="card-text paragraphText"> <i className={` ${s.icon} mb-2`} /></p>
                        <h5 className="card-title productTitle"> {s.name}</h5>
                        <p className="card-text paragraphText">{s.description}</p>
                       
                      </div>
                    </div>
                    <div className='m-3'>
                    <NavLink onClick={()=>handleDelete(s._id)} className='btn btn-danger  cartDetailBTN'>Delete </NavLink>
          <NavLink to={`/updateservice/${s._id}`} className='btn btn-warning cartDetailBTN'>Update </NavLink>
          </div>
                  </div>
                </div>
              ))}
            </div>

      </div>

    </div>
    </div>
    </div>
  )
}

export default AllServices
