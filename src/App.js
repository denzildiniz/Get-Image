import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import UserInput from './components/UserInput';
import Images from "./components/Images";
import {getImages} from './services/api';

import { Box } from '@material-ui/core';

import './App.css';

function App() {

  const [data, setdata] = useState('')
  const [userInput, setuserInput] = useState('shoes')
  const [count, setcount] = useState(10)

  useEffect(() => {

    if(count < 3 || count > 200){
      return;
    }


    getImages(userInput,count).then(res =>{
      setdata(res.data.hits);
    })
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
      <UserInput userInputHandler={userInputHandler} userCountHandler={userCountHandler} />
      <Images data={data}/>
    </Box>
  );
}

export default App;
