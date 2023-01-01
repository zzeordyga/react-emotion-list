import { css } from '@emotion/css';
import React from 'react';
import { colors, fontSizes } from '../../../components';
import { Card } from '../../../components/Containers';
import { Project } from '../../../types';
import { toTitleCase } from '../../../utils/strings';
import dayjs from 'dayjs';
import { ProjectStatus } from '../../../types/project';
import { StatusIcon } from './StatusIcon';

export const ProjectCard = (props: { project: Project }) => {
  const { project } = props;

  return (
    <Card
      display='grid'
      justifyContent='space-between'
      backgroundColor={colors.light}
      className={css`
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 4px;
        align-items: center;

        @media screen and (max-width: 540px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-row-gap: 4px;
        }

        @media only screen and (max-width: 700px) {
          padding: 12px 16px;
          & > * {
            font-size: ${fontSizes.xs};
            width: 100%;
          }
        }
      `}
    >
      <div
        className={css`
          text-align: left;
          @media screen and (max-width: 540px) {
            font-weight: bolder;
          }
        `}
      >
        {project.name}
      </div>
      <div
        className={css`
          @media screen and (max-width: 540px) {
            font-weight: bolder;
            width: 100%;
            text-align: right;
          }
        `}
      >
        {toTitleCase(project.type)}
      </div>
      <div
        className={css`
          @media screen and (max-width: 540px) {
            font-weight: bolder;
          }

          color: ${project.status === ProjectStatus.Completed
            ? colors.secondary
            : project.status === ProjectStatus.Editing || project.status === ProjectStatus.Feedback
              ? colors.neutral
              : project.status === ProjectStatus.Incomplete ||
                project.status === ProjectStatus.Shooting
                ? colors.danger
                : ''};
          display: flex;
          align-items: center;
        `}
      >
        <StatusIcon status={project.status} />
        <span
          className={css`
            margin-left: 4px;
          `}
        >
          {toTitleCase(project.status)}
        </span>
      </div>
      <div
        className={css`
          @media screen and (max-width: 540px) {
            font-weight: bolder;

            width: 100%;
            text-align: right;
          }
        `}
      >
        {dayjs(project.createdOn).format('MMMM D, YYYY')}
      </div>
    </Card>
  );
};
