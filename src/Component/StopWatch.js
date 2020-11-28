import '../Style/Style.css';
import React,{useState} from 'react';
//import { Row,Col, Container } from 'react-bootstrap';
var sec=0;
  var min=0;
  var hr=0;
  var t;
function StopWatch() {

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  // function increment() {
  //   var finalValue=sec+1;
  //    sec ='0'+finalValue;
  //    setSeconds(sec);
  //    console.log("increment");
  // }
  function startTimer() {
    t=setInterval(()=>{
      
      var finalValue=parseInt(sec)+1;
      console.log("final value :"+finalValue)
      if(sec<9)
      {
        sec ='0'+finalValue;
        console.log(sec);
        setSeconds(sec);
      }
      else if(sec>59){
        if(min<9)
        {
          var finalmin=parseInt(min)+1;
          min='0'+finalmin;
          sec='00';
          setSeconds(sec);
          setMinutes(min);
          sec='00';
        }
        else{
          min=parseInt(min)+1;
          sec='00';
          setSeconds(sec);
          setMinutes(min);
        }
        
      }
      else if(min>59)
      {
        var finalHr=parseInt(hr)+1;
        setHours(finalHr);
        setMinutes('00');
      }
      else
      {
        console.log(finalValue);
        sec=finalValue
        setSeconds(sec);
      }
      
    
      console.log("increment");
    }, 1000);
    // setHours('00');
    // setMinutes('00');
    
  }
  
  function resetValues() {
    setSeconds('00');
    sec=0;
    min=0;
    hr=0;
    setMinutes('00');
    setHours('00');
  }
  function stopTimer(){
    console.log("pause timer")
      clearInterval(t);
  }
  return (
    <>
      <div className='time'>
        <span><h1>{hours}</h1><h1>Hr</h1></span>
        <span><h1>{minutes}</h1><h1>Min</h1></span>
        <span><h1>{seconds}</h1><h1>Sec</h1></span>
      </div>
      <div className='buttonStyle'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Pause</button>
        <button onClick={resetValues}>Reset</button>
      </div>

    </>
  );
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