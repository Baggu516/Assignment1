import React,{useState,useEffect} from "react";
import axios from "axios"
import Details from './Details';

function Page2(){
    const [data,setData]=useState([])
  const fetchData = async()=>{
    let response = await axios.get("https://jsonplaceholder.typicode.com/users")
    let data = response.data
    setData(data) 
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log(data.slice(3,9))
  return (

    <div>
        {data.slice(3,9).map((item)=>(
       <Details key={item.id} item={item}/>
      ))}
      
   </div>
  )
}
export default Page2