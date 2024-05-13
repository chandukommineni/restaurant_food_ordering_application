
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import Header from './components/Header';
import Customer from './components/Customer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>

          <Routes>

            <Route path='/' element={<Customer/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path='/orders' element={<Order/>}/>

          </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
