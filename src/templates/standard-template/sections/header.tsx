import { Image, StyleSheet, View } from '@react-pdf/renderer';
import { useResume } from '../../../resume-form';
import { getBase64 } from '../../../utils/get-base64';
import { Typography } from '../components';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 3,
    marginRight: 12,
  },
  personSection: {
    display: 'flex',
    justifyContent: 'center',
  },
  jobTitle: {
    marginTop: 4,
  },
});

export function Header() {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const {
    personalDetails: { avatar, firstName, lastName, wantedJobTitle },
  } = resume;

  return (
    <View style={styles.header}>
      {Boolean(avatar) && <Image src={getBase64(avatar)} style={styles.avatar} />}
      <View style={styles.personSection}>
        {(!firstName && !lastName) || (
          <Typography.Title>
            {firstName} {lastName}
          </Typography.Title>
        )}
        {!wantedJobTitle || <Typography.Text style={styles.jobTitle}>{wantedJobTitle}</Typography.Text>}
      </View>
    </View>
  );
}
