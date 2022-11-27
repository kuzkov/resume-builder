import { Form, Input } from 'antd';
import { Controller, type FieldPath, useFormContext } from 'react-hook-form';
import { type FormValues } from '../../default-form-values';

export type TextFieldProps = {
  name: FieldPath<FormValues>;
  label: string;
  placeholder: string;
};

export function TextField({ name, label, placeholder }: TextFieldProps) {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field: { value, ...field } }) => (
          <Input size='large' placeholder={placeholder} value={value as string} {...field} />
        )}
      />
    </Form.Item>
  );
}
