import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProject() {
    const {pid} = useParams()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [photo, setPhoto] = useState("");
    const [ id , setId] = useState("")
  
    const navigate  = useNavigate()

    // single product
    const singleProject = async()=>{
        try {
            const {data} = await axios.get(`https://personal-portfolio-api-s.vercel.app/api/v1/project/get-project/${pid}`)
            if (data?.success) {
                setName(data?.project.name)
                setLink(data?.project.link)
                setDescription(data?.project.description)
                setId(data?.project._id)
                message.success(data?.message);
              }
        } catch (error) {
            console.log(error);
            message.error("something went wrong");
        }
    }
    useEffect(()=>{
        singleProject()
    },[])

    const updateProject = async (e) => {
        e.preventDefault();
        try {
          const productData = new FormData();
          productData.append("name", name);
          productData.append("description", description);
          productData.append("link", link);
          productData.append("photo", photo);
         
          const { data } =await axios.put(
            `https://personal-portfolio-api-s.vercel.app/api/v1/project/update-project/${id}`,
            productData
          );
          if (data?.success) {
            message.success(data?.message);
            message.success("Project updated Successfully");
            navigate("/")
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
          <h1 className='m-3'>Update Project</h1>
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
              <textarea
                type="text"
                value={description}
                placeholder="write a description"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                value={link}
                placeholder="give project link"
                className="form-control"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            
            
             <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12 cartDetailBTN">
                {photo ? photo.name : "Upload project Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3">
            {photo ? (
                                    <div className="text-center">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="product_photo"
                                            height={"200px"}
                                            className="img img-responsive"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="text-center">
                                            <img
                                                src={`https://personal-portfolio-api-s.vercel.app/api/v1/project/project-photo/${id}`}
                                                alt="product_photo"
                                                height={"200px"}
                                                className="img img-responsive"
                                            />
                                        </div>
                                    </>
                                )}
            </div>
            
            <div className="mb-3">
              <button className="btn btn-primary cartDetailBTN" onClick={updateProject}>
                UPDATE PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateProject
