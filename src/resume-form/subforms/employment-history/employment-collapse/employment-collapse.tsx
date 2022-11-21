import { HolderOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Row, Typography } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import { DateRangeField, RichTextField, TextField } from '../../../controls';
import { employmentHistoryName } from '../default-values';
import { useFormContext } from 'react-hook-form';
import type { FormValues } from '../../../default-form-values';
import cx from 'classnames';
import './employment-collapse.less';

export type EmploymentCollapseProps = {
  id: string;
  index: number;
};

export function EmploymentCollapse({ id, index }: EmploymentCollapseProps) {
  const { watch } = useFormContext<FormValues>();
  const employment = watch(`${employmentHistoryName}.${index}`);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={cx('rb-employment-collapse', snapshot.isDragging && 'rb-employment-collapse--dragging')}
        >
          <Collapse expandIconPosition='end'>
            <Collapse.Panel
              key={id}
              header={
                <>
                  <Button
                    type='text'
                    size='small'
                    className='rb-employment-collapse__holder'
                    icon={<HolderOutlined />}
                    {...provided.dragHandleProps}
                  />
                  {!employment || (!employment.jobTitle && !employment.employer) ? (
                    <Typography.Title level={5}>(not specified)</Typography.Title>
                  ) : (
                    <>
                      <Typography.Title level={5} style={{ marginBottom: 0 }}>
                        {employment?.jobTitle}
                        {employment?.employer && employment?.jobTitle && ' at '}
                        {employment?.employer}
                      </Typography.Title>
                      <Typography.Text type='secondary'>Aug 2020 - Aug 2021</Typography.Text>
                    </>
                  )}
                </>
              }
            >
              <Row gutter={[16, 24]}>
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${index}.jobTitle`}
                    placeholder='e. g. Teacher'
                    label='Job Title'
                  />
                </Col>
                <Col span={12}>
                  <TextField
                    name={`${employmentHistoryName}.${index}.employer`}
                    placeholder='Company Name'
                    label='Employer'
                  />
                </Col>
                <Col span={12}>
                  <DateRangeField
                    name={`${employmentHistoryName}.${index}.dateRange`}
                    switchLabel='I currently work here'
                    label='Start & End Date'
                  />
                </Col>
                <Col span={12}>
                  <TextField name={`${employmentHistoryName}.${index}.city`} placeholder='Minsk' label='City' />
                </Col>
                <Col span={24}>
                  <RichTextField name={`${employmentHistoryName}.${index}.description`} />
                </Col>
              </Row>
            </Collapse.Panel>
          </Collapse>
        </div>
      )}
    </Draggable>
  );
}
