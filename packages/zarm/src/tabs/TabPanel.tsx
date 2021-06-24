import * as React from 'react';
import classnames from 'classnames';
import type { BaseTabPanelProps } from './interface';

export interface TabPanelProps extends BaseTabPanelProps {
  prefixCls?: string;
  className?: string;
}

const TabPanel = React.forwardRef<unknown, TabPanelProps>((props, ref) => {
  const { prefixCls, className, selected, children } = props;

  const panelRef = (ref as any) || React.createRef<HTMLElement>();

  const cls = classnames(`${prefixCls}__panel`, className, {
    [`${prefixCls}__panel--active`]: selected,
  });

  return (
    <div className={cls} role="tabpanel" ref={panelRef}>
      {children}
    </div>
  );
});

TabPanel.displayName = 'TabPanel';

TabPanel.defaultProps = {
  prefixCls: 'za-tabs',
};

export default TabPanel;
