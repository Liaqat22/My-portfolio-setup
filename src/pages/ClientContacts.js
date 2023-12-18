import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ClientContacts() {
  const [clients , setCLients] = useState([])

  const getAllClients = async () => {

    try {
     
      const { data } =await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/contacts/get-client`);
      if (data?.success) {
        setCLients(data?.client)
       
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
      getAllClients()
    },[])
  return (
    <div>
      <div className='container-fluid'>
      <div className="row d-flex align-items-start justify-content-evenly">

<div className='col-md-12'>
      <h1 className='text-center m-3'>Client Contacts</h1>

<div className='row' >
              {clients.map((c) => (
                <div className='col-md-4 allproductsAdminCol' key={c._id}>
                  <div className='card' >
                    <div>
                      <div className="card-body">
                        <h5 className="card-title paragraphText">name : {c.name}</h5>
                        <hr/>
                        <p className="card-text paragraphText"> Email : {c.email}</p>
                        <p className="card-text paragraphText">Company : {c.company}</p>
                        <p className="card-text paragraphText">interview : {c.interview}</p>
                        <p className="card-text paragraphText">message : {c.description}</p>
                       
                      </div>
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

export default ClientContacts
