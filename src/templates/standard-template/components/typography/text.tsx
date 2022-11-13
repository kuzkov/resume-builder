import { ReactNode } from "react";
import { StyleSheet, Text as BaseText } from "@react-pdf/renderer";

export type TextProps = {
  variant?: "body";
  children?: ReactNode;
  style?: any;
};

const textStyles = StyleSheet.create({
  body: {
    fontFamily: "Helvetica",
    fontSize: 10.64,
  },
});

export const Text = ({ variant = "body", children, style = {} }: TextProps) => {
  return (
    <BaseText style={{ ...textStyles[variant], ...style }}>{children}</BaseText>
  );
};
