import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const SidebarItem = ({ title, Icon, ...rest }) => (
  <ListItem button {...rest}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
);
