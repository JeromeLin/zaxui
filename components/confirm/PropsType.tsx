import { Locale } from '../locale-provider/PropsType';

export default interface PropsType {
  shape?: 'radius';
  visible?: boolean;
  animationType?:
    'fade' | 'door' | 'flip' | 'rotate' | 'zoom' |
    'moveUp' | 'moveDown' | 'moveLeft' | 'moveRight' |
    'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  animationDuration?: number;
  width?: string | number;
  onMaskClick?: () => void;
  title?: any;
  message?: any;
  okText?: string;
  onOk?: () => void;
  cancelText?: string;
  onCancel?: () => void;
  locale?: Locale;
}

declare global {
  interface Window {
    zarmConfirm?: any;
  }
}
