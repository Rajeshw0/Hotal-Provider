import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
const GetApi = () => {



const [data, setData] = useState([]);

useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
 .then(res=>setData(res.data))
.catch((err)=>console.log(err))

},[])
console.log(data)

return(
<div>
    <ul>
        {
            data.map((product)=><img src = {product.image}/>
)
        }
       
       
    </ul>
</div>
)}

export default GetApi;









// import  {useState, useEffect } from "react";

// export default function Fakeapi(){
//    const[data,setData]= useState([])

//     useEffect(()=>{
//      fetch('https://fakestoreapi.com/products')  
//     .then((res)=>res.json())
//     .then((data)=>setData(data)) 
//     .catch((err)=>console.log(err))
//     },[])
//     console.log(data)
//     return(
//         <div className="bgimage">
         
//          <marquee direction="right"><h1 className="jkl">Sharma<span className="jkl1"> Products<p className="jkl2">Store</p></span></h1></marquee> 
         
//         <div className="grid " style={{gridTemplateColumns:"repeat(3, 1fr)", width:"100%",
//     height:"30vh"}}>    
//         {data.map((item,index)=>(
            
//            <div className="col-md-14 col-30 h-12"> 
           
//             <div className="shadow" > 
//              <img className="image" src={item.image}/>
//              <div className="card-body">
//              <div className="card-id fontbold">Id: {item.id}</div>
//              <div className="card-title font-bold">Title:{item.title}</div>
//              <div className="card-price font-bold">Price:{item.price}</div>
//              <div className="card-description font-bold">Description:{item.description}<br/></div>
//              </div>
//              </div>
//             </div>
            
            
          
//         ))}
//     </div>
//     </div>
    
       

//     )
// }