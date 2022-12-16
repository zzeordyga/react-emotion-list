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
  name: string;
  status: ProjectStatus;
  type: ProjectType;
  createdOn: Date;
  archived: boolean;
}

export default Project;
