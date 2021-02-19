import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

function DialogContainer(props) {
  return <Box p={2} {...props} />;
}

export const DeleteProjectDialog = ({
  showConfirm,
  handleOnClick,
  project,
  handleOnDelete,
}) => (
  <Dialog
    open={showConfirm}
    onClose={handleOnClick}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    PaperProps={{
      component: DialogContainer,
    }}
  >
    <DialogTitle id="alert-dialog-title">
      Do you really want to delete '{project.name}'?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to delete this project and every task inside? The
        tasks will be lost forever.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={handleOnDelete}
        color="primary"
        variant="contained"
        autoFocus
      >
        Delete Project
      </Button>
      <Button onClick={handleOnClick} color="default" variant="contained">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);
