import { type ReactNode } from 'react';
import type ReactPDF from '@react-pdf/renderer';
import { StyleSheet, Text as BaseText } from '@react-pdf/renderer';

export type TextProps = {
  variant?: 'body';
  children?: ReactNode;
  style?: ReactPDF.Styles[string];
};

const textStyles = StyleSheet.create({
  body: {
    fontFamily: 'Helvetica',
    fontSize: 10.64,
  },
});

export function Text({ variant = 'body', children, style = {} }: TextProps) {
  return <BaseText style={{ ...textStyles[variant], ...style }}>{children}</BaseText>;
}
