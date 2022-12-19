import React from 'react';
import { ProjectStatus } from '../../../types/project';
import {
  FaCamera,
  FaCheckCircle,
  FaCommentAlt,
  FaRegTimesCircle,
  FaUserEdit,
} from 'react-icons/fa';

export const StatusIcon = (props: { status: ProjectStatus }) => {
  const { status } = props;

  switch (status) {
    case ProjectStatus.Completed:
      return <FaCheckCircle />;
    case ProjectStatus.Editing:
      return <FaUserEdit />;
    case ProjectStatus.Feedback:
      return <FaCommentAlt />;
    case ProjectStatus.Incomplete:
      return <FaRegTimesCircle />;
    case ProjectStatus.Shooting:
      return <FaCamera />;
    default:
      <></>;
      break;
  }

  return <></>;
};
