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

export const DeleteProjectDialog = ({
  showConfirm,
  project,
  setShowConfirm,
  deleteProject,
}) => (
  <Dialog
    open={showConfirm}
    onClose={() => {
      setShowConfirm(false);
    }}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    PaperProps={{
      component: function DialogContainer(props) {
        return <Box p={2} {...props} />;
      },
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
        onClick={() => {
          setShowConfirm(false);
          deleteProject(project.docId);
        }}
        color="primary"
        variant="contained"
        autoFocus
      >
        Delete Project
      </Button>
      <Button
        onClick={() => {
          setShowConfirm(false);
        }}
        color="default"
        variant="contained"
      >
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);
