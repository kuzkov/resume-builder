import { Button, type ButtonProps } from 'antd';
import cx from 'classnames';
import './ghost-button.less';

export type GhostButtonProps = Omit<ButtonProps, 'type'>;

export function GhostButton({ className, children, ...props }: GhostButtonProps) {
  return (
    <Button className={cx('rb-ghost-button', className)} type='text' {...props}>
      {children}
    </Button>
  );
}
