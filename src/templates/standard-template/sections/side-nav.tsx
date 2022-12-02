import { View, Link, StyleSheet } from '@react-pdf/renderer';
import { useResume } from '../../../resume-form';
import { Stack, Typography } from '../components';

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

// eslint-disable-next-line complexity
export function SideNav() {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const {
    personalDetails: { country, city, email, phone, address, postalCode, dateOfBirth, nationality },
  } = resume;

  return (
    <View>
      {!(country || city || email || phone || address || postalCode || dateOfBirth || nationality) || (
        <Stack spacing={8}>
          <Typography.Title variant='h4'>Details</Typography.Title>

          <Stack spacing={16}>
            {!(country || city || phone || email) || (
              <Stack spacing={6}>
                {!country || <Typography.Text>{country}</Typography.Text>}
                {!city || <Typography.Text>{city}</Typography.Text>}
                {!phone || <Typography.Text>{phone}</Typography.Text>}
                {!email || (
                  <Link src={`mailto:${email}`}>
                    <Typography.Link>{email}</Typography.Link>
                  </Link>
                )}
              </Stack>
            )}

            {!address || (
              <Stack spacing={6}>
                <Typography.Title variant='h5'>Address</Typography.Title>
                <Typography.Text>{address}</Typography.Text>
                <Typography.Text>{postalCode}</Typography.Text>
              </Stack>
            )}

            {!dateOfBirth || (
              <Stack spacing={6}>
                <Typography.Title variant='h5'>Date of birth</Typography.Title>
                <Typography.Text>{dateOfBirth}</Typography.Text>
              </Stack>
            )}

            {!nationality || (
              <Stack spacing={6}>
                <Typography.Title variant='h5'>Nationality</Typography.Title>
                <Typography.Text>{nationality}</Typography.Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      )}
    </View>
  );
}
