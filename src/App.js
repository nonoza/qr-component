import qrImage from './image-qr-code.png';
import './App.css';

function App() {
  return (
  <div className ="qr-container" data-aos="fade-down">
    <div className = "qr-image">
     <img src = {qrImage} alt = "qr-image"/>
    </div>
    <div className = "qr-content">
     <h1>Improve your front-end skills by building projects</h1>
     <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </div>
  );
}

export default App;
