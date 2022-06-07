import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import Home from './Components/Home/Index';


function App() {
  return (
    <div className="App">
      <Grid item xs={12}>
        <h5 style={{color:'blue', fontSize:'20px'}}>Calendar</h5>
        <Home/>
    
      </Grid>
  
    </div>
  );
}

export default App;
