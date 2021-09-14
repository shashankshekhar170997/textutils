

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
 
function App() {
  const [mode,setmode] = useState('light ');
  const [alert,setalert] = useState(null);
  
   const showalert=(message,type)=>{
     setalert ({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setalert(null);
     }, 1500);
  

  }
  
   const togglemode = () =>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor= 'grey';
      showalert("Dark mode has been enabled " ," Sucess");
      document.title='Textutils-Dark mode';
    }
    else{
      setmode ('light')
      document.body.style.backgroundcolor='white';
      showalert("light mode has been enabled " ," Sucess");
      document.title='Textutils-Light  mode';
    }
  }
  return (
    <>
   
   {/* { <Navbar title="TextutilsBrand" aboutText="About Textutils"/>  } */}
  {/* here  i am passing props(properties) */}
  <Router>
    <Navbar title="Textutils" mode ={mode} togglemode={togglemode}></Navbar>
    <Alert alert={alert}/>
  <div className="container" my-3>
  <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
    </div>
    </Router>
  { <Textform  showalert ={showalert}heading = "Enter the text to analyze below"/> }
  {/* <About/> */}
    
  

  {/* Container is a boostrap class which gives perfect size. */}
   
     
     </>
   
  ); 
}
export default App;
