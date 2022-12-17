import styled from '@emotion/styled';
import { colors, fontSizes } from '..';
import { Props } from '../../types';

export const Title = styled.div<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : fontSizes.lg)};
  font-weight: bold;
  color: ${colors.light};
  line-height: 1.5;
  margin: auto;
`;

export const SubTitle = styled.div<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : fontSizes.md)};
  color: ${colors.light};
`;
