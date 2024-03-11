import React from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, Outlet } from 'react-router-dom';
import CustomLogin from './CustomLogin';


const PrivateRoutes = () => {
  const [cookies, setCookies] = useCookies(['accessToken']);

  let auth = false;

  const receivedToken = cookies.accessToken;

  receivedToken ? auth = true : auth = false;


  return (
    auth ? <Outlet /> : <Navigate to='/customlogin'/>
  )
}

export default PrivateRoutes
