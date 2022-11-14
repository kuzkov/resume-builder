import {
  ArrowDownOutlined,
  CaretDownFilled,
  CaretDownOutlined,
  CaretUpFilled,
  DownOutlined,
  FileOutlined,
  InboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Grid, Input, Row, Typography, Upload } from "antd";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AvatarUploadButton } from "./controls/avatar-upload-button/avatar-upload-button";
import "./resume-form.less";
import {
  PersonalDetails,
  PersonalDetailsValues,
  personalDetailsName,
  personalDetailsDefaultValues,
  EmploymentHistory,
  employmentHistoryName,
  EmploymentHistoryValues,
  employmentHistoryDefaultValues,
} from "./subforms";

type FormValues = {
  [personalDetailsName]: PersonalDetailsValues;
  [employmentHistoryName]: EmploymentHistoryValues;
};

const defaultValues: FormValues = {
  [personalDetailsName]: personalDetailsDefaultValues,
  [employmentHistoryName]: employmentHistoryDefaultValues,
};

export const ResumeForm = () => {
  const methods = useForm<FormValues>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <div className="rb-resume-form">
        <Form layout="vertical" autoComplete="off">
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
