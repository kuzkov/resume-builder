import { View, Link, StyleSheet } from "@react-pdf/renderer";
import { useResume } from "../../../resume-form";
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
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const {
    personalDetails: {
      country,
      city,
      email,
      phone,
      address,
      postalCode,

      dateOfBirth,

      nationality,
    },
  } = resume;

  return (
    <View>
      {!!(
        country ||
        city ||
        email ||
        phone ||
        address ||
        postalCode ||
        dateOfBirth ||
        nationality
      ) && (
        <View style={styles.block}>
          <Typography.Title variant="h4" style={styles.heading}>
            Details
          </Typography.Title>

          {!!(country || city || phone || email) && (
            <View style={styles.nestedBlock}>
              {!!country && (
                <Typography.Text style={styles.item}>{country}</Typography.Text>
              )}
              {!!city && (
                <Typography.Text style={styles.item}>{city}</Typography.Text>
              )}
              {!!phone && (
                <Typography.Text style={styles.item}>{phone}</Typography.Text>
              )}
              {!!email && (
                <Link style={styles.item} src={`mailto:${email}`}>
                  <Typography.Link>{email}</Typography.Link>
                </Link>
              )}
            </View>
          )}

          {!!dateOfBirth && (
            <View style={styles.nestedBlock}>
              <Typography.Title variant="h5" style={styles.nestedHeading}>
                Date of birth
              </Typography.Title>
              <Typography.Text style={styles.item}>
                {dateOfBirth}
              </Typography.Text>
            </View>
          )}

          {!!nationality && (
            <View>
              <Typography.Title variant="h5" style={styles.nestedHeading}>
                Nationality
              </Typography.Title>
              <Typography.Text style={styles.item}>
                {nationality}
              </Typography.Text>
            </View>
          )}
        </View>
      )}

      {/* Disable temporary */}
      {false && (
        <>
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
        </>
      )}
    </View>
  );
};
