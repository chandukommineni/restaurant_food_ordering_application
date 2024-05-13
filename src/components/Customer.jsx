import { useDispatch } from "react-redux";
import { addCustomerData } from "../store/CustomerSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook


const Customer = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const submit=(e)=>{
    e.preventDefault();
    dispatch(addCustomerData({name:e.target.elements.customername.value,mobile:e.target.elements.mobile.value}))
    navigate("/home")
  }

  return (
  
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column", height: "100vh",backgroundImage:`url(${process.env.PUBLIC_URL}/assests/mainbackground.jpeg)`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
     <div className="my-4 text-white">
      <h2 >Welocome to our Restaurant</h2>
     </div>
      <div className="card p-4" style={{ width: "30%" }}>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Customer</label>
            <input type="text" name="customername" id="name" placeholder="Enter name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile No. </label>
            <input type="text" name="mobile" id="mobile" placeholder="Enter mobile" className="form-control" required />
          </div>
          <div className="text-center">
            <button className="btn btn-primary" type="submit">Continue</button>
          </div>
        </form>
       
      </div>
 

    </div>
 
  

  )
};


export default Customer;
