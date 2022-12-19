type FlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse';

export default interface Props {
  primary?: boolean;
  size?: number | string;
  fontSize?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  margin?: number | string;
  display?: string;
  color?: string;
  backgroundColor?: string;
  grid?: boolean;
  flexDirection?: FlexDirection;
  switchDirection?: boolean;
  justifyContent?: string;
  borderRadius?: string;
  alignItems?: string;
}
