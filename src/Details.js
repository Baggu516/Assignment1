import React, { useState } from 'react'

const Details = ({item}) => {
    let [c,SetC] =useState(0)
    let [s,setS] = useState(true)

  return (
      <div className="parent">
        <div className="child">{item.id}</div>
        <div className="child">
       <h2>NAME</h2> 
       <center>
       <p>{item.name}</p>    

       </center>
        </div>
      <div className="child">
       <h2>USERNAME</h2> 
       <center>
       <p>{item.username}</p>    
      </center>
      </div>
      <div className="child">
           <h2>CITY</h2> 
           <center>
      <p>{item.address.city}</p>    

       </center>
        </div>
        {s?<button onClick={()=>setS(false)}>View All Details</button >:<button onClick={()=>setS(true)}>Hide Details</button>}
        {!s?<div className="details">
          <h3>Full Details</h3>
          <p>Name: {item.name}</p>
          <p>Mail_Id: {item.email}</p>
          <p>Phone_no:{item.phone}</p>
        </div>:<div></div>}
    </div>
)
}

export default Details
