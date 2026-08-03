import { FaCamera, FaCheckCircle, FaCommentAlt, FaRegTimesCircle, FaUserEdit } from 'react-icons/fa';
import { ProjectStatus } from '@/types/project';

export function StatusIcon({ status }: { status: ProjectStatus }) {
  switch (status) {
    case ProjectStatus.Completed:
      return <FaCheckCircle aria-label="Completed" />;
    case ProjectStatus.Editing:
      return <FaUserEdit aria-label="Editing" />;
    case ProjectStatus.Feedback:
      return <FaCommentAlt aria-label="Feedback" />;
    case ProjectStatus.Incomplete:
      return <FaRegTimesCircle aria-label="Incomplete" />;
    case ProjectStatus.Shooting:
      return <FaCamera aria-label="Shooting" />;
    default:
      return null;
  }
}

export function statusColor(status: ProjectStatus): string {
  switch (status) {
    case ProjectStatus.Completed:
      return 'var(--success)';
    case ProjectStatus.Editing:
    case ProjectStatus.Feedback:
      return 'var(--accent)';
    case ProjectStatus.Incomplete:
    case ProjectStatus.Shooting:
      return 'var(--danger)';
    default:
      return 'var(--text-muted)';
  }
}