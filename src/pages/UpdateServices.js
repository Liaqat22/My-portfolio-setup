import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function UpdateServices() {
    const {sid} = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')
    const [ id , setId] = useState("")

    const navigate  = useNavigate()

    const singleService = async()=>{
        try {
            const {data} = await axios.get(`https://personal-portfolio-api-s.vercel.app/api/v1/services/single-service/${sid}`)
            if (data?.success) {
                setName(data?.service.name)
                setDescription(data?.service.description)
setIcon(data?.service.icon)
                setId(data?.service._id)
                message.success(data?.message);
              }
        } catch (error) {
            console.log(error);
            message.error("something went wrong");
        }
    }
    useEffect(()=>{
        singleService()
    },[])

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
          
         
          const { data } =await axios.put(
            `https://personal-portfolio-api-s.vercel.app/api/v1/services/update-service/${id}`,
           { name , description , icon}
          );
          if (data?.success) {
            message.success("service updated Successfully");
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
          <h1 className='m-3'>Update Services</h1>
          <div className="m-1 ">
            
          
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
              <button className="btn btn-primary cartDetailBTN" onClick={handleUpdate}>
                UPDATE SERVICE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateServices
