import './App.css';

import About from "./component/About";
import React, { useState } from "react";
import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() 
{
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
      })
      setTimeout(()=>{
          setAlert (null);
      },3000)
  }

  const toggleMode =  ()=> {
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","sucess");
    }else{
      setMode ('light');
       document.body.style.backgroundColor = "white";
       showAlert("Light mode has been enabled", "sucess");
    }
    }
   return (
     <Router>
       <>
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />

         <div className="container my-3">
           <Routes>
             <Route path="/about" element={<About mode={mode} />} />
             <Route
               path="/"
               element={
                 <TextForm
                   heading="Try TextUtils- Word Counter, Character Counter, Remove extra spaces"
                   mode={mode}
                   showAlert={showAlert}
                 />
               }
             ></Route>
           </Routes>
         </div>
       </>
     </Router>
   );
}



export default App ;