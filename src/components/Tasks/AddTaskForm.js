import React, { useRef } from 'react';
import moment from 'moment';
import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { firebase } from '../../firebase';
import { useSelectedProjectValue } from '../../context';
import { TaskDate } from './TaskDate';
import { collatedTasksExist } from '../../helpers';
import { ProjectOverlay } from './ProjectOverlay';

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
  if (!collatedTasksExist(selectedProject))
    projectIdRef.current = selectedProject;
  else taskDateRef.current = selectedProject;

  const addTask = () => {
    const task = taskRef.current.value;
    const projectId = projectIdRef.current;
    let taskDate = '';

    if (taskDateRef.current) {
      switch (taskDateRef.current) {
        case 'TODAY':
          taskDate = moment().format('DD/MM/YYYY');
          break;

        case 'TOMORROW':
          taskDate = moment().add(1, 'day').format('DD/MM/YYYY');
          break;

        case 'NEXT_7':
          taskDate = moment().add(7, 'days').format('DD/MM/YYYY');
          break;

        default:
          break;
      }
    } else if (collatedTasksExist(selectedProject)) {
      switch (selectedProject) {
        case 'TODAY':
          taskDate = moment().format('DD/MM/YYYY');
          break;

        case 'NEXT_7':
          taskDate = moment().add(7, 'days').format('DD/MM/YYYY');
          break;

        default:
          break;
      }
    }
    // Reset values
    taskRef.current.value = '';
    taskDateRef.current = '';
    projectIdRef.current = '';

    return (
      task &&
      firebase.firestore().collection('tasks').add({
        archived: false,
        projectId,
        task,
        date: taskDate,
        userId: 'userid-001',
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
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
