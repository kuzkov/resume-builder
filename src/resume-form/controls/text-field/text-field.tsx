import { Form, Input } from "antd";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { FormValues } from "../../default-form-values";

export type TextFieldProps = {
  name: FieldPath<FormValues>;
  label: string;
  placeholder: string;
};

export const TextField = ({ name, label, placeholder }: TextFieldProps) => {
  const { control } = useFormContext<FormValues>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field } }) => (
        <Form.Item name={name} label={label}>
          <Input
            size="large"
            placeholder={placeholder}
            value={value as string}
            {...field}
          />
        </Form.Item>
      )}
    />
  );
};
