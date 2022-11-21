import { type ReactNode } from 'react';
import type ReactPDF from '@react-pdf/renderer';
import { StyleSheet, Text as BaseText } from '@react-pdf/renderer';

export type TitleProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  style?: ReactPDF.Styles[string];
};

const baseStyles = StyleSheet.create({
  base: {
    fontFamily: 'Helvetica-Bold',
  },
});

const titleStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 13.3,
  },
  h3: {
    fontSize: 10.64,
  },
  h4: {
    fontSize: 10.64,
  },
  h5: {
    color: '#697283',
    fontSize: 10.64,
  },
  h6: {
    color: '#697283',
    fontSize: 10.64,
  },
});

export function Title({ variant = 'h1', children, style = {} }: TitleProps) {
  return <BaseText style={{ ...baseStyles.base, ...titleStyles[variant], ...style }}>{children}</BaseText>;
}
