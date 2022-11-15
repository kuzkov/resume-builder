import { PlusOutlined } from "@ant-design/icons";
import { Col, Collapse, DatePicker, Row, Typography, Form } from "antd";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { TextEditor, TextField } from "../../controls";
import { GhostButton } from "../../controls/ghost-button/ghost-button";
import { FormValues } from "../../default-form-values";

const { RangePicker } = DatePicker;

export type EmploymentHistoryValues = Array<{
  jobTitle: string;
  employer: string;
  city: string;
}>;

export const employmentHistoryName = "employmentHistory";

export const employmentHistoryDefaultValues = [];

export const EmploymentHistory = () => {
  const { control } = useFormContext<FormValues>();
  const { fields, append } = useFieldArray({
    control,
    name: employmentHistoryName,
  });
  const watchedFields = useWatch({
    control,
    name: employmentHistoryName,
  });

  const handleAddEmployment = () => {
    append({
      jobTitle: "",
      employer: "",
      city: "",
    });
  };

  return (
    <div className="rb-employment" style={{ paddingTop: 64 }}>
      <Typography.Title level={3}>Employment History</Typography.Title>
      {fields.length !== 0 && (
        <Collapse expandIconPosition="end" style={{ marginBottom: 8 }}>
          {fields.map(({ id }, index) => {
            const employment = watchedFields[index];

            return (
              <Collapse.Panel
                key={id}
                header={
                  !employment ||
                  (!employment.jobTitle && !employment.employer) ? (
                    <Typography.Title level={5}>
                      (not specified)
                    </Typography.Title>
                  ) : (
                    <>
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        {employment?.jobTitle}
                        {employment?.employer && employment?.jobTitle && " at "}
                        {employment?.employer}
                      </Typography.Title>
                      <Typography.Text type="secondary">
                        Aug 2020 - Aug 2021
                      </Typography.Text>
                    </>
                  )
                }
              >
                <Row gutter={[16, 24]} className="rb-employment__panel">
                  <Col span={12}>
                    <TextField
                      name={
                        `${employmentHistoryName}.${index}.jobTitle` as const
                      }
                      placeholder="e. g. Teacher"
                      label="Job Title"
                    />
                  </Col>
                  <Col span={12}>
                    <TextField
                      name={
                        `${employmentHistoryName}.${index}.employer` as const
                      }
                      placeholder="Company Name"
                      label="Employer"
                    />
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Start & End Date">
                      <RangePicker
                        style={{ width: "100%" }}
                        picker="month"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <TextField
                      name={`${employmentHistoryName}.${index}.city` as const}
                      placeholder="Minsk"
                      label="City"
                    />
                  </Col>
                  <Col span={24}>
                    <TextEditor />
                  </Col>
                </Row>
              </Collapse.Panel>
            );
          })}
        </Collapse>
      )}
      <GhostButton block icon={<PlusOutlined />} onClick={handleAddEmployment}>
        Add one more employment
      </GhostButton>
    </div>
  );
};
