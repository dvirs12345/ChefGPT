import React from 'react';
import pic from '../pics/chef 1.png';
import '../App.css';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';


const FirstPage = () => {
  return (
    
    <div className="App">
       <header className="App-header" style={{background: "#ffffff"}}>
      <Grid container wrap="nowrap" direction={'column'} spacing={10}>
        <Grid item>
          <Typography color='#0F8C5F'  fontSize={"6vh"} fontWeight={1000}>
           ChefGPT
          </Typography>          
        </Grid>
        <Grid item xs zeroMinWidth>
          <img src={pic} />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Button sx={{borderRadius: "30px", width: "70vw", height: "7vh"}} variant="contained" color='success' >
            <h2>
            צור מתכון חדש              
            </h2>
            </Button>          
        </Grid>
      </Grid>
      </header>
    </div>
  );
}

export default FirstPage;
