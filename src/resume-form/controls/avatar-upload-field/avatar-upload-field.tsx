import { Controller, type FieldPath } from 'react-hook-form';
import { AvatarUploadButton } from '../../components';
import { type FormValues } from '../../default-form-values';

export type AvatarUploadFieldProps = {
  name: FieldPath<FormValues>;
};

export function AvatarUploadField({ name }: AvatarUploadFieldProps) {
  return <Controller name={name} render={({ field: { onChange } }) => <AvatarUploadButton onChange={onChange} />} />;
}
