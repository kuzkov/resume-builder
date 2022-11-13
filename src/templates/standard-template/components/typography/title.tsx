import { ReactNode } from "react";
import { StyleSheet, Text as BaseText } from "@react-pdf/renderer";

export type TitleProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  style?: any;
};

const baseStyles = {
  fontFamily: "Helvetica-Bold",
};

const titleStyles = StyleSheet.create({
  h1: {
    ...baseStyles,
    fontSize: 24,
  },
  h2: {
    ...baseStyles,
    fontSize: 13.3,
  },
  h3: {
    ...baseStyles,
    fontSize: 10.64,
  },
  h4: {
    ...baseStyles,
    fontSize: 10.64,
  },
  h5: {
    ...baseStyles,
    color: "#697283",
    fontSize: 10.64,
  },
  h6: {
    ...baseStyles,
    color: "#697283",
    fontSize: 10.64,
  },
});

export const Title = ({ variant = "h1", children, style = {} }: TitleProps) => {
  return (
    <BaseText style={{ ...titleStyles[variant], ...style }}>
      {children}
    </BaseText>
  );
};
