import React from 'react';
import {
  Button,
  Checkbox,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import { unArchiveTask, deleteTask } from '../../api/tasks';

const useStyles = makeStyles({
  itemText: {
    textDecoration: 'line-through',
  },
});

export function ArchivedTaskItem({ id, task }) {
  const classes = useStyles();
  const handleDelete = () => deleteTask(id);
  const handleUnarchive = () => unArchiveTask(id);
  return (
    <>
      <ListItem key={id} dense>
        <ListItemIcon>
          <Checkbox checked tabIndex={-1} onClick={handleUnarchive} />
        </ListItemIcon>
        <ListItemText primary={task} className={classes.itemText} />
        <ListItemSecondaryAction>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" light />
    </>
  );
}
