import { useState } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Box, Typography, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import LanguageIcon from '@mui/icons-material/Language';
import BuildIcon from '@mui/icons-material/Build';
import ImageIcon from '@mui/icons-material/Image';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { removeToken } from '../lib/auth';

const drawerWidth = 240;

const menuItems = [
  { key: '/admin/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
  { key: '/admin/products', icon: <InventoryIcon />, label: 'Products' },
  { key: '/admin/categories', icon: <CategoryIcon />, label: 'Categories' },
  { key: '/admin/markets', icon: <LanguageIcon />, label: 'Markets' },
  { key: '/admin/services', icon: <BuildIcon />, label: 'Services' },
  { key: '/admin/careers', icon: <WorkIcon />, label: 'Careers' },
  { key: '/admin/banners', icon: <ImageIcon />, label: 'Banners' },
  { key: '/admin/contact-leads', icon: <PeopleIcon />, label: 'Contact Leads' },
  { key: '/admin/projects', icon: <WorkIcon />, label: 'Projects' },
  { key: '/admin/users', icon: <PersonIcon />, label: 'Users' },
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    removeToken();
    router.push('/admin/login');
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" align="center" sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}>
          Safe Zone
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            component="button"
            key={item.key}
            onClick={() => router.push(item.key)}
            selected={router.pathname === item.key}
            sx={{
              backgroundColor: router.pathname === item.key ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button 
            variant="contained" 
            color="error" 
            startIcon={<ExitToAppIcon />}
            onClick={handleLogout}
            sx={{ color: 'white' }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1976d2' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ mt: 2, p: 2, backgroundColor: '#fff', minHeight: '80vh' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}