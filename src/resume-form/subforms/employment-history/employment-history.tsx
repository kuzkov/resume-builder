import { PlusOutlined } from "@ant-design/icons";
import { Collapse, Typography } from "antd";
import { useId } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { GhostButton } from "../../controls/ghost-button/ghost-button";
import { FormValues } from "../../default-form-values";
import { employmentHistoryName } from "./default-values";
import { EmploymentCollapse } from "./employment-collapse/employment-collapse";

export const EmploymentHistory = () => {
  const droppableId = useId();
  const { control } = useFormContext<FormValues>();
  const { fields, append, move } = useFieldArray({
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

  const handleDragEnd = (result: DropResult) => {
    if (result.destination) {
      move(result.source.index, result.destination.index);
    }
  };

  return (
    <div className="rb-employment" style={{ paddingTop: 64 }}>
      <Typography.Title level={3}>Employment History</Typography.Title>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.length !== 0 &&
                fields.map(({ id }, index) => (
                  <EmploymentCollapse
                    key={id}
                    {...{ id, index, employment: watchedFields[index] }}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <GhostButton block icon={<PlusOutlined />} onClick={handleAddEmployment}>
        Add one more employment
      </GhostButton>
    </div>
  );
};
