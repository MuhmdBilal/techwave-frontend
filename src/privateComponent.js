import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
function PrivateComponent({state}) {
  let auths = localStorage.getItem("userDetails")
  return auths? <Outlet/> : <Navigate to="/"/>
}

export default PrivateComponent