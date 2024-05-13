import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/orderSlice";


const Order = () => {
 
  const data=useSelector((state)=>state.order)
  
  const dispatch=useDispatch();

const removeOrder=(item)=>{
  dispatch(remove(item))

}
const finishOrdering=()=>{
  console.log("finishing items")

}
  return (
    <div>
       <center>
        <div className="my-3" onClick={finishOrdering}>
          <button className="btn btn-primary">Finish Order</button>
        </div>

      {
        data.length >0? 
        <div className="container">
          <div className="row">
            { 
              
              data.map((item)=>{
                return (<div className="col-md-4 my-4 " key={item.id}>
                <div className="card text-center my-3 " style={{ width: "18rem", padding: "3px", height: "25rem" }}>
                    <img
                        src={item.url}
                        alt="img"
                        className="card-img-top rounded"
                        style={{ width: "70%", height: "50%", display: "block", margin: "auto" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Rs. {item.price}</div>
                       
                        <div style={{minHeight:"40%"}}>
                         <h6 class="card-subtitle my-2  text-muted">Table No . {item.table}</h6>
                         <h6 class="card-subtitle my-1  text-muted">Ordered by : {item.customername}</h6>
                         <h6 class="card-subtitle my-1  text-muted">Mobile No : {item.customermobile}</h6>

                        </div>
                         
                        <button className="btn btn-danger btn-small"  onClick={()=>removeOrder(item.id)}>Remove</button>
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
