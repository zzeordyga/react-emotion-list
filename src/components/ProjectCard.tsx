import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { type Project } from '@/types/project';
import { toTitleCase } from '@/utils/strings';
import { StatusIcon, statusColor } from './StatusIcon';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Name>{project.name}</Name>
      <Type>
        <Pill>{toTitleCase(project.type)}</Pill>
      </Type>
      <Status>
        <StatusIcon status={project.status} />
        <span style={{ color: statusColor(project.status), fontWeight: 600 }}>
          {toTitleCase(project.status)}
        </span>
      </Status>
      <Date>{dayjs(project.createdOn).format('MMM D, YYYY')}</Date>
    </Card>
  );
}

const Card = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
  transition: background 0.15s;
  &:hover { background: var(--surface-2); }
  &:last-child { border-bottom: 0; }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'name name'
      'type status'
      'date date';
    gap: 0.5rem;
  }
`;

const Name = styled.div`
  grid-area: name;
  font-weight: 600;
  color: var(--text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;
const Type = styled.div`grid-area: type;`;
const Status = styled.div`
  grid-area: status;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
`;
const Date = styled.div`
  grid-area: date;
  color: var(--text-muted);
  font-size: 0.85rem;
`;

const Pill = styled.span`
  display: inline-block;
  padding: 0.15rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 550;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
`;