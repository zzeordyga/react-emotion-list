import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '..';
import { Props } from '../../types';

export const defaultInputCss = css({
  fontFamily: 'Montserrat',
  backgroundColor: colors.light,
  padding: '8px 64px 8px 16px',
});

export const Select = styled.select<Props>`
  ${defaultInputCss};
  border: 1px solid #ccc;
  vertical-align: top;

  border-radius: ${(p) => (p.borderRadius ? p.borderRadius : '4px')};
  max-width: ${(p) => (p.maxWidth ? p.maxWidth : '100%')};

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* arrows */

  &.classic {
    background-image: linear-gradient(45deg, transparent 50%, blue 50%),
      linear-gradient(135deg, blue 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
      100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
  }

  &.classic:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(to right, gray, gray);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }

  &.round {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%), radial-gradient(#ddd 70%, transparent 72%);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
      calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
  }

  &.round:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      radial-gradient(gray 70%, transparent 72%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }

  &.minimal {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }

  &.minimal:focus {
    /* background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat; */
    border-color: green;
    outline: 0;
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;
