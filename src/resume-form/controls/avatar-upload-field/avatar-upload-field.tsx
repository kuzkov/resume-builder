import { Controller, FieldPath } from "react-hook-form";
import { AvatarUploadButton } from "../../components";
import { FormValues } from "../../default-form-values";

export type AvatarUploadFieldProps = {
  name: FieldPath<FormValues>;
};

export const AvatarUploadField = ({ name }: AvatarUploadFieldProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange } }) => (
        <AvatarUploadButton onChange={onChange} />
      )}
    />
  );
};
