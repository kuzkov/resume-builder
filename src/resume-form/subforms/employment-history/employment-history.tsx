import { PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useCallback, useId } from 'react';
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { GhostButton } from '../../components/ghost-button/ghost-button';
import { type FormValues } from '../../default-form-values';
import { employmentHistoryName } from './default-values';
import { EmploymentCollapse } from './employment-collapse/employment-collapse';

export function EmploymentHistory() {
  const droppableId = useId();
  const { control } = useFormContext<FormValues>();
  const { fields, append, move } = useFieldArray({
    control,
    name: employmentHistoryName,
  });

  const handleAddEmployment = () => {
    append({
      jobTitle: '',
      employer: '',
      city: '',
      description: undefined,
      dateRange: {
        startDate: undefined,
        endDate: undefined,
        tillPresent: false,
      },
    });
  };

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      if (result.destination) {
        move(result.source.index, result.destination.index);
      }
    },
    [move],
  );

  return (
    <div className='rb-employment' style={{ paddingTop: 64 }}>
      <Typography.Title level={3}>Employment History</Typography.Title>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={droppableId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields.length !== 0 && fields.map(({ id }, index) => <EmploymentCollapse key={id} {...{ id, index }} />)}
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
}
