import { View, Text } from "@react-pdf/renderer";
import { Typography } from "../components";

export const Main = () => {
  return (
    <View>
      <Typography.Title variant="h1">Heading 1</Typography.Title>
      <Typography.Title variant="h2">Heading 2</Typography.Title>
      <Typography.Title variant="h3">Heading 3</Typography.Title>
      <Typography.Title variant="h4">Heading 4</Typography.Title>
      <Typography.Title variant="h5">Heading 5</Typography.Title>
      <Typography.Title variant="h6">Heading 6</Typography.Title>
      <Typography.Text variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia,
        atque odit ad cumque exercitationem molestias iusto, facere cupiditate
        modi maiores maxime quibusdam quo provident perspiciatis, voluptas
        temporibus corrupti adipisci?
      </Typography.Text>
    </View>
  );
};
