import styled from '@emotion/styled';
import { colors } from '..';
import { Props } from '../../types';

const Button = styled.button<Props>`
  padding: 32px;
  background-color: ${(p) => (p.primary ? colors.primary : colors.secondary)};
  color: ${colors.light};
  font-weight: bold;
  transition: all 0.5s ease-in;

  &:hover {
    background-color: ${(p) => (p.primary ? colors.dark : colors.primary)};
  }
`;

export { Button };
