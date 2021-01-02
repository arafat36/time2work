import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Header } from './containers/layout/Header';
import { Content } from './containers/layout/Content';
import { SelectedProjectProvider, ProjectsProvider } from './context';

const useStyles = makeStyles({
  root: {
    background: '#f9f9f9',
    height: '100vh',
  },
});

export const App = ({ darkModeDefault = false }) => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className={classes.root} data-testid="application">
          <Header {...{ darkMode, setDarkMode }} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
