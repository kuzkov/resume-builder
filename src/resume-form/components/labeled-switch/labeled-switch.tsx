import { Switch as AntSwitch, SwitchProps } from "antd";
import "./labeled-switch.less";

export type LabeledSwitchProps = SwitchProps & {
  label?: string;
};

export const LabeledSwitch = ({ label, ...props }: LabeledSwitchProps) => {
  return (
    <div className="rb-labeled-switch">
      <AntSwitch {...props} />
      {label && <span className="rb-labeled-switch__label">{label}</span>}
    </div>
  );
};
