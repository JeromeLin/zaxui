import React, { PureComponent } from 'react';
import classnames from 'classnames';
import BaseSelectProps from './PropsType';
import Picker from '../picker';
import parseProps from '../picker-view/utils/parseProps';
import { isArray } from '../utils/validate';

export interface SelectProps extends BaseSelectProps {
  prefixCls?: string;
  className?: string;
}

export type DataSource = Array<{ [key: string]: any; children?: DataSource }>;

export interface SelectState {
  value: string[] | number[];
  objValue?: string[] | number[];
  dataSource: DataSource;
  visible: boolean;
  tempObjValue?: string[] | number[];
  tempValue?: string[] | number[];
}

export default class Select extends PureComponent<SelectProps, SelectState> {
  static defaultProps = {
    prefixCls: 'za-select',
    dataSource: [],
    valueMember: 'value',
    itemRender: data => data.label,
    cols: Infinity,
    displayRender: selected => selected.map(item => item.label),
    onClick: () => {},
    visible: false,
  };

  state: SelectState = parseProps.getSource(this.props);

  componentWillReceiveProps(nextProps) {
    const propsToState: SelectState = parseProps.getSource(nextProps);
    const { visible } = this.props;
    const { visible: stateVisible } = this.state;
    if (visible === nextProps.visible) {
      propsToState.visible = stateVisible;
    }
    propsToState.tempObjValue = propsToState.objValue;
    propsToState.tempValue = propsToState.value;
    this.setState(propsToState);
  }

  handleClick = () => {
    const { disabled } = this.props;
    if (disabled) {
      return false;
    }
    this.setState({
      visible: true,
    });
  };

  onChange = (selected) => {
    const { onChange } = this.props;
    if (typeof onChange === 'function') {
      onChange(selected);
    }
  };

  onOk = (selected) => {
    const { onOk, valueMember } = this.props;
    this.setState({
      value: selected.map(item => item[valueMember!]),
      objValue: selected,
      visible: false,
    }, () => {
      if (typeof onOk === 'function') {
        onOk(selected);
      }
    });
  };

  // 点击取消
  onCancel = () => {
    const { onCancel } = this.props;
    const { tempValue = [], tempObjValue = [] } = this.state;
    this.setState({
      value: tempValue,
      objValue: tempObjValue,
      visible: false,
    }, () => {
      if (typeof onCancel === 'function') {
        onCancel();
      }
    });
  };

  onMaskClick = () => {
    const { onMaskClick } = this.props;
    const { tempValue = [], tempObjValue = [] } = this.state;
    this.setState({
      value: tempValue,
      objValue: tempObjValue,
      visible: false,
    }, () => {
      if (typeof onMaskClick === 'function') {
        onMaskClick();
      }
    });
  };

  isValueValid = (value) => {
    return (Object.prototype.toString.call(value) === '[object String]' && !!value.trim()) || (isArray(value) && value.length > 0 && value.some(item => !!item));
  };

  render() {
    const { prefixCls, placeholder, className, disabled, displayRender, locale, ...others } = this.props;
    const { visible, objValue, value } = this.state;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}--placeholder`]: !this.isValueValid(value),
      [`${prefixCls}--disabled`]: disabled,
    });

    return (
      <div className={cls} onClick={this.handleClick}>
        <div className={`${prefixCls}__input`}>
          {(this.isValueValid(value) && displayRender!(objValue || [])) || placeholder || locale!.placeholder}
        </div>
        <Picker
          {...others}
          visible={visible}
          value={value}
          onOk={this.onOk}
          onChange={this.onChange}
          onCancel={this.onCancel}
          onMaskClick={this.onMaskClick}
        />
      </div>
    );
  }
}
