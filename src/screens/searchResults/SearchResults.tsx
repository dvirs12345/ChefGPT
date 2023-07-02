import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, Typography } from '@mui/material';
import ResultCard from './ResultCard';



const SearchResults = () => {


    const recipes =[
        {
            title: "סלט קיסר",
            time: 45,
            numOfProducts: 60,
            level: "קל",
            numOfDishes: 12,
            specials: "hhis"
        },

        {
            title: "עוף ",
            time: 20,
            numOfProducts: 13,
            level: "קשה",
            numOfDishes: 12,
            specials: "hhis"
        },

        {
            title: "פירה ",
            time: 8,
            numOfProducts: 12,
            level: "קל",
            numOfDishes: 12,
            specials: "hhis"
        },

        {
            title: "קוסקוס ",
            time: 76,
            numOfProducts: 1,
            level: "בינוני",
            numOfDishes: 12,
            specials: "hhis"
        }
    ] 

  return (
    
    <div className="App">
        <h1
          style={{
            textAlign: "center",
            marginTop: "4vh",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
תוצאות החיפוש        </h1>
    {recipes.map((recipe) => (
    <ResultCard recipe={recipe}/>
    ))}
    </div>
  );
}

export default SearchResults;
