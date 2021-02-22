import React, { useRef, useEffect } from 'react';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { useSelectedProjectValue } from '../../context';
import { TaskDate } from './TaskDate';
import { collatedTasksExist, getTaskDate } from '../../helpers';
import { ProjectOverlay } from './ProjectOverlay';
import { addTask } from '../../api/tasks';

const useStyles = makeStyles({
  submitBtn: {
    marginRight: '1em',
  },
});

export const AddTaskForm = ({ setShowForm }) => {
  const classes = useStyles();
  const taskRef = useRef();
  const { selectedProject } = useSelectedProjectValue();
  const projectIdRef = useRef('');
  const taskDateRef = useRef('');

  useEffect(() => {
    if (!collatedTasksExist(selectedProject))
      projectIdRef.current = selectedProject;
    else taskDateRef.current = selectedProject;
  }, [selectedProject]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add Task
    const task = taskRef.current.value;
    const projectId = projectIdRef.current;
    const taskDate = getTaskDate(taskDateRef, selectedProject);
    // console.log('[addTaskForm] taskDateRef', taskDateRef);
    // console.log('[addTaskForm]', projectId, task, taskDate);
    if (task) addTask(projectId, task, taskDate);

    // Reset values
    taskRef.current.value = '';
    taskDateRef.current = '';
    projectIdRef.current = '';

    // Hide forms
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexWrap="wrap" alignItems="center">
        <Box flexBasis="100%" m={0.5}>
          <TextField
            label="Task Name:"
            variant="outlined"
            fullWidth
            inputProps={{ ref: taskRef }}
          />
        </Box>
        <Box m={0.5} mr="auto">
          <Button
            className={classes.submitBtn}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Task
          </Button>
          <Button variant="contained" onClick={() => setShowForm(false)}>
            cancel
          </Button>
        </Box>

        <Box m={0.5}>
          <TaskDate taskDateRef={taskDateRef} />
          {collatedTasksExist(selectedProject) && (
            <ProjectOverlay projectIdRef={projectIdRef} />
          )}
        </Box>
      </Box>
    </form>
  );
};
