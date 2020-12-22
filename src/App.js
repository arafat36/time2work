import React, { useState } from 'react';

import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { SelectedProjectProvider, ProjectsProvider } from './context';

export const App = ({ darkModeDefault=false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main 
          className={ darkMode ? "darkmode" : undefined }
          data-testid="application"
        >
          <Header { ...{ darkMode, setDarkMode } } />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
