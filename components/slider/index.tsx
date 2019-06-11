import React, { Fragment, PureComponent } from 'react';
import classnames from 'classnames';
import PropsType from './PropsType';

import Events from '../utils/events';
import Drag from '../drag';
import Tooltip from '../tooltip';

const getValue = (props, defaultValue) => {
  if ('value' in props) {
    return props.value;
  }
  if ('defaultValue' in props) {
    return props.defaultValue;
  }
  return defaultValue;
};

function preventDefault(event) {
  event.preventDefault();
}

function getPrecision(step) {
  const stepString = step.toString();
  let precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getClosestPoint(val, { marks, step, min, max }) {
  const points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    const maxSteps = Math.floor((max - min) / step);
    const steps = Math.min((val - min) / step, maxSteps);
    const closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }
  const diffs = points.map(point => Math.abs(val - point));

  return points[diffs.indexOf(Math.min(...diffs))];
}

function ensureValuePrecision(val, props) {
  const { step } = props;
  const closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
  return step === null
    ? closestPoint
    : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

export interface SliderProps extends PropsType {
  prefixCls?: string;
  className?: string;
}

export default class Slider extends PureComponent<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'za-slider',
    disabled: false,
    showMark: false,
    vertical: false,
    step: 1,
    min: 0,
    max: 100,
    marks: {},
  };

  private line;

  private container;

  private offsetStart: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      value: getValue(props, 0),
      offset: 0,
      tooltip: false,
    };
  }

  componentDidMount() {
    this.init();
    Events.on(window, 'resize', this.init);
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const { value } = nextProps;
      const offset = this.getOffsetByValue(value);
      this.setState({ value, offset });
    }
  }

  /**
   * 初始化
   */
  init = () => {
    const { value } = this.state;
    const offset = this.getOffsetByValue(value);
    this.offsetStart = offset;
    this.setState({ offset });
  };

  /**
   * 通过偏移量确定值
   * @param  {number} offset 偏移量
   * @return {number}        值
   */
  getValueByOffset = (offset) => {
    const {
      min = 0,
      max,
    } = this.props;

    const percent = offset / this.getMaxOffset();

    const value = Math.round((min + ((max - min) * percent)));

    return ensureValuePrecision(value, this.props);
  };

  /**
   * 通过值获取偏移量
   * @param  {number} value 值
   * @return {number}       偏移量
   */
  getOffsetByValue = (value) => {
    const { min, max } = this.props;
    return this.getMaxOffset() * ((value - min) / (max - min));
  };

  /**
   * 获取最大偏移量
   */
  getMaxOffset = () => {
    if (this.line) {
      if (this.props.vertical) {
        return this.line.offsetHeight;
      }

      return this.line.offsetWidth;
    }
  };

  handleDragStart = () => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState({ tooltip: true });
  };

  handleDragMove = (event, { offsetX = 0, offsetY = 0 } = {}) => {
    const {
      disabled,
      vertical,
    } = this.props;

    if (disabled) {
      return false;
    }

    event.stopPropagation();
    event.preventDefault();

    let offset = vertical
      ? (this.offsetStart || 0) + (offsetY || 0)
      : (this.offsetStart || 0) + (offsetX || 0);

    if (offset < 0) {
      offset = 0;
      const newValue = this.getValueByOffset(offset);
      this.setState({
        offset,
        value: newValue,
      });
      return false;
    }

    const maxOffset = this.getMaxOffset();
    if (offset > maxOffset) {
      offset = maxOffset;
      const newValue = this.getValueByOffset(offset);
      this.setState({
        offset,
        value: newValue,
      });
      return false;
    }

    const value = this.getValueByOffset(offset);
    offset = this.getOffsetByValue(value);

    this.setState({ offset, value });

    return true;
  };

  handleDragEnd = (_event, { offsetX = 0, offsetY = 0 } = {}) => {
    const {
      vertical,
      onChange,
    } = this.props;

    this.setState({ tooltip: false });

    if (vertical) {
      if (Number.isNaN(offsetY)) {
        return;
      }
    } else if (Number.isNaN(offsetX)) {
      return;
    }

    this.offsetStart += vertical ? offsetY : offsetX;

    if (typeof onChange === 'function') {
      onChange(this.state.value);
    }
  };

  handleRef = (ref) => {
    const nextContainer = ref;
    const prevContainer = this.container;

    if (prevContainer !== nextContainer) {
      if (prevContainer) {
        prevContainer.removeEventListener('touchstart', preventDefault, {
          passive: false,
        });
      }
      if (nextContainer) {
        nextContainer.addEventListener('touchstart', preventDefault, { passive: false });
      }
    }

    this.container = nextContainer;
  };

  /**
   * 获取标签
   */
  renderMarkInfo = () => {
    const {
      prefixCls,
      showMark,
      marks = {},
      vertical,
    } = this.props;

    const {
      value,
    } = this.state;

    const isEmptyMarks = typeof marks !== 'object' || JSON.stringify(marks) === '{}';

    if (showMark && isEmptyMarks) {
      console.error('请输入有效的 marks');

      return null;
    }

    // 判断是否为空对象
    if (isEmptyMarks) {
      return null;
    }

    const markKeys = Object.keys(marks || {});

    const markElement = markKeys.map((item) => {
      const markStyle = {
        [vertical ? 'top' : 'left']: `${item}%`,
      };

      return (
        <span
          key={item}
          className={`${prefixCls}__mark`}
          style={markStyle}
        >
          {marks[item]}
        </span>
      );
    });

    const marksElement = showMark && (
      <div className={`${prefixCls}__marks`}>
        {markElement}
      </div>
    );

    const lineDot = markKeys.map((item) => {
      const dotStyle = classnames(`${prefixCls}__line__dot`, {
        [`${prefixCls}__line__dot-active`]: value >= item,
      });

      const markStyle = {
        [vertical ? 'top' : 'left']: `${item}%`,
      };

      return (
        <span key={item} className={dotStyle} style={markStyle} />
      );
    });

    return (
      <Fragment>
        {lineDot}

        {marksElement}
      </Fragment>
    );
  };

  render() {
    const {
      prefixCls,
      className,
      disabled,
      min,
      max,
      vertical,
      showMark,
    } = this.props;

    const {
      value,
      offset = 0,
      tooltip,
    } = this.state;

    const cls = classnames(prefixCls, className, {
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--vertical`]: vertical,
    });

    const handleStyle = {
      [vertical ? 'top' : 'left']: offset || 0,
    };

    const lineBg = {
      [vertical ? 'height' : 'width']: offset || 0,
    };

    const handleClass = classnames(`${prefixCls}__handle`, {
      [`${prefixCls}__handle__small`]: showMark,
    });

    return (
      <div className={cls} ref={this.handleRef}>
        <div className={`${prefixCls}__content`}>
          <div className={`${prefixCls}__line`} ref={(ele) => { this.line = ele; }}>
            <div
              className={`${prefixCls}__line__bg`}
              style={lineBg}
            />

            {this.renderMarkInfo()}
          </div>

          <Drag
            onDragStart={this.handleDragStart}
            onDragMove={(event, state) => this.handleDragMove(event, state)}
            onDragEnd={this.handleDragEnd}
          >
            <div
              className={handleClass}
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={value}
              aria-orientation={vertical ? 'vertical' : 'horizontal'}
              style={handleStyle}
            >
              <Tooltip visible={tooltip} title={value}>
                <div className={`${prefixCls}-handle-shadow`} />
              </Tooltip>
            </div>
          </Drag>
        </div>
      </div>
    );
  }
}
