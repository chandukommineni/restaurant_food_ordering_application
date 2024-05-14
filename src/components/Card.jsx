

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/orderSlice";
import { fetchData } from "../store/Data";

const Card = () => {
  const dispatch = useDispatch();
  const tableNumber = useSelector((state) => state.tableNumber);
  const data = useSelector((state) => state.data);
  const customer = useSelector((state) => state.customer);
  const [showModal, setShowModal] = useState(false);
  const [orderedItem,setOrderedItem]=useState(""); 
 

  const addOrder = (item) => {
    if (tableNumber) {
     
      dispatch(add(item));
      setShowModal(true);
      setOrderedItem(item.name)
      
    } else {
      alert("Select table number to order");
    }
  };

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <center>
        {!data.loading ? (
          <div className="container">
            <div className="row">
              {data.filteredData.map((item) => {
                return (
                  <div className="col-md-4 my-4" key={item.id}>
                    <div
                      className="card text-center"
                      style={{
                        width: "18rem",
                        padding: "3px",
                        height: "18rem",
                      }}
                    >
                      <img
                        src={item.url}
                        alt="img"
                        className="card-img-top rounded"
                        style={{
                          width: "70%",
                          height: "60%",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="card-text">Rs. {item.price}</div>
                        <button
                          className="btn btn-primary"
                          onClick={() =>
                            addOrder({
                              ...item,
                              table: tableNumber,
                              customername: customer.name,
                              customermobile: customer.mobile,
                            })
                          }
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </center>

      {/* Modal for displaying order confirmation */}
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
                  Your Order Placed Successfully
                </h5>
                <p
                  className="description"
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    margin: "0 0 30px",
                  }}
                >
                  Order is  <br /> <span>{orderedItem}</span>
                </p>
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
    </div>
  );
};

export default Card;
