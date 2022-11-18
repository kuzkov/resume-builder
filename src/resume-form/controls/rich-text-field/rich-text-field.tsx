import { Controller, FieldPath } from "react-hook-form";
import { TextEditor } from "../../components";
import { FormValues } from "../../default-form-values";

export type RichTextFieldProps = {
  name: FieldPath<FormValues>;
};

export const RichTextField = ({ name }: RichTextFieldProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => {
        return <TextEditor onChange={onChange} initialValue={value} />;
      }}
    />
  );
};
