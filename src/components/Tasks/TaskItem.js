import React, { useCallback } from 'react';
import {
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { archiveTask } from '../../api/tasks';

export const TaskItem = ({ id, task }) => {
  const handleArchive = useCallback(() => {
    archiveTask(id);
  }, [id]);

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
