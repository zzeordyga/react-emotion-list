export type ProjectReducerType = 'fetch' | 'filter' | 'archive' | 'paginate';

export interface ProjectPagination {
  pageLimit: number;
  totalData: number;
}

export interface ProjectState {
  data?: Project[];
  loading: boolean;
  pagination?: ProjectPagination;
}

export interface ProjectReducerAction {
  id?: number | string;
  text?: string;
  filter?: string;
  sort?: string;
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
  createdOn: Date;
  archived: boolean;
}

export default Project;
