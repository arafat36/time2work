import React from 'react';
import { Container, Grid, Hidden, makeStyles } from '@material-ui/core';
import { Sidebar } from './Sidebar';
import { Tasks } from '../../components/Tasks/Tasks';
import { ArchivedTasks } from '../../components/ArchivedTasks/ArchivedTasks';
// import { AddTask } from '../../components/Tasks/AddTask';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    borderRadius: '5px',
    border: '1px solid #eee',
    minHeight: '87%',
  },
});

export const Content = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Hidden mdDown>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9}>
          <Tasks />
          <ArchivedTasks />
        </Grid>
      </Grid>
    </Container>
  );
};
