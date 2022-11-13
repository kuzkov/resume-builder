import { View, Link, StyleSheet } from "@react-pdf/renderer";
import { Typography } from "../components";

const styles = StyleSheet.create({
  heading: {
    marginBottom: 8,
  },
  nestedHeading: {
    marginBottom: 6,
  },
  item: {
    marginBottom: 6,
  },
  block: {
    marginBottom: 16,
  },
  nestedBlock: {
    marginBottom: 10,
  },
});

export const SideNav = () => {
  return (
    <View>
      <View style={styles.block}>
        <View style={styles.nestedBlock}>
          <Typography.Title variant="h4" style={styles.heading}>
            Details
          </Typography.Title>
          <Typography.Text style={styles.item}>Vilnius</Typography.Text>
          <Typography.Text style={styles.item}>Lithuania</Typography.Text>
          <Typography.Text style={styles.item}>+370 694 20 328</Typography.Text>
          <Link style={styles.item} src={`mailto:fl.artyom.kuzkov@gmail.com`}>
            <Typography.Link>fl.artyom.kuzkov@gmail.com</Typography.Link>
          </Link>
        </View>

        <View style={styles.nestedBlock}>
          <Typography.Title variant="h5" style={styles.nestedHeading}>
            Date of birth
          </Typography.Title>
          <Typography.Text style={styles.item}>16 March 2002</Typography.Text>
        </View>

        <View>
          <Typography.Title variant="h5" style={styles.nestedHeading}>
            Nationality
          </Typography.Title>
          <Typography.Text style={styles.item}>Belarusian</Typography.Text>
        </View>
      </View>

      <View style={styles.block}>
        <Typography.Title variant="h4" style={styles.heading}>
          Links
        </Typography.Title>
        <Link style={styles.item} src={`https://linkedin.com`}>
          <Typography.Link>Linkedin</Typography.Link>
        </Link>
        <Link style={styles.item} src={`https://github.com`}>
          <Typography.Link>Github</Typography.Link>
        </Link>
      </View>

      <View style={styles.block}>
        <Typography.Title variant="h4" style={styles.heading}>
          Skills
        </Typography.Title>
        <Typography.Text style={styles.item}>HTML</Typography.Text>
        <Typography.Text style={styles.item}>CSS</Typography.Text>
        <Typography.Text style={styles.item}>React</Typography.Text>
        <Typography.Text style={styles.item}>Angular</Typography.Text>
        <Typography.Text style={styles.item}>ReactPDF</Typography.Text>
        <Typography.Text style={styles.item}>Redux</Typography.Text>
        <Typography.Text style={styles.item}>Next.js</Typography.Text>
      </View>

      <View style={styles.block}>
        <Typography.Title variant="h4" style={styles.heading}>
          Hobbies
        </Typography.Title>
        <Typography.Text style={styles.item}>Sport</Typography.Text>
      </View>
    </View>
  );
};
