import { HolderOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, DatePicker, Form, Row, Typography } from "antd";
import { Draggable } from "react-beautiful-dnd";
import { TextEditor, TextField } from "../../../controls";
import { employmentHistoryName } from "../default-values";
import "./employment-collapse.less";

const { RangePicker } = DatePicker;

export type EmploymentCollapseProps = {
  id: any;
  employment: any;
  index: number;
};

export const EmploymentCollapse = ({
  id,
  index,
  employment,
}: EmploymentCollapseProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="rb-employment-collapse"
        >
          <Collapse expandIconPosition="end">
            <Collapse.Panel
              key={id}
              header={
                <>
                  <Button
                    type="text"
                    size="small"
                    className="rb-employment-collapse__holder"
                    icon={<HolderOutlined />}
                    {...provided.dragHandleProps}
                  />
                  {!employment ||
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
                  )}
                </>
              }
            >
              <Row gutter={[16, 24]}>
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${index}.jobTitle` as const}
                    placeholder="e. g. Teacher"
                    label="Job Title"
                  />
                </Col>
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${index}.employer` as const}
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
          </Collapse>
        </div>
      )}
    </Draggable>
  );
};
