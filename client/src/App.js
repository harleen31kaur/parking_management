import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ParkingSpace from './Components/ParkingSpace';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login/>
      <Signup/>
      <ParkingSpace/>
  
     
      <Footer/>

  
 

    </div>
  );
}

export default App;