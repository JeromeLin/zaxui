export interface BaseSearchbarProps {
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  shape?: string;
  cancelText?: string;
  placeholder?: string;
  showCancel?: boolean;
  clearable?: boolean;
  maxLength?: number;
  onSubmit?: (value?: string) => void;
  onChange?: (value?: string) => void;
  onCompositionStart?: (e?: KeyboardEvent) => void;
  onCompositionUpdate?: (e?: KeyboardEvent) => void;
  onCompositionEnd?: (e?: KeyboardEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: (value?: string) => void;
  onCancel?: () => void;
}
