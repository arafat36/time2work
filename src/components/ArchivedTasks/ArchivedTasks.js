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
import { useSelectedProjectValue } from '../../context';
import { useTasks } from '../../hooks';

export const ArchivedTasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { archivedTasks } = useTasks(selectedProject);
  const [showArchived, setShowArchived] = useState(false);

  const handleShowArchived = () => setShowArchived((sh) => !sh);

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
              <ArchivedTaskItem key={task.id} id={task.id} task={task.task} />
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
