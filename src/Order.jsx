import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/orderSlice";


const Order = () => {
 
  const data=useSelector((state)=>state.order)
  
  const dispatch=useDispatch();

const removeOrder=(item)=>{
  dispatch(remove(item))

}
  return (
    <div>
       <center>

      {
        
        data.length >0? 
        <div className="container">
          <div className="row">
            { 
              
              data.map((item)=>{
                return (<div className="col-md-4 my-4 " key={item.id}>
                <div className="card text-center my-3 " style={{ width: "18rem", padding: "3px", height: "23rem" }}>
                    <img
                        src={item.url}
                        alt="img"
                        className="card-img-top rounded"
                        style={{ width: "70%", height: "60%", display: "block", margin: "auto" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Rs. {item.price}</div>
                        <div>Table No . {item.table}</div>
                        <div>
                          <p>Order by :{item.customername}</p>
                          <p >Mobile : {item.customermobile}</p>
                        </div>
                        <button className="btn btn-danger" onClick={()=>removeOrder(item.id)}>Remove</button>
                    </div>
                </div>
            </div>
            

              )})
            }

          </div>
        </div>
        :
        <div className="spinner-border text-primary my-5"></div>
      }


       </center>

    </div>

  )
};

export default Order;
