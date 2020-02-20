import { COLORS } from './../../ui';

export const VARIANTS_COLORS = {
  default: {
    background: COLORS.WHITE,
    border: COLORS.DEFAULT,
    hover: COLORS.DEFAULT,
    text: COLORS.SECONDARY
  },
  primary: {
    background: COLORS.PRIMARY,
    border: COLORS.PRIMARY,
    hover: COLORS.PRIMARY400,
    text: COLORS.WHITE,
  },
  secondary: {
    background: COLORS.SECONDARY,
    border: COLORS.SECONDARY,
    hover: COLORS.SECONDARY400,
    text: COLORS.WHITE
  },
  info: {
    background: COLORS.INFO,
    border: COLORS.INFO,
    hover: COLORS.INFO400,
    text: COLORS.WHITE,
  },
  success: {
    background: COLORS.SUCCESS,
    border: COLORS.SUCCESS,
    hover: COLORS.SUCCESS500,
    text: COLORS.WHITE
  },
  danger: {
    background: COLORS.DANGER,
    border: COLORS.DANGER,
    hover: COLORS.DANGER500,
    text: COLORS.WHITE
  },
  warning: {
    background: COLORS.WARNING,
    border: COLORS.WARNING,
    hover: COLORS.WARNING400,
    text: COLORS.BLACK
  }
};

export const VARIANTS = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'danger',
  'warning'
];

export const SIZES = {
  small: '0.75rem',
  normal: '1rem',
  medium: '1.25rem',
  large: '1.5rem'
};

export const POSITION = {
  left: 'row-reverse',
  right: 'row'
};