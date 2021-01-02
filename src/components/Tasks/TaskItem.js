import React from 'react';
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export const TaskItem = ({ id, task, archiveTask }) => {
  const handleArchive = () => {
    archiveTask(id);
  };
  return (
    <>
      <ListItem dense>
        <ListItemIcon>
          <Checkbox checked={false} tabIndex={-1} onClick={handleArchive} />
        </ListItemIcon>
        <ListItemText primary={task} />
      </ListItem>
      <Divider variant="inset" light />
    </>
  );
};