import { HolderOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Row, Typography } from "antd";
import { Draggable } from "react-beautiful-dnd";
import { TextField } from "../../../controls";
import { TextEditor } from "../../../components";
import { employmentHistoryName } from "../default-values";
import { DateRangeField } from "../../../controls/date-range-field/date-range-field";
import cx from "classnames";
import "./employment-collapse.less";
import { useWatch } from "react-hook-form";

export type EmploymentCollapseProps = {
  id: string;
  index: number;
};

export const EmploymentCollapse = ({ id, index }: EmploymentCollapseProps) => {
  const employment = useWatch({
    name: `${employmentHistoryName}.${index}`,
  });

  console.log(employment);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={cx(
            "rb-employment-collapse",
            snapshot.isDragging && "rb-employment-collapse--dragging"
          )}
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
                  <DateRangeField
                    name={`${employmentHistoryName}.${index}.dateRange`}
                    switchLabel={"I currently work here"}
                    label={"Start & End Date"}
                  />
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
