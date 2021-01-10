import React, { useEffect } from 'react';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import { useTasks } from '../../hooks';
import { collatedTasks } from '../../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../../context';
import { firebase } from '../../firebase';
import { TaskItem } from './TaskItem';
import { AddTask } from './AddTask';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = '';
  if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    console.table(projects);
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  }, [projectName]);

  const archiveTask = (id) => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true });
  };

  return (
    <Box m={1} my={3}>
      <Box display="flex" flexDirection="column">
        <Typography variant="h3" gutterBottom>
          {projectName}
        </Typography>
        <AddTask />
      </Box>
      <List>
        {tasks.length ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...{
                id: task.id,
                task: task.task,
                archiveTask,
              }}
            />
          ))
        ) : (
          <ListItem>
            <Typography color="textPrimary">
              There are no tasks todo here! Wohoo 🎉🎉!
            </Typography>
          </ListItem>
        )}
      </List>
    </Box>
  );
};
