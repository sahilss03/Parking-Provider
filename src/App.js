import Facebook from "./Images/facebook 1.png";
import Twitter from "./Images/twitter 1.png";
import LinkedIn from "./Images/linkedin 1.png";
import './App.css';

function App() {
  return (
    <div>
      <div id='d1'>
        <div id="div1Links">
          <a>
            About us
          </a>
          <a>
            Documentation
          </a>
        </div>
      </div>

      <div id='d2'>
        <h1>WHO ARE YOU?</h1>
        <a> User </a>
        <a> Provider </a>
      </div>

      <div id='d3'>
        <div id='d3d1'>
          <h1>
            Major cities we have covered : 
          </h1>
          <ul>
            <li>Bombay</li>
            <li>Delhi</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Gurgaon</li>
            <li>Chennai</li>
            <li>Amritsar</li>
            <li>Pune</li>
          </ul>
        </div>

        <div id='d3d2'>
          <h1>
            Upcoming cities : 
          </h1>
          <ul>
            <li>Bombay</li>
            <li>Delhi</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Gurgaon</li>
            <li>Chennai</li>
            <li>Amritsar</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>

      <div id="d4">
        <div id="div4Logo">
          
        </div>
        <div id="div4Pic">
            <img id="img1" src={Facebook} alt="" />
            <img id="img2" src={Twitter} alt="" />
            <img id="img3" src={LinkedIn} alt="" />
        </div>
        <div id="div4Links">
            <a id="liNav">Contact Aviatrix </a>
            <a id="liNav">Costumer Terms of Use </a>
            <a id="liNav">Privacy Policy </a>
        </div>

      </div>
    </div>
  );
}

export default App;
