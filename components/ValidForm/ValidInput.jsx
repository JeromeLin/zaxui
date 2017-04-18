import React, { Component, cloneElement } from 'react';

import * as validateFuncs from './validate';

const typeValidateAttrs = {
  number: ['min', 'max', 'required'],
  bool: ['required'],
  string: ['minLength', 'maxLength', 'pattern', 'required'],
  all: ['min', 'max', 'minLength', 'maxLength', 'pattern', 'required'],
};

class ValidInput extends Component {

  constructor(props) {
    super(props);

    this.state = { value: props.value || this._getDefaultValue()};
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this._initResult();
  }

  onChange(e) {
    const { onChange, setResult, name } = this.props;
    const value = this._getValue(e);
    const res = this._validate(value);

    onChange && onChange(value, res);
    setResult && setResult(value, res, name);
  }

  onBlur(e) {
    const { onBlur, setResult, name } = this.props;
    const value = this._getValue(e);

    if (!onBlur) {
      return null;
    }

    const res = this._validate(value);

    onBlur && onBlur(value, res);
    setResult && setResult(value, res, name);
  }

  _getDefaultValue() {
    const { type } = this.props;

    if (type === 'number') {
      return 0;
    }

    if (type === 'bool') {
      return false;
    }

    if (type === 'string') {
      return '';
    }

    if (type === 'all') {
      return '';
    }

    return '';
  }

  _initResult() {
    const { initResult, name } = this.props;
    const { value = '' } = this.state;

    initResult && initResult(value, this._validate(value), name);
  }

  _validate(value) {
    const { type = 'all', func } = this.props;
    const attrs = typeValidateAttrs[type] || [];

    for (let v = 0; v < attrs.length; v++) {
      const attr = attrs[v];
      const args = this.props[attr];
      const validateFunc = validateFuncs[attr](args);

      if (!validateFunc(value)) {
        return false;
      }
    }

    if (func !== undefined) {
      return func(value);
    }

    return true;
  }

  _getValue(e) {
    e = e.target || e;
    const value = e.value === undefined ? e : e.value;

    this.setState({ value });
    return value;
  }

  getChildren() {
    const { onChange, onBlur, props, state } = this;
    const { children } = props;
    const { value } = state;

    return React.Children.map(children, (child) => {
      return cloneElement(child, {
        onChange,
        onBlur,
        value,
      }, child.children);
    });
  }

  render() {
    return (
      <span>
        {this.getChildren()}
      </span>
    );
  }
}

export default ValidInput;
