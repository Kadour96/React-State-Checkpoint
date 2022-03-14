import './App.css';
import React from "react";
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Time from './components/Time';
class Welcome extends React.Component {
  state = {
    FullName: "Nefzi Abdelkader",
    Bio:"Web Developer",
    imageSrc:'https://www.logiciels.pro/wp-content/uploads/2021/05/react-native-avis-prix-alternatives-logiciel.webp',
    Profession:"Student",
    show: false,

  };
  render() {

    return (
      <>
      <Button style={{marginLeft:'70px',marginTop:'10px'}} onClick={() => this.setState({ show: !this.state.show })} variant="warning">Show My Profile Card</Button>
      {this.state.show && <Card Profile={this.state}   />}
      {/* <Card Profile={this.state}/> */}
      <Time/>

      
    


   
    </>

    ) 
  }
 }
 export default Welcome;

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

