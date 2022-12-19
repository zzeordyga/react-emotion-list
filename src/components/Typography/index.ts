import styled from '@emotion/styled';
import { colors, fontSizes } from '..';
import { Props } from '../../types';

export const Title = styled.div<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : fontSizes.lg)};
  font-weight: bold;
  color: ${colors.light};
  line-height: 1.5;
  margin: auto;

  @media only screen and (max-width: 540px) {
    font-size: ${fontSizes.md};
  }
`;

export const SubTitle = styled.div<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : fontSizes.md)};
  color: ${colors.light};

  @media only screen and (max-width: 540px) {
    font-size: ${fontSizes.sm};
  }
`;
