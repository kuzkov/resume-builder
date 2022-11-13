import { Text, TextProps } from "./text";

export type LinkProps = TextProps;

const linkStyles = {
  link: {
    color: "#2491e8",
  },
};

export const Link = ({ children, variant, style }: LinkProps) => {
  return (
    <Text variant={variant} style={{ ...style, ...linkStyles.link }}>
      {children}
    </Text>
  );
};
