import React,{useState,useEffect} from "react";
import axios from "axios"
import Details from './Details';

function Page1(){
    const [data,setData]=useState([])
  const fetchData = async()=>{
    let response = await axios.get("https://jsonplaceholder.typicode.com/users")
    let data = response.data
    setData(data) 
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (

    <div>
        {data.slice(0,3).map((item)=>(
       <Details key={item.id} item={item}/>
      ))}
      
   </div>
  )
}
export default Page1