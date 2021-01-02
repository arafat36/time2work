import React, { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons';
import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { ArchivedTaskItem } from './ArchivedTaskItem';
import { firebase } from '../../firebase';
import { useSelectedProjectValue } from '../../context';
import { useTasks } from '../../hooks';

export const ArchivedTasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { archivedTasks } = useTasks(selectedProject);
  const [showArchived, setShowArchived] = useState(false);

  const handleShowArchived = () => setShowArchived((sh) => !sh);

  const unArchiveTask = (id) => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({ archived: false });
  };

  const deleteTask = (id) => {
    firebase.firestore().collection('tasks').doc(id).delete();
  };

  return (
    <>
      <Box mt={2}>
        <Button
          onClick={handleShowArchived}
          startIcon={
            showArchived ? <KeyboardArrowDown /> : <KeyboardArrowRight />
          }
          disableElevation
          size="large"
        >
          Archived Tasks
        </Button>
      </Box>
      <Collapse in={showArchived}>
        <List>
          {archivedTasks.length ? (
            archivedTasks.map((task) => (
              <ArchivedTaskItem
                key={task.id}
                id={task.id}
                task={task.task}
                {...{ unArchiveTask, deleteTask }}
              />
            ))
          ) : (
            <ListItem>
              <Typography paragraph color="textSecondary">
                There are no archived tasks here...
              </Typography>
            </ListItem>
          )}
        </List>
      </Collapse>
    </>
  );
};
