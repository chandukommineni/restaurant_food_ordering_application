import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, removeAll } from "./store/orderSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
 
  const data=useSelector((state)=>state.order)
  const [showModal,setShowModal]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

const removeOrder=(item)=>{
  dispatch(remove(item))


};
const toggleModal=()=>{
  setShowModal(!showModal);
  navigate("/home")

}
const finishOrdering = async () => {
  if (data.length > 0) {
    try {
      const response = await axios.post("https://restaurant-food-ordering-apllication-backend.vercel.app/orders", data);
      console.log("Ordered successfully", response.data);
      dispatch(removeAll());
      setShowModal(!showModal)  // Ensure `dispatch` and `removeAll` are defined
    } catch (error) {
      console.error("Error placing order", error);
    }
  } else {
    alert("Please Order Something ")
  }
};
  return (
    <div>
       <center>
        <div className="my-3" onClick={finishOrdering}>
          <button className="btn btn-primary">Finish Ordering</button>
          <p className="my-3">Wait for Some time after Clicking Finish Order</p>
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
                         <h6 className="card-subtitle my-2  text-muted">Table No . {item.table}</h6>
                         <h6 className="card-subtitle my-1  text-muted">Ordered by : {item.customername}</h6>
                         <h6 className="card-subtitle my-1  text-muted">Mobile No : {item.customermobile}</h6>

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
      {showModal && (
        <div
          className="modal fade show"
          id="myModal"
          data-backdrop="static"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document" style={{ maxWidth: "350px" }}>
            <div
              className="modal-content"
              style={{
                color: "#3a4943",
                background: "#b9e9d7",
                textAlign: "center",
                border: "5px solid #f1fefa",
                borderRadius: "25px 25px",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              
              <div className="modal-body" style={{ padding: "30px 10px 25px !important" }}>
                <div
                  className="modal-icon"
                  style={{
                    color: "#fff",
                    background: "#3a4943",
                    fontSize: "60px",
                    lineHeight: "80px",
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 10px",
                    borderRadius: "50%",
                  }}
                >
                  <i className="fa fa-smile text-white"></i>
                </div>
                <h5
                  className="title"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    margin: "0 0 12px",
                  }}
                >
                  Your Order Submitted Successfully
                </h5>
                
                <button
                  className="btn"
                  onClick={toggleModal}
                  style={{
                    color: "#373737",
                    background: "#eaf8f3",
                    fontSize: "15px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    padding: "14px 32px 13px",
                    borderRadius: "50px",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      


       </center>

    </div>

  )
};

export default Order;
