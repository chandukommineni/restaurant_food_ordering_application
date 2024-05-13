import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../store/filterSlice";
import { filterData } from "../store/Data";

const Filter = () => {


  const dispatch=useDispatch();
  const  prod=["All Items","Rice Items","Cool Drinks","Pizza","Hot Drinks"];
  const filter=useSelector((state)=>state.filter)

  const setFilter=(filter)=>{
    dispatch(changeFilter(filter))
    
  }
  return (
  <div style={{marginTop:"20px"}}>
    <center>
        <span className="h4 ">Filter </span>
        <select name="filter" className="p-1 mx-2" onChange={(e)=>setFilter(e.target.value)} >
            {
                prod.map((item,index)=>{
                   return ( <option value={item} key={index}>{item}</option>)
                })
            }
        </select>

        <button className="btn btn-primary btn-small m-2"  onClick={()=>dispatch(filterData(filter))}>Submit</button>
    
    </center>
    
   </div>
   )
};

export default Filter;
