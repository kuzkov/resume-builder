import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import type ReactPDF from '@react-pdf/renderer';
import { View } from '@react-pdf/renderer';

type Spacing = Exclude<ReactPDF.Styles[string]['marginTop'], undefined>;

export type StackProps = ReactPDF.ViewProps & {
  spacing: Spacing;
  variant?: 'horizontal' | 'vertical';
  children?: ReactNode;
};

function Stack({ children, spacing, variant = 'vertical', ...props }: StackProps) {
  const mappedChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null;

    const isFirstChild = index === 0;

    return (
      <View
        style={{
          marginTop: !isFirstChild && variant === 'vertical' ? spacing : 0,
          marginLeft: !isFirstChild && variant === 'horizontal' ? spacing : 0,
        }}
      >
        {cloneElement(child)}
      </View>
    );
  });

  return <View {...props}>{mappedChildren}</View>;
}

export default Stack;
