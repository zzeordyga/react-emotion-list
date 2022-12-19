import { css } from '@emotion/css';
import React from 'react';
import { colors, fontSizes } from '../../../components';
import { Card, GridContainer } from '../../../components/Containers';
import { Project } from '../../../types';
import { toTitleCase } from '../../../utils/strings';
import dayjs from 'dayjs';
import { ProjectStatus } from '../../../types/project';
import { StatusIcon } from './StatusIcon';

export const ProjectCard = (props: { project: Project }) => {
  const { project } = props;

  return (
    <Card
      backgroundColor={colors.light}
      className={css`
        @media only screen and (max-width: 700px) {
          padding: 12px 16px;
          & > * {
            font-size: ${fontSizes.xs};
            width: 100%;
          }
        }
      `}
    >
      <GridContainer
        className={css`
          text-align: left;
          margin: auto;
        `}
      >
        <div
          className={css`
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
              : project.status === ProjectStatus.Editing ||
                project.status === ProjectStatus.Feedback
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
            }
          `}
        >
          {dayjs(project.createdOn).format('MMMM D, YYYY')}
        </div>
      </GridContainer>
    </Card>
  );
};
