import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const count=useSelector((state)=>state.order.length);
  return (
  <div >
    <nav className="navbar navbar-light px-4 bg-light" >
        <Link to="/home" className="navbar-brand">Restaurant</Link>
        <button className="btn btn-primary">
           <Link to="/orders" style={{textDecoration:"None",color:"White"}}>Orders</Link> <span className="badge badge-light">{count}</span>
        </button>

    </nav>
     
 </div>
 )
}

export default Header;
