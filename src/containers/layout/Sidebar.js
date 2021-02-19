import React, { useState } from 'react';
import { Collapse, Divider, Box } from '@material-ui/core';
import { Projects } from '../Projects';
import { AddProject } from '../../components/Projects/AddProject';
import { ProjectsToggle } from '../../components/Projects/ProjectsToggle';
import { CollatedTasks } from '../../components/CollatedTasks/CollatedTasks';

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <Box m={1} my={3} pr={3}>
      <CollatedTasks />
      <ProjectsToggle {...{ setShowProjects, showProjects }} />
      <Divider />
      <Collapse in={showProjects} timeout="auto">
        <AddProject />
        <Projects />
      </Collapse>
    </Box>
  );
};
