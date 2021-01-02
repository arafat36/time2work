import React, { useState } from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
import { firebase } from '../../firebase';
import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { DeleteProjectDialog } from './DeleteProjectDialog';
import { ColoredBullet } from './ColoredBullet';
import { DeleteProjectBtn } from './DeleteProjectBtn';
import { ProjectName } from './ProjectName';

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
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { selectedProject, setSelectedProject } = useSelectedProjectValue();
  const classes = useStyles();

  const handleOnSelected = () => setSelectedProject(project.projectId);
  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject('INBOX');
      });
  };

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
          deleteProject,
        }}
      />
    </ListItem>
  );
};
