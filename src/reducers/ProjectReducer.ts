import { ProjectState, ProjectReducerAction } from '../types/project';

export const projectReducer = (
  projects: ProjectState,
  action: ProjectReducerAction,
): ProjectState => {
  switch (action.type) {
    case 'fetch':
      return {
        initData: action.data,
        data: action.data,
        loading: false,
      };
    case 'sort':
      switch (action.sort) {
        case 0:
          return {
            ...projects,
            data: projects.data?.sort(
              (a, b) => new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime(),
            ),
          };
        case 1:
          return {
            ...projects,
            data: projects.data?.sort(
              (a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime(),
            ),
          };
        default:
          return { ...projects };
      }
      break;
    case 'filter':
      break;
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  return projects;
};
