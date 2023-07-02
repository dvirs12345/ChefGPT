import React from 'react';
import pic from './pics/chef 1.png';
import './App.css';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';


function App() {
  return (
    
    <div className="App">
       <header className="App-header">
       {/* <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3}}> */}
      {/* <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      > */}
      <Grid container wrap="nowrap" direction={'column'} spacing={10}>
        <Grid item>
          <Typography color='#C6F4E4' fontSize={"10vh"} fontWeight={1000}>
           ChefGPT
          </Typography>          
        </Grid>
        <Grid item xs zeroMinWidth>
          <img src={pic} />
        </Grid>
        <Grid item xs zeroMinWidth>
        <Button sx={{borderRadius: "30px"}} variant="contained" color='success'>חיפוש מתכון חדש</Button>          
        </Grid>
      </Grid>
      {/* </StyledPaper> */}
    {/* </Box> */}
      </header>
    </div>
  );
}

export default App;
