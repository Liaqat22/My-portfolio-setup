import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
 
function AllProjects() {
  const [projects , setProjects] = useState([])
  
  const getAllProjects = async () => {
    try {
     
      const { data } =await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/project/get-project`);
      if (data?.success) {
        setProjects(data?.projects)
       
        console.log(data?.projects._id , "project data")
        message.success(data?.message);
      } else {
        message.success("project Created Successfully");    
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }}
    useEffect(()=>{
      getAllProjects()
    },[])
    const handleDelete = async(id)=>{
      try {
        const {data} = await axios.delete(`https://personal-portfolio-api-s.vercel.app/api/v1/project/delete-project/${id}`)
        getAllProjects()
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
      <h1 className='m-3 text-center productTitle'>All Projects</h1>

<div className='row' >
              {projects.map((p) => (
                <div className='col-md-4 allproductsAdminCol' key={p._id}>
                  <div className='card' >
                    <div>
                      <img src={`https://personal-portfolio-api-s.vercel.app/api/v1/project/project-photo/${p._id}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title productTitle"> {p.name}</h5>
                        <p className="card-text paragraphText">{p.description.substring(0, 30)}</p>
                        <NavLink to={p.link} className='btn btn-warning cartDetailBTN'>click to explore </NavLink>
                       
                      </div>
                    </div>
                    <div className='m-3'>
                    <NavLink onClick={()=>handleDelete(p._id)} className='btn btn-danger  cartDetailBTN'>Delete </NavLink>
          <NavLink to={`/updateproject/${p._id}`} className='btn btn-warning cartDetailBTN'>Update </NavLink>
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

export default AllProjects
