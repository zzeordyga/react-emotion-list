import { ProjectState, ProjectReducerAction } from '../types/project';

export const projectReducer = (
  projects: ProjectState,
  action: ProjectReducerAction,
): ProjectState => {
  switch (action.type) {
    case 'fetch':
      return {
        data: action.data,
      };
    case 'archive':
      break;
    case 'filter':
      break;
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  return projects;
};
