import { ReactNode } from 'react';
import { Locale } from '../locale-provider/PropsType';

export default interface PropsType {
  shape?: 'rect';
  visible?: boolean;
  animationType?:
    'fade' | 'door' | 'flip' | 'rotate' | 'zoom' |
    'moveUp' | 'moveDown' | 'moveLeft' | 'moveRight' |
    'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  animationDuration?: number;
  width?: string | number;
  onMaskClick?: () => void;
  title?: ReactNode;
  message?: ReactNode;
  cancelText?: ReactNode;
  onCancel?: () => void;
  afterClose?: () => void;
  locale?: Locale['Alert'];
}
