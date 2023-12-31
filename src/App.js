import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert]= useState(null);
  const showAlert =(message, type)=>{
    setAlert ({
      msg:message,
      type:type
    })    
  }
  
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mood has been enaled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mood has been enaled" , "success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  /> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <About mode={mode} />
    <TextForm  mode={mode}/>
    </div>
    </> 
  );
}

export default App;