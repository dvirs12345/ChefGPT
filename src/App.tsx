import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FirstPage from './screens/FirstPage';
import SearchResults from './screens/searchResults/SearchResults';


function App() {
  return (
    
    <div className="App">
         <Router>
         <Routes>
         {/* <Route path="/" element={<FirstPage/>} /> */}
          <Route path="/" element={<SearchResults/>} />
         </Routes>
        
     </Router>
    </div>
  );
}

export default App;
