import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import { useTasks } from '../../hooks';
import { collatedTasks } from '../../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../../context';
import { TaskItem } from './TaskItem';
import { AddTask } from './AddTask';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  }, [projectName]);

  useEffect(() => {
    let title = '';
    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
      title = getTitle(projects, selectedProject).name;
      setProjectName(title);
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
      title = getCollatedTitle(collatedTasks, selectedProject).name;
      setProjectName(title);
    }
  }, [selectedProject]);

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
