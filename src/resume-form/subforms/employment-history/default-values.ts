import { type Dayjs } from 'dayjs';
export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
  city: string;
  description: any;
  dateRange: {
    startDate: Dayjs | undefined;
    endDate: Dayjs | undefined;
    tillPresent: boolean;
  };
}>;

export const employmentHistoryName = 'employmentHistory';

export const employmentHistoryDefaultValues = [];
