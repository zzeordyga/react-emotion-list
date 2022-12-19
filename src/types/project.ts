export type ProjectReducerType = 'fetch' | 'filter' | 'archive' | 'sort';

export enum SortType {
  Descending = 0,
  Ascending = 1,
  Default = -1,
}

export interface ProjectState {
  initData?: Project[];
  data?: Project[];
  loading: boolean;
}

export interface ProjectReducerAction {
  id?: number | string;
  text?: string;
  filter?: string;
  sort?: number | SortType;
  data?: Project[];
  type: ProjectReducerType;
}

export enum ProjectStatus {
  Incomplete = 'INCOMPLETE',
  Shooting = 'SHOOTING',
  Editing = 'EDITING',
  Feedback = 'FEEDBACK',
  Completed = 'COMPLETED',
}

export enum ProjectType {
  Educational = 'educational',
  Testimonial = 'testimonial',
  Training = 'training',
  Recreational = 'recreational',
}

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  type: ProjectType;
  createdOn: string;
  archived: boolean;
}

export default Project;
