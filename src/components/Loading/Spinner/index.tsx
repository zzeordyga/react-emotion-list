import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../..';
import { spinnerAnim } from '../../Animations';

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const Spinner = styled.div`
  ${spinnerAnim}

  width: 50px;
  height: 50px;
  opacity: 0.7;
  border: 10px solid ${colors.light};
  border-top: 10px solid ${colors.dark};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;

export const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};
