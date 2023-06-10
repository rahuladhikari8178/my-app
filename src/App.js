
import './App.css';


import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";
import About from './component/About';
import Hello from './component/Hello';


function App() 
{
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">

        {/*<TextForm  heading="Enter The Text To Analyze"/> */} 
        <About/>
        <Hello/>
      </div>
    </>
  );
}



export default App ;