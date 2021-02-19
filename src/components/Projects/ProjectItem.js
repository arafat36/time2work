import React from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
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

const ProjectItem = ({
  project,
  selected,
  showConfirm,
  handleOnSelected,
  handleOnClick,
  handleOnDelete,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      className={classes.root}
      onClick={handleOnSelected}
      selected={selected}
    >
      <ColoredBullet id={project.docId} />
      <ProjectName name={project.name} />
      <DeleteProjectBtn {...{ btnClass: classes.deleteBtn, handleOnClick }} />
      <DeleteProjectDialog
        {...{
          showConfirm,
          handleOnClick,
          project,
          handleOnDelete,
        }}
      />
    </ListItem>
  );
};

export default ProjectItem;
