import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


const CustomProfile = () => {

const [cookies, setCookie] = useCookies(['accessToken']);

const [profileData,setProfileData]=useState('');

const handleGet = () => {
  console.log("get");
  const token = cookies.accessToken
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  axios.get(`https://dummyjson.com/auth/me`,config).then((response)=>{
    console.log("response of get api",response.data)
    setProfileData(response.data);
  })
}


useEffect(()=>{
  handleGet();
},[])



  return (
<div>
      <Card className='main-card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="card-title">BIO</Card.Title>
          <Card.Subtitle>Profile of Jeanne Halvorson:-</Card.Subtitle>

          <Card.Text className="card-text">
            <div>ID : {profileData.id}</div>
            <div>Age : {profileData.age}</div>
            <div>Gender : {profileData.gender}</div>
            <div>Birth Date : {profileData.birthDate}</div>
            <div>Phone : {profileData.phone}</div>
            <div>Email Id : {profileData.email}</div>
          </Card.Text>
        </Card.Body>
      </Card>
</div>      
  )
}

export default CustomProfile;
