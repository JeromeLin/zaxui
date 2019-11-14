import React, { PureComponent } from 'react';
import classnames from 'classnames';
import BaseSearchBarProps from './PropsType';
import Icon from '../icon';
import InputBase from '../input/InputBase';

export interface SearchBarProps extends BaseSearchBarProps {
  prefixCls?: string;
  className?: string;
}

export default class SearchBar extends PureComponent<SearchBarProps, any> {
  private searchForm;

  private searchContainer;

  private cancelRef;

  private cancelOuterWidth;

  private initPos;

  private inputRef;

  static defaultProps = {
    prefixCls: 'za-search-bar',
    shape: 'radius',
    disabled: false,
    showCancel: false,
    clearable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      value: props.defaultValue || props.value || '',
      isOnComposition: false,
    };
  }

  componentDidMount() {
    this.calculatePositon(this.props);
  }

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps && nextProps.value !== state.prevValue) {
      return {
        value: nextProps.value,
        preValue: nextProps.value,
      };
    }
    return null;
  }


  componentDidUpdate(prevProps) {
    const { cancelText, placeholder, showCancel } = this.props;
    // 若改变了取消文字的内容或者placeholder的内容需要重新计算位置
    if (cancelText !== prevProps.cancelText
      || placeholder !== prevProps.placeholder
      || showCancel !== prevProps.showCancel
    ) {
      this.calculatePositon(this.props);
    }
  }

  onFocus() {
    const { onFocus } = this.props;
    this.setState({ focus: true });
    this.focusAnim();
    onFocus && onFocus();
  }

  onChange(value) {
    const { onChange } = this.props;
    const { isOnComposition } = this.state;

    this.setState({ value });
    if (!isOnComposition && onChange) {
      onChange(value);
    }
  }

  onBlur() {
    const { onBlur } = this.props;
    const { value } = this.state;

    this.setState({ focus: false });
    !value && this.blurAnim();
    onBlur && onBlur();
  }

  onClear() {
    const { onClear, onChange } = this.props;
    this.setState({
      value: '',
      isOnComposition: false,
    }, () => {
      // this.setState({ focus: true });
      this.focus();
    });
    onClear && onClear('');
    onChange && onChange('');
  }

  onCancel() {
    const { showCancel, onCancel } = this.props;
    if (!showCancel) {
      this.setState({
        value: '',
        isOnComposition: false,
      }, () => {
        this.onBlur();
      });
    }
    onCancel && onCancel();
  }

  onSubmit(e) {
    const { onSubmit } = this.props;
    const { value } = this.state;

    e.preventDefault();
    this.inputRef.blur();
    onSubmit && onSubmit(value);
  }

  handleComposition(e) {
    if (e.type === 'compositionstart') {
      this.setState({
        isOnComposition: true,
      });
    }

    if (e.type === 'compositionend') {
      // composition is end
      this.setState({
        isOnComposition: false,
      });

      const { onChange } = this.props;
      const { value } = e.target;
      onChange && onChange(value);
    }
  }

  // 初始化搜索提示文字的位置
  calculatePositon(props) {
    const { showCancel } = props;
    const { value } = this.state;

    const formWidth = this.searchForm.getBoundingClientRect().width;
    const containerWidth = this.searchContainer.getBoundingClientRect().width;
    const ml = parseInt(window.getComputedStyle(this.cancelRef, '')['margin-left'].split('px')[0], 10);

    this.cancelOuterWidth = Math.ceil(ml + parseInt(this.cancelRef.getBoundingClientRect().width, 10));
    if (!showCancel) {
      this.cancelRef.style.cssText = `margin-right: -${this.cancelOuterWidth}px;`;
      this.initPos = (formWidth / 2) - (containerWidth / 2);
    } else {
      this.cancelRef.style.cssText = 'margin-right: 0px;';
      this.initPos = (formWidth / 2) - (this.cancelOuterWidth / 2) - (containerWidth / 2);
    }

    if (!value) {
      this.searchContainer.style.transform = `translate3d(${this.initPos}px, 0, 0)`;
      this.searchContainer.style.webkitTransform = `translate3d(${this.initPos}px, 0, 0)`;
    } else {
      this.focusAnim(0);
    }
  }

  focusAnim(transition = 300) {
    this.searchContainer.style.cssText += `transform: translate3d(10px, 0, 0);transition: ${transition}ms;-webkit-transform: translate3d(10px, 0, 0);-webkit-transition: ${transition}ms;`;
    this.cancelRef.style.cssText = 'margin-right: 0px;';
    this.cancelRef.className += ' animation-ease';
  }

  blurAnim() {
    const { showCancel } = this.props;
    this.searchContainer.style.cssText += `transform: translate3d(${this.initPos}px, 0, 0);transition: 300ms;-webkit-transform: translate3d(${this.initPos}px, 0, 0);-webkit-transition: 300ms;`;
    if (!showCancel) {
      this.cancelRef.style.cssText = `margin-right: -${this.cancelOuterWidth}px;`;
    }
  }

  focus() {
    this.inputRef.focus();
  }

  renderCancel() {
    const { prefixCls, cancelText, showCancel, locale } = this.props;
    const { value, focus } = this.state;
    const cancelCls = classnames(`${prefixCls}__cancel`, {
      [`${prefixCls}__cancel--show`]: !!(showCancel || focus || (value && value.length > 0)),
    });

    return (
      <div
        className={cancelCls}
        ref={(cancelRef) => { this.cancelRef = cancelRef; }}
        onClick={() => { this.onCancel(); }}
      >
        {cancelText || locale.cancelText}
      </div>
    );
  }

  render() {
    const { prefixCls, className, shape, placeholder, disabled, clearable, maxLength, locale } = this.props;
    const { value, focus, isOnComposition } = this.state;

    const cls = classnames(prefixCls, className, {
      [`${prefixCls}--${shape}`]: !!shape,
      [`${prefixCls}--focus`]: !!(focus || (value && value.length > 0)),
    });

    return (
      <div className={cls}>
        <form
          action="#"
          className={`${prefixCls}__form`}
          onSubmit={(e) => { this.onSubmit(e); }}
          ref={(searchForm) => { this.searchForm = searchForm; }}
        >
          <div className={`${prefixCls}__content`}>
            <div className={`${prefixCls}__mock`}>
              <div
                className={`${prefixCls}__mock__container`}
                ref={(searchContainer) => { this.searchContainer = searchContainer; }}
              >
                <Icon type="search" />
                <span
                  className={`${prefixCls}__mock__placeholder`}
                  style={{ visibility: value || isOnComposition ? 'hidden' : 'visible' }}
                >
                  {placeholder || locale.placeholder}
                </span>
              </div>
            </div>
            <InputBase
              className={`${prefixCls}__input`}
              type="search"
              placeholder={placeholder || locale.placeholder}
              value={value}
              maxLength={maxLength}
              onFocus={() => { this.onFocus(); }}
              onCompositionStart={(e) => { this.handleComposition(e); }}
              onCompositionUpdate={(e) => { this.handleComposition(e); }}
              onCompositionEnd={(e) => { this.handleComposition(e); }}
              onChange={(val) => { this.onChange(val); }}
              onBlur={() => { this.onBlur(); }}
              onClear={() => { this.onClear(); }}
              disabled={disabled}
              clearable={clearable}
              ref={(inputRef) => { this.inputRef = inputRef; }}
            />
          </div>
          {this.renderCancel()}
        </form>
      </div>
    );
  }
}
