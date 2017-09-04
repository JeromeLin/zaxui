import React, { PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function getCheckedValue(children) {
  const checkedValue = [];
  React.Children.forEach(children, (checkbox) => {
    if (checkbox.props && checkbox.props.checked) {
      checkedValue.push(checkbox.props.value);
    }
  });
  return checkedValue;
}

class CheckboxGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || getCheckedValue(props.children),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps || getCheckedValue(nextProps.children)) {
      this.setState({
        value: nextProps.value || nextProps.defaultValue || getCheckedValue(nextProps.children),
      });
    }
  }

  onCheckboxChange(value) {
    const values = this.state.value;
    const index = values.indexOf(value);

    if (index < 0) {
      values.push(value);
    } else {
      values.splice(index, 1);
    }

    this.setState({
      value: values,
    });
    this.props.onChange(values);
  }

  render() {
    const { prefixCls, className, theme, shape, type, block, disabled, compact, children } = this.props;

    const items = React.Children.map(children, (element, index) => {
      return cloneElement(element, {
        key: index,
        type,
        theme,
        block: block || element.props.block,
        disabled: disabled || element.props.disabled,
        onChange: () => this.onCheckboxChange(element.props.value),
        checked: (this.state.value.indexOf(element.props.value) > -1),
      });
    });

    const cls = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
      [`shape-${shape}`]: !!shape,
      'is-compact': compact,
      block,
      disabled,
    });

    return (
      <div className={cls}>
        {items}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error']),
  shape: PropTypes.oneOf(['radius', 'round']),
  type: PropTypes.oneOf(['button', 'cell']),
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  compact: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  prefixCls: 'za-checkbox-group',
  className: null,
  theme: 'primary',
  shape: null,
  type: null,
  value: null,
  defaultValue: null,
  block: false,
  disabled: false,
  compact: false,
  onChange() {},
};

export default CheckboxGroup;
