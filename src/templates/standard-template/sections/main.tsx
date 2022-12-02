import { View } from '@react-pdf/renderer';
import { useResume } from '../../../resume-form';
import { Stack, Typography } from '../components';

export function Main() {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const { employmentHistory } = resume;

  return (
    <View>
      {employmentHistory.map(({ jobTitle, employer }) => (
        <View key={jobTitle + employer}>
          <Stack spacing={4}>
            {!jobTitle || (
              <Typography.Title variant='h2'>
                {jobTitle}
                {jobTitle && employer && ', '}
                {employer}
              </Typography.Title>
            )}

            <Typography.Text variant='body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia, atque odit ad cumque
              exercitationem molestias iusto, facere cupiditate modi maiores maxime quibusdam quo provident
              perspiciatis, voluptas temporibus corrupti adipisci?
            </Typography.Text>
          </Stack>
        </View>
      ))}
    </View>
  );
}
