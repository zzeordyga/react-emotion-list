import Project, {
  ProjectState,
  ProjectReducerAction,
  ProjectType,
  ProjectStatus,
} from '../types/project';

const checkType = (str: string) => {
  const types = Object.values(ProjectType);
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    if (type.toLowerCase() === str) return true;
  }

  return false;
};
const checkStatus = (str: string) => {
  const stats = Object.values(ProjectStatus);
  for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat.toLowerCase() === str) return true;
  }

  return false;
};

const checkValid = (type: string, keyword: string, project: Project) => {
  const isType = checkType(keyword);
  const isStatus = checkStatus(keyword);

  switch (type) {
    case 'is':
      if (isType) return project.type.toLowerCase() === keyword;
      if (isStatus) return project.status.toLowerCase() === keyword;
      return false;
      break;
    case 'not':
      if (isType) return project.type.toLowerCase() !== keyword;
      if (isStatus) return project.status.toLowerCase() !== keyword;
      return true;
      break;
    case 'after':
      return new Date(project.createdOn) >= new Date(keyword);
    case 'before':
      return new Date(project.createdOn) <= new Date(keyword);
    default:
      return false;
  }
};

const filterProjects = (filter: string, projectsState: ProjectState) => {
  if (filter?.length === 0) return projectsState.initData;

  const keywords = filter.toLowerCase()?.split(' ');

  return projectsState.initData?.filter((project) => {
    for (let i = 0; i < keywords.length; i++) {
      const word = keywords[i];
      const prompt = word.split(':', 2);

      if (prompt.length > 1) {
        const type = prompt[0].toLowerCase();
        const keyword = prompt[1].toLowerCase();

        if (!checkValid(type, keyword, project)) {
          return false;
        }
      } else if (!project.name.toLowerCase().includes(word)) {
        return false;
      }
    }

    return true;
  });
};

export const projectReducer = (
  projects: ProjectState,
  action: ProjectReducerAction,
): ProjectState => {
  switch (action.type) {
    case 'fetch':
      return {
        initData: [...(action.data as Project[])],
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
          return { ...projects, data: projects.initData };
      }
      break;
    case 'filter':
      return { ...projects, data: filterProjects(action?.filter as string, projects) };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  return projects;
};
