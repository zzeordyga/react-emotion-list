import styled from '@emotion/styled';
import { colors, fontSizes } from '..';
import { Props } from '../../types';

export const GradientContainer = styled.div`
  min-height: 100vh;
  background: rgb(35, 7, 42);
  background: linear-gradient(
    130deg,
    rgba(35, 7, 42, 1) 0%,
    rgba(87, 10, 80, 1) 100%,
    rgba(158, 61, 189, 1) 100%
  );
`;

export const SemiTransparentContainer = styled.div<Props>`
  background: ${colors.secondary + '60'};
  padding: 24px;
  margin: 24px auto;
  position: relative;
  border-radius: 8px;
  min-height: ${(p) => (p.minHeight ? p.minHeight : '0')};
  position: relative;

  @media only screen and (max-width: 540px) {
    border-radius: 0;
  }
`;

export const CenteredContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const Flexbox = styled.div<Props>`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};

  @media only screen and (max-width: 540px) {
    flex-direction: ${(p) =>
      p.switchDirection && p.flexDirection === 'row'
        ? 'column'
        : p.switchDirection && p.flexDirection === 'column'
        ? 'row'
        : ''};

    & > *:not(:first-child) {
      margin: 16px 0;
    }
  }
`;

export const GridContainer = styled.div<Props>`
  display: grid !important;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 4px;

  text-align: start;
  float: left;
  justify-items: start;

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 4px;

    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(4) {
      grid-area: 1 / 3 / 3 / 4;
    }
  }
`;

export const Card = styled.div<Props>`
  font-weight: bold;
  margin-top: 16px;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : colors.light)};
  color: ${(p) => (p.color ? p.color : colors.dark)};
  padding: 12px 24px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 540px) {
    justify-content: end;
    font-size: ${fontSizes.xs};
  }

  & > span {
    text-align: left;
  }
`;
