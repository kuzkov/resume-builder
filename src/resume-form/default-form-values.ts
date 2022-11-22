import {
  type PersonalDetailsValues,
  personalDetailsName,
  personalDetailsDefaultValues,
  employmentHistoryName,
  type EmploymentHistoryValues,
  employmentHistoryDefaultValues,
} from './subforms';

export type FormValues = {
  [personalDetailsName]: PersonalDetailsValues;
  [employmentHistoryName]: EmploymentHistoryValues;
};

export const defaultValues: FormValues = {
  [personalDetailsName]: personalDetailsDefaultValues,
  [employmentHistoryName]: employmentHistoryDefaultValues,
};
