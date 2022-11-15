import { Button, Form } from "antd";
import { Link } from "react-router-dom";
import { FileOutlined } from "@ant-design/icons";
import { FormProvider, useForm } from "react-hook-form";
import { defaultValues, FormValues } from "./default-form-values";
import { PersonalDetails, EmploymentHistory } from "./subforms";
import "./resume-form.less";

export const ResumeForm = () => {
  const methods = useForm<FormValues>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <div className="rb-resume-form">
        <Form
          className="rb-resume-form__ant-form"
          layout="vertical"
          autoComplete="off"
        >
          <PersonalDetails />
          <EmploymentHistory />
        </Form>

        <Link to="/app/preview" className="rb-resume-form__fab">
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ display: "inline-block" }}
          >
            Preview
            <FileOutlined />
          </Button>
        </Link>
      </div>
    </FormProvider>
  );
};
