import React from 'react';
import './App.css';
import { ProjectContextProvider } from './contexts/ProjectContext';
import { Home } from './pages';

function App() {
  return (
    <div className='App'>
      <ProjectContextProvider
        initValue={{
          data: [],
          loading: true,
        }}
      >
        <Home />
      </ProjectContextProvider>
    </div>
  );
}

export default App;
