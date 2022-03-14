import React from "react";
import '../components/timestyle.css'
class Time extends React.Component {
    constructor() {
        super();
        this.state = {
          timer: new Date(),
        };}
        componentDidMount() {
            this.timerId = setInterval(() => {
              this.setState({ timer: new Date() });
            }, 1000);
          }
    render() {

      return (
        <>
        <p className="timer"> {this.state.timer.toLocaleTimeString()} </p>
  
      
  
  
     
      </>
  
      ) 
    }
   }
   export default Time;