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

export enum SortType {
  Descending = 0,
  Ascending = 1,
  Default = -1,
}

export interface DbShape {
  data: Project[];
}