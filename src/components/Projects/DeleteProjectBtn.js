import React from 'react';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { DeleteRounded } from '@material-ui/icons';

export const DeleteProjectBtn = ({ btnClass, setShowConfirm }) => (
  <ListItemSecondaryAction>
    <IconButton
      className={btnClass}
      disableFocusRipple
      disableRipple
      size="small"
      onClick={() => setShowConfirm((open) => !open)}
    >
      <DeleteRounded />
    </IconButton>
  </ListItemSecondaryAction>
);
