import React, { useState, useCallback } from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
import { useSelectedProjectValue } from '../../context';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { ColoredBullet } from './ColoredBullet';
import { DeleteProjectBtn } from './DeleteProjectBtn';
import { ProjectName } from './ProjectName';
import { deleteProject } from '../../actions/projects';

const useStyles = makeStyles({
  root: {
    '&:hover $deleteBtn': {
      display: 'flex',
    },
  },
  deleteBtn: {
    display: 'none',
  },
});

export const ProjectItem = ({ project }) => {
  const classes = useStyles();
  const [showConfirm, setShowConfirm] = useState(false);
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();

  const handleOnSelected = useCallback(
    () => setSelectedProject(project.projectId),
    [project]
  );

  const handleDeleteProject = useCallback(() => {
    deleteProject(project.docId).then(() => {
      setSelectedProject('INBOX');
      console.log('delted doc', project.docId);
    });
  }, [project]);

  return (
    <ListItem
      button
      className={classes.root}
      onClick={handleOnSelected}
      selected={selectedProject === project.projectId}
    >
      <ColoredBullet id={project.docId} />
      <ProjectName name={project.name} />
      <DeleteProjectBtn {...{ btnClass: classes.deleteBtn, setShowConfirm }} />
      <DeleteProjectDialog
        {...{
          showConfirm,
          setShowConfirm,
          project,
          handleDeleteProject,
        }}
      />
    </ListItem>
  );
};
