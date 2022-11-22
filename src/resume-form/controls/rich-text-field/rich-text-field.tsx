/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, type FieldPath } from 'react-hook-form';
import { TextEditor } from '../../components';
import { type FormValues } from '../../default-form-values';

export type RichTextFieldProps = {
  name: FieldPath<FormValues>;
};

export function RichTextField({ name }: RichTextFieldProps) {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => <TextEditor initialValue={value} onChange={onChange} />}
    />
  );
}
