import { Dayjs } from "dayjs";
export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
  city: string;
  description: any;
  dateRange: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    tillPresent: boolean;
  };
}>;

export const employmentHistoryName = "employmentHistory";

export const employmentHistoryDefaultValues = [];
