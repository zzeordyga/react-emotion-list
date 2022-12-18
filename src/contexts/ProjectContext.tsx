import { object } from 'prop-types';
import React, { createContext, Dispatch, Reducer, useEffect, useReducer } from 'react';
import { projectReducer } from '../reducers/ProjectReducer';
import { ProjectState, ProjectReducerAction } from '../types/project';
import axios from 'axios';

export const ProjectContext = createContext<ProjectState>({} as ProjectState);
export const ProjectContextDispatch = createContext<Dispatch<ProjectReducerAction>>(
  {} as Dispatch<ProjectReducerAction>,
);

export const ProjectContextProvider = (props: {
  initValue: ProjectState;
  children: React.ReactNode;
}) => {
  const { initValue, children } = props;
  const [projects, dispatch] = useReducer<Reducer<ProjectState, ProjectReducerAction>>(
    projectReducer,
    initValue,
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios('http://localhost:8000/data');
      dispatch({
        type: 'fetch',
        data,
      });
    };
    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={projects}>
      <ProjectContextDispatch.Provider value={dispatch}>{children}</ProjectContextDispatch.Provider>
    </ProjectContext.Provider>
  );
};

ProjectContextProvider.propTypes = {
  initValue: object,
  children: object,
};
