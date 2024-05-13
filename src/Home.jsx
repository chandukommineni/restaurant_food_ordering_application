import React, { useEffect } from "react";

import Table from "./components/Table";
import Filter from "./components/Filter";
import Card from "./components/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const customer=useSelector((state)=>state.customer)
  const navigate=useNavigate();
  console.log(customer)
  useEffect(()=>{
    
      if (customer.name ==="" && customer.mobile===""){
        navigate("/")
        }

  })
  return (
    <div>
      <Table />
      <Filter />
      <Card />
    </div>
  ) 
};

export default Home;
