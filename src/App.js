
import './App.css';


import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";
import About from './component/About';


function App() 
{
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">

        {/*<TextForm  heading="Enter The Text To Analyze"/> */} 
        <About/>
      </div>
    </>
  );
}



export default App ;