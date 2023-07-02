// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Drawer } from '@mui/material';


// const RecipeDrawer = (props: any) => {


//   return (
      
//       <Drawer
//             anchor={"bottom"}
//             open={true}
//           >

// dfdfdfd
//           </Drawer>
      
//   );
// }


// export default RecipeDrawer;








import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const RecipeDrawer = (props: any) => {
let openDrawer;


    React.useEffect(() => {
         openDrawer = props.openDrawer
        console.log(props)
    
      }, [props]);

      const [state, setState] = React.useState(openDrawer);

//   {console.log(state)}


  return (

    <div>
        
        <Drawer
        anchor={"bottom"}
        open={state}
        // onClose={() => setState(false)}
        >
    <Box
      sx={{ width: 'auto' }}
      role="presentation"      
    >
sfdfdf
    </Box>          
    </Drawer>
    </div>
  );
}


export default RecipeDrawer;