import './App.css';
//importing components
import Navbar from './components/Navbar';
import React from "react";
import Content from './components/Content'



function App() {
 


  return (
    <div className="App">
      <source className="video" src="photos/rain.mp4" type="video/mp4"/>
      <Navbar />
      <Content />
      
    </div>
  );
}

export default App;
