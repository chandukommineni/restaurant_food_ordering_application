import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTableNumber } from "../store/tableNumberSlice";

const Table = () => {

  const dispatch=useDispatch();
  const number=useSelector((state)=>state.tableNumber);


const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const inactiveBtn="btn btn-outline-primary m-2";
const activeBtn="btn btn-outline-primary m-2 active";

const btnClick=(num)=>{
   dispatch(changeTableNumber(num))
}
  return (
  <div > 

   <center className="mt-2">
    <h4>Please Select Your Table Number :</h4>
        {
           numbers.map((num,index)=>{
           return  <div style={{display:"inline"}} key={index} >
               <button className={number===num ? activeBtn : inactiveBtn } onClick={()=>{btnClick(num)}}>
                   {num}
                </button>
            </div>

           })
        }

   </center>


  </div>


)
};

export default Table;
