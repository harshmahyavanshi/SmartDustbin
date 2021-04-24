import React, { useState, useEffect } from "react";
import "./Style.css";
import Canvas from "./Canvas";
import GaugeChart from 'react-gauge-chart'
import firebase from "./Firebase";
import {  Button, Form, FormGroup, Label, Input} from 'reactstrap';


const App = () => {
  // Define the state of the component
  const [distance, setDistance] = useState(0);
  const [limit,setLimit] = useState(0);
  const[percentage, setPercentage] = useState(0);

  const confirm = () =>{
    if(document.getElementById("limit").value === 0 || document.getElementById("limit").value === null)
    {
      alert("greater than 0")
    }
    else{
      setLimit(document.getElementById("limit").value)
      console.log(limit)
      alert(limit)
    }
    
  }

  // Listen to changes on the firebase database, specifically the "distance" entry
  useEffect(() => {
    const getValue = firebase.database().ref("distance");
    console.log("outside")
    if(distance>limit){
      setDistance(limit)
    }
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      
      // Whenever the value changes on the server, it is also reset on the running app through the variable
      //alert(distance)
      if(value.toFixed(0) > 70)
      {
        setPercentage(0)
        console.log(percentage)
      }
      setDistance(value.toFixed(2));
    });
  }, []);
  
  if(limit === 0){
    return(
      <>
       <Form className="login-form" >
                <FormGroup>
                    <Label>Size of Dustbin</Label>
                    <Input type="text" placeholder="Size in cm" name="limit" id="limit" />
                </FormGroup>
                
                <FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={confirm}>Confirm</Button>
                </FormGroup>
            </Form>
      </>
    )
  }
  return (
    
    <>
    
    <div >
    <GaugeChart id="gauge-chart4"  nrOfLevels={10} textColor="black"  needleColor="#345243" arcPadding={0.1}   cornerRadius={3}   percent={(1-(distance)/limit)} />
    </div>
    <div className="litreDisplay">
      <div className="canvas">
        {/* The variable is passed down to the Canvas component, which will re-render every time its altered*/} 
       {/* <Canvas distance={distance} />*/}
      </div>
      <div className="displayValue">
        <span>{distance}cm</span>
      </div>
    </div>
    </>
  );
};

export default App;