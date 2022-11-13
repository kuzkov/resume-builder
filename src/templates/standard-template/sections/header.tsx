import { StyleSheet, View } from "@react-pdf/renderer";
import { Typography } from "../components";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 3,
    // TODO: Change to avatar image
    backgroundColor: "red",
  },
  personSection: {
    marginLeft: 12,
    display: "flex",
    justifyContent: "center",
  },
  jobTitle: {
    marginTop: 4,
  },
});

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.avatar} />
      <View style={styles.personSection}>
        <Typography.Title>Artyom Kuzkov</Typography.Title>
        <Typography.Text style={styles.jobTitle}>
          Frontend Developer
        </Typography.Text>
      </View>
    </View>
  );
};
