import { Form, Input } from "antd";
import { Controller, useController, useFormContext } from "react-hook-form";

export type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
};

export const TextField = ({ name, label, placeholder }: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Form.Item name={name} label={label}>
          <Input placeholder={placeholder} size="large" {...field} />
        </Form.Item>
      )}
    />
  );
};
