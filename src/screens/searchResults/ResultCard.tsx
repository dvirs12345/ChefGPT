import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import RecipeDrawer from './RecipeDrawer';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { Margin } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const ResultCard = (props: any) => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [value, setValue] = React.useState('2');

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    const handleClose = () => {
        console.log("dfdd")
        setOpenDrawer(false)
    };
    const DrawerRecipe = () => (
        <Drawer
            anchor={"bottom"}
            open={openDrawer}
        >
             <IconButton
             onClick={() => handleClose()}>
             <ExpandMoreOutlinedIcon fontSize='large'/>
            </IconButton>

            <Box
                sx={{ width: 'auto' }}
                role="presentation"
            >
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
                    {props.recipe.title}       </h1>

                <Grid container sx={{ direction: "rtl", flex: 2, flexDirection: "row", justifyContent: 'space-evenly', color: "#8E939E" }}>


                    <Grid xs={2}>
                        <TimerOutlinedIcon sx={{ color: "#61BF9D" }} />
                        {props.recipe.time + " "}
                        דק
                    </Grid>

                    <Grid xs={2}>
                        <TimerOutlinedIcon />
                        {props.recipe.level + " "}
                    </Grid>


                    <Grid item xs={2}>
                        <PersonOutlineOutlinedIcon />
                        {props.recipe.numOfDishes + " "}
                        מנות
                    </Grid>

                    <Grid item xs={2}>
                        <StarOutlineOutlinedIcon />
                        {props.recipe.specials + " "}
                    </Grid>
                </Grid>


                    <Box sx={{display: "flex", justifyContent: "space-around", margin: "3vh"}}>
                            <Box sx={{width: "75vw", height: "6vh", background: "#E5E8EF", borderRadius: "15px"}}>
                            <Tab label="שלבי הכנה" sx={{fontSize: "2vh", fontWeight: 700, color: value == '1' ? "#ffffff": "", background: value == '1' ? "#61BF9D" : "", width: "50%", borderRadius: "15px"}}
                            onClick={() => handleChange("1")}/>
                            <Tab label="מרכיבים" sx={{fontSize: "2vh", fontWeight: 700, color: value == '2' ? "#ffffff" : "" , background: value == '2' ? "#61BF9D" : "", width: "50%", borderRadius: "15px"}}
                            onClick={() => handleChange("2")}/>
                            </Box>

                    </Box>


{/* ************************88 */}
                    
                    <Box sx={{height: "4vh", margin: "1vh"}}>
                    <Grid container sx={{ direction: "rtl", flex: 2, flexDirection: "row", justifyContent: 'space-evenly', color: "#8E939E" }}>
                    <Grid xs={2}>
                        <TimerOutlinedIcon sx={{ color: "#61BF9D" }} />
                        {props.recipe.time + " "}
                        דק
                    </Grid>
                    <Grid xs={7}>
                    </Grid>

                    <Grid xs={2}>
                        <TimerOutlinedIcon />
                        {props.recipe.level + " "}
                    </Grid>
                    </Grid>

                    </Box>
                    <Divider/>

                    <Box sx={{height: "5vh", margin: "1vh"}}>
                    <Grid container sx={{ direction: "rtl", flex: 2, flexDirection: "row", justifyContent: 'space-evenly', color: "#8E939E" }}>
                    <Grid xs={2}>
                        <TimerOutlinedIcon sx={{ color: "#61BF9D" }} />
                        {props.recipe.time + " "}
                        דק
                    </Grid>
                    <Grid xs={7}>
                    </Grid>

                    <Grid xs={2}>
                        <TimerOutlinedIcon />
                        {props.recipe.level + " "}
                    </Grid>
                    </Grid>

                    </Box>
                    
{/* ************************88 */}

            </Box>
        </Drawer>
    )

    return (
        
        <Card sx={{height: "15vh", direction: "rtl", borderRadius: "16px" , margin:"2vh"}}
        onClick={() => {
            setOpenDrawer(true)
        }}>
        <CardContent >
        <Grid container spacing={1}>
            <Grid item xs={10}>
                <Grid item xs={5}>
                    <Typography sx={{fontWeight: 700, color: "black", fontSize: "5vw" }}>
                    {props.recipe.title}                    
                    </Typography>                
                </Grid>
                <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>
                    
                    <Typography sx={{ color: "black", fontSize: "4vw" }}>
                    <TimerOutlinedIcon sx={{ color: "#61BF9D" }}/>
                    {props.recipe.time + " "}                    
                     דק                 
                    </Typography> 
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ color: "black", fontSize: "4vw" }}>
                    <ShoppingBasketOutlinedIcon sx={{ color: "#CED6DA" }}/>
                    {props.recipe.numOfProducts + " "}                    

                     מרכיבים                    
                    </Typography> 
                </Grid>

                <Grid item xs={4}>
                </Grid>
            </Grid>
            <Grid item xs={2} display={'flex'} alignItems={"center"}>
                <IconButton>
                    <ArrowBackIosIcon/>
                </IconButton>
            </Grid>
        </Grid>
          
        </CardContent>
        <CardActions>
            {/* <Button size="small">Learn More</Button> */}
        </CardActions>

        <DrawerRecipe/>
        </Card>   
    
    )
    
}

        

export default ResultCard;
