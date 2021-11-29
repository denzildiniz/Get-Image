import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import UserInput from './components/UserInput';
import Images from "./components/Images";
import {getImages} from './services/api';

import { Box , makeStyles} from '@material-ui/core';

import './App.css';

function App() {

  const [data, setdata] = useState('')

  useEffect(() => {
    getImages().then(res =>{
      setdata(res.data.hits);
      // console.log(res.data.hits)
    })
  }, [])

  return (
    <Box>
      <Navbar/>
      <UserInput/>
      <Images data={data}/>
    </Box>
  );
}

export default App;
