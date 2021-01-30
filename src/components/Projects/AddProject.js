import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { generatePushId } from '../../helpers';
import { addProject } from '../../actions/projects';

export const AddProject = () => {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState('');
  const projectId = generatePushId();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    addProject(projectId, projectName).then(() => {
      setProjectName('');
      setShow((sh) => !sh);
    });
  });

  const handleProjectName = useCallback((e) => setProjectName(e.target.value));

  const handleShowAddProject = useCallback(() => setShow((sh) => !sh));

  return show ? (
    <form onSubmit={handleSubmit}>
      <Box
        // style={{ background: 'lightyellow' }}
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        mb={2}
      >
        <Box m={1} mr="auto" flexGrow={1}>
          <FormControl fullWidth>
            <InputLabel htmlFor="add-project-input">
              Enter project name:
            </InputLabel>
            <Input
              id="add-project-input"
              placeholder="Project name"
              value={projectName}
              onChange={handleProjectName}
              required
            />
          </FormControl>
        </Box>
        <Box m={0.5}>
          <Button
            htmlFor="add-project-input"
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Add Project
          </Button>
        </Box>
        <Box m={0.5}>
          <Button
            variant="contained"
            size="small"
            onClick={handleShowAddProject}
            onKeyDown={handleShowAddProject}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  ) : (
    <Box display="flex" justifyContent="flex-end" m={1} mt={2}>
      <Button
        startIcon={<Add />}
        onClick={handleShowAddProject}
        onKeyDown={handleShowAddProject}
        color="primary"
        size="small"
        variant="outlined"
      >
        Add New Project
      </Button>
    </Box>
  );
};
