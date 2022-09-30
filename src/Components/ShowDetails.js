import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ShowDetails() {
    let navigate = useNavigate();
  return (
    <div>
      <button className="btn btn-primary px-2" onClick={()=>navigate("/listing/details")}>Show Details</button>
    </div>
  )
}
