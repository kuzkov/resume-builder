import { Dayjs } from "dayjs";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Form } from "antd";
import { SwitchChangeEventHandler } from "antd/lib/switch";
import { useState } from "react";
import { Controller, FieldPath } from "react-hook-form";
import { LabeledSwitch } from "../../components";
import { FormValues } from "../../default-form-values";

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

const { RangePicker } = DatePicker;

export type DateRangeFieldProps = {
  name: FieldPath<FormValues>;
  switchLabel: string;
  label: string;
};

export const DateRangeField = ({
  name,
  label,
  switchLabel,
}: DateRangeFieldProps) => {
  return (
    <Controller
      name={name}
      render={({
        field: {
          onChange,
          onBlur,
          name,
          ref,
          value: { startDate, endDate, tillPresent },
        },
      }) => (
        <Form.Item label={label}>
          {tillPresent ? (
            <DatePicker
              picker="month"
              size="large"
              placeholder="Start month"
              style={{ width: "100%", marginBottom: 8 }}
              onChange={(value) =>
                onChange({ startDate: value, endDate, tillPresent })
              }
              {...{ onBlur, name, ref, value: startDate }}
            />
          ) : (
            <RangePicker
              size="large"
              picker="month"
              style={{ width: "100%", marginBottom: 8 }}
              onChange={(value) =>
                onChange({
                  startDate: value?.[0],
                  endDate: value?.[1],
                  tillPresent,
                })
              }
              {...{ onBlur, name, ref, value: [startDate, endDate] }}
            />
          )}
          <LabeledSwitch
            onChange={(checked) =>
              onChange({
                startDate,
                endDate: checked ? null : endDate,
                tillPresent: checked,
              })
            }
            checked={tillPresent}
            size="small"
            label={switchLabel}
          />
        </Form.Item>
      )}
    />
  );
};
