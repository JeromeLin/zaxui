import React, { PureComponent, CSSProperties } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import PropsType from './PropsType';
import buttonStyle from './style/index.native';

export interface ButtonProps extends PropsType {
  style?: CSSProperties;
  styles?: typeof buttonStyle;
}

const buttonStyles = StyleSheet.create<any>(buttonStyle);

export default class Button extends PureComponent<ButtonProps, any> {
  static defaultProps = {
    theme: 'primary',
    size: 'normal',
    shape: 'radius',
    block: false,
    ghost: false,
    disabled: false,
    loading: false,
    styles: buttonStyles,
    onClick() {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  onPressIn = () => {
    this.setState({ isActive: true });
  }

  onPressOut = () => {
    this.setState({ isActive: false });
  }

  render() {
    const {
      theme,
      size,
      shape,
      ghost,
      disabled,
      loading,
      icon,
      style,
      styles,
      onClick,
      children,
      ...others,
    } = this.props;
    const { isActive } = this.state;

    const wrapperStyle = [
      styles!.wrapperStyle,
      styles![`${size}Wrapper`],
      styles![`${theme}Wrapper`],
      styles![`${shape}Wrapper`],
      isActive && styles![`${theme}ActiveWrapper`],
      ghost && styles![`${theme}GhostWrapper`],
      ghost && styles!.ghostWrapper,
      disabled && styles!.disabledWrapper,
      shape === 'circle' && styles![`${size}CircleWrapper`],
      style,
    ];

    const underlayColor = (StyleSheet.flatten(
      styles![`${theme}ActiveWrapper`],
    ) as any).backgroundColor;

    const iconColor = (StyleSheet.flatten(
      styles!.activeText,
    ) as any).color;

    const textStyle = [
      styles!.textStyle,
      styles![`${size}Text`],
      styles![`${theme}Text`],
      ghost && styles![`${theme}GhostText`],
      isActive && styles!.activeText,
      isActive && ghost && styles![`${theme}ActiveGhostText`],
    ];

    const iconStyle = [
      styles!.iconStyle,
      styles![`${size}Icon`],
    ];

    const iconRender = loading
      ? <ActivityIndicator animating style={iconStyle} color={iconColor} size="small"/>
      : icon;

    const contentRender = (
      <View style={styles!.container as ViewStyle}>
        {iconRender}
        <Text style={textStyle}>{children}</Text>
      </View>
    );

    const wrapperProps = {
      activeOpacity: 1,
      style: wrapperStyle,
      onPress: onClick,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut,
      disabled,
      ...others,
    };

    return ghost
      ? <TouchableOpacity {...wrapperProps}>{contentRender}</TouchableOpacity>
      : <TouchableHighlight {...wrapperProps} underlayColor={underlayColor}>{contentRender}</TouchableHighlight>;
  }
}
