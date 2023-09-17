import './App.css';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, { useState } from 'react';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  const [mode,setMode]= useState('light') ;

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark Mode Is Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode Is Enabled","success")
    }
  }

  return <>
  <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm  showAlert={showAlert} heading="Enter your text" mode={mode}/>
  <AboutUs mode={mode}/>
  </div>
  </>
}
export default App;
