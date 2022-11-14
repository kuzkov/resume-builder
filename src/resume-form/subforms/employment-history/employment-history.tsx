import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Row, Typography } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TextField } from "../../controls";
import "./employment-history.less";

export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
}>;

export const employmentHistoryName = "employmentHistory";

export const employmentHistoryDefaultValues = [];

export const EmploymentHistory = () => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: employmentHistoryName,
  });

  const handleAddEmployment = () => {
    append({});
  };

  return (
    <div className="rb-employment" style={{ paddingTop: 64 }}>
      <Typography.Title level={3}>Employment History</Typography.Title>
      {fields.length !== 0 && (
        <Collapse expandIconPosition="end" style={{ marginBottom: 8 }}>
          {fields.map(({ id }) => (
            <Collapse.Panel
              key={id}
              header={
                <>
                  <Typography.Title level={5} style={{ marginBottom: 0 }}>
                    Frontend Developer at Aligned Code
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    Aug 2020 - Aug 2021
                  </Typography.Text>
                </>
              }
            >
              <Row gutter={16} className="rb-employment__panel">
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${id}.jobTitle`}
                    placeholder="e. g. Teacher"
                    label="Job Title"
                  />
                </Col>
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${id}.employer`}
                    placeholder="Company Name"
                    label="Employer"
                  />
                </Col>
              </Row>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
      <Button
        block
        type="text"
        icon={<PlusOutlined />}
        onClick={handleAddEmployment}
        className="rb-employment__add-more-button"
      >
        Add one more employment
      </Button>
    </div>
  );
};
