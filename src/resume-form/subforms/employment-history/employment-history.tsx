import { PlusOutlined } from "@ant-design/icons";
import { Collapse, Typography } from "antd";
import { useCallback, useId } from "react";
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { GhostButton } from "../../controls/ghost-button/ghost-button";
import { FormValues } from "../../default-form-values";
import { employmentHistoryName } from "./default-values";
import { EmploymentCollapse } from "./employment-collapse/employment-collapse";

export const EmploymentHistory = () => {
  const droppableId = useId();
  const { control, watch } = useFormContext<FormValues>();
  const { fields, append, move } = useFieldArray({
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

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) {
        return;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if (result.destination) {
        move(result.source.index, result.destination.index);
      }
    },
    [move]
  );

  return (
    <div className="rb-employment" style={{ paddingTop: 64 }}>
      <Typography.Title level={3}>Employment History</Typography.Title>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.length !== 0 &&
                fields.map(({ id }, index) => {
                  const employment = watch(employmentHistoryName)[index];

                  return (
                    <EmploymentCollapse
                      key={id}
                      {...{
                        id,
                        index,
                        employment,
                      }}
                    />
                  );
                })}
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
