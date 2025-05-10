import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

export const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');
  const items = ['Dashboard', 'Reports', 'Settings'];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {items.map((text) => (
          <ListItemButton
            key={text}
            selected={selected === text}
            onClick={() => setSelected(text)}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};


