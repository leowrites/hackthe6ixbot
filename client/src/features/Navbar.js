import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;


export default function DrawerAppBar() {
  let navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pageToNavigate = {
    'Home': () => { navigate('/') },
    'Questions & Topics': () => { navigate('/questions') },
    'Advisors': () => { navigate('/advisors') }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Financial Bot
      </Typography>
      <Divider />
      <List>
        {Object.keys(pageToNavigate).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={pageToNavigate[item]}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // buttons navigate to different pages
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar style={{ backgroundColor: 'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "start" }}
          >
            Financial Bot
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {
              Object.keys(pageToNavigate).map((item) => (
                // navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }} onClick={pageToNavigate[item]}>
                  {item}
                </Button>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
