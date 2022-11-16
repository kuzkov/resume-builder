import { Dayjs } from "dayjs";
export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
  city: string;
  dateRange: {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    tillPresent: boolean;
  };
}>;

export const employmentHistoryName = "employmentHistory";

export const employmentHistoryDefaultValues = [
  {
    jobTitle: "",
    employer: "",
    city: "",
    dateRange: {
      startDate: null,
      endDate: null,
      tillPresent: false,
    },
  },
  {
    jobTitle: "",
    employer: "",
    city: "",
    dateRange: {
      startDate: null,
      endDate: null,
      tillPresent: false,
    },
  },
  {
    jobTitle: "",
    employer: "",
    city: "",
    dateRange: {
      startDate: null,
      endDate: null,
      tillPresent: false,
    },
  },
];
