
import React from "react";
import StopWatch from './Component/StopWatch';
import '../src/Style/Style.css'
// import { Row,Col, Container } from 'react-bootstrap';

// import Background from '../src/Style/img_forest.jpg';

function App() {  
  return(
     <div>
       <h1 className='header'>StopWatch</h1>
       <StopWatch/>
     </div>
  )
}
  


export default App;
