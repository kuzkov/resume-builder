export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
  city: string;
}>;

export const employmentHistoryName = "employmentHistory";

export const employmentHistoryDefaultValues = [
  {
    jobTitle: "",
    employer: "",
    city: "",
  },
  {
    jobTitle: "",
    employer: "",
    city: "",
  },
  {
    jobTitle: "",
    employer: "",
    city: "",
  },
];
