import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import UserInput from './components/UserInput';
import Images from "./components/Images";
import SnackBar from './components/SnackBar';
import {getImages} from './services/api';

import { Box , LinearProgress } from '@material-ui/core';

import './App.css';

function App() {

  const [data, setdata] = useState('')
  const [userInput, setuserInput] = useState('shoes')
  const [count, setcount] = useState(10)
  const [progress, setprogress] = useState(0)
  const [open, toggleSnack] = useState(false)

  useEffect(() => {
    
    setprogress(35)
    if(count < 3 || count > 200){
      toggleSnack(true);
      if(count === ''){
        setcount(10)
      }
      return;
    }

    toggleSnack(false)

    getImages(userInput,count).then(res =>{
      setprogress(75)
      setdata(res.data.hits);
      setprogress(100)
      
    })
    // if(progress=== 100){
    //   setprogress(0)
    // }
    
  }, [userInput,count])

  const userInputHandler = (text) =>{
    setuserInput(text);
  }

  const userCountHandler = (count) =>{
    setcount(count);
  }

  return (
    <Box>
      <Navbar/>
      { progress < 100 ?
      <LinearProgress variant="determinate" value={progress} color="secondary"/> : 
      <LinearProgress variant="determinate" value={progress} color="transparent"/>
      }
      <UserInput userInputHandler={userInputHandler} userCountHandler={userCountHandler} />
      <Images data={data}/>
      <SnackBar open={open} toggleSnack={toggleSnack}/>
    </Box>
  );
}

export default App;
