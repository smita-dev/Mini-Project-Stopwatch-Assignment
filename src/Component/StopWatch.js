import '../Style/Style.css';
import {useState} from 'react';
//import { Row,Col, Container } from 'react-bootstrap';
const StopWatch=()=>{
  const [hours, setHours]=useState('00');
  const [minutes,setMinutes]=useState('00');
  const [seconds,setSeconds]=useState('00');

  function increment()
  {
    setHours(hours+(0+1));
    setMinutes('00');
    setSeconds('00');
  }
  function resetValues()
  {
      setSeconds('00');
      setMinutes('00');
      setHours('00');
  }
    return(
      <>
          <div className='time'>
            <span ><h1>{hours}</h1><h1>Hr</h1></span>
            <span ><h1>{seconds}</h1><h1>Min</h1></span>
            <span ><h1>{minutes}</h1><h1>Sec</h1></span>
          </div>
          <div className='buttonStyle'>
            <button onClick={increment}>Start</button>
            <button>Pause</button>
            <button onClick={resetValues}>Reset</button>
          </div>
          
      </>
    )
}

// const Card=()=>{
// return(
// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
// )
// }

// export default Card;

// const Card =()=>{
//     return(
//         <>
//         <span className='Style.time'><h1>00</h1> Hr</span>
//         <span className='time'><h1>00</h1> Min</span>
//         <span className='time'><h1>00</h1> Sec</span>
//         </>
//     )
// }
// return (
    // <>
    // <h1>StopWatch</h1>
    // <div >
    //   <div>
    //   <span className="time">{hours +" Hr :"+ minutes+" Min :" + seconds +"Sec"}</span>
    //   {/* <span>HR</span> */}
    //   </div>
    
      
    //   <button onClick={startTimer}>Start</button>
    //   <button onClick={stopTimer}>Stop</button>
    // </div>
    // </>
  // );
// }
export default StopWatch;