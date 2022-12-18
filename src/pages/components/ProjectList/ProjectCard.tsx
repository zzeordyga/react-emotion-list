import { css } from '@emotion/css';
import React from 'react';
import { colors, fontSizes } from '../../../components';
import { Card, GridContainer } from '../../../components/Containers';
import { Project } from '../../../types';
import { toTitleCase } from '../../../utils/strings';
import dayjs from 'dayjs';

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
      <GridContainer>
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
          `}
        >
          {toTitleCase(project.status)}
        </div>
        <div
          className={css`
            @media screen and (max-width: 540px) {
              font-weight: bolder;
            }
          `}
        >
          {dayjs().format('MMMM D, YYYY')}
        </div>
      </GridContainer>
    </Card>
  );
};
