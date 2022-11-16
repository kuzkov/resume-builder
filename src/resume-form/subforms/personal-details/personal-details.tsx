import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Col, Form, Row, Typography } from "antd";
import { useState } from "react";
import { TextField } from "../../controls";
import { AvatarUploadButton, TextEditor } from "../../components";
import { GhostButton } from "../../components/ghost-button/ghost-button";
import "./personal-details.less";

export const personalDetailsName = "personalDetails";

export type PersonalDetailsValues = {
  wantedJobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  address: string;
  dateOfBirth: string;
  nationality: string;
};

export const personalDetailsDefaultValues: PersonalDetailsValues = {
  wantedJobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  postalCode: "",
  nationality: "",
  address: "",
  dateOfBirth: "",
};

export const PersonalDetails = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="rb-personal-details">
      <Typography.Title level={3}>Personal Details</Typography.Title>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.wantedJobTitle`}
            label="Wanted Job Title"
            placeholder="e. g. Teacher"
          />
        </Col>
        <Col span={12}>
          <Form.Item>
            <AvatarUploadButton />
          </Form.Item>
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.firstName`}
            label="First Name"
            placeholder="John"
          />
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.lastName`}
            label="Last Name"
            placeholder="Doe"
          />
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.email`}
            label="Email"
            placeholder="example@mail.com"
          />
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.nationality`}
            label="Nationality"
            placeholder="Belarusian"
          />
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.phone`}
            label="Phone Number"
            placeholder="+375 (xx) xxx xx xx"
          />
        </Col>
        <Col span={12}>
          <TextField
            name={`${personalDetailsName}.country`}
            label="Country"
            placeholder="Belarus"
          />
        </Col>
        {showMore && (
          <>
            <Col span={12}>
              <TextField
                name={`${personalDetailsName}.city`}
                label="City"
                placeholder="Minsk"
              />
            </Col>
            <Col span={12}>
              <TextField
                name={`${personalDetailsName}.address`}
                label="Address"
                placeholder="Prospekt Nezalezhnosti"
              />
            </Col>
            <Col span={12}>
              <TextField
                name={`${personalDetailsName}.postalCode`}
                label="Postal Code"
                placeholder="123456"
              />
            </Col>
            <Col span={12}>
              <TextField
                name={`${personalDetailsName}.dateOfBirth`}
                label="Date Of Birth"
                placeholder="27.01.1999"
              />
            </Col>
          </>
        )}
        <Col span={24}>
          <GhostButton
            block
            onClick={() => setShowMore((value) => !value)}
            className="rb-personal-details__show-more-button"
          >
            {showMore ? "Hide" : "Show"} additional details
            {showMore ? <CaretUpFilled /> : <CaretDownFilled />}
          </GhostButton>
        </Col>
        <Col span={24}>
          <TextEditor />
        </Col>
      </Row>
    </div>
  );
};
