import React from 'react';
import {
  Icon,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { DeleteRounded } from '@material-ui/icons';
import { randomColor } from 'randomcolor';
import { DeleteProjectDialog } from './DeleteProjectDialog';

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
      <ProjectItem.Bullet id={project.docId} />
      <ProjectItem.Name name={project.name} />
      <ProjectItem.DeleteBtn
        {...{ btnClass: classes.deleteBtn, handleOnClick }}
      />
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

ProjectItem.Name = function ProjectName({ name }) {
  return <ListItemText primary={name} />;
};

ProjectItem.DeleteBtn = function DeleteProjectBtn({ btnClass, handleOnClick }) {
  return (
    <ListItemSecondaryAction>
      <IconButton
        className={btnClass}
        disableFocusRipple
        disableRipple
        size="small"
        onClick={handleOnClick}
      >
        <DeleteRounded />
      </IconButton>
    </ListItemSecondaryAction>
  );
};

ProjectItem.Bullet = function ColoredBullet({ id }) {
  const iconColor = randomColor({ seed: id });
  return (
    <ListItemIcon>
      <Icon style={{ color: `${iconColor}` }} fontSize="large">
        &bull;
      </Icon>
    </ListItemIcon>
  );
};

export default ProjectItem;
