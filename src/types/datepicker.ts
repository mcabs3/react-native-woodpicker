import type { ViewStyle, TextStyle } from "react-native";
import type { InputProps, DoneBarProps, BackdropAnimationType } from "../types";

export type Mode = "date" | "time" | "datetime" | "countdown";
export type IOSDisplay = "default" | "compact" | "inline" | "spinner";
export type Display = "spinner" | "default" | "clock" | "calendar";
export type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30;

export type DatePickerProps = {
  locale?: string;
  minuteInterval?: MinuteInterval;
  iosDisplay?: IOSDisplay;
  androidDisplay?: Display;
  iosMode?: Mode;
  androidMode?: Mode;
  timeZoneOffsetInMinutes?: number;
  textColor?: string;
  is24Hour?: boolean;
  neutralButtonLabel?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  value?: Date;
  androidCustomProps?: { [key: string]: any };
  iosCustomProps?: { [key: string]: any };
  text: string;
  title?: string;
  doneButtonLabel?: string;
  onDateChange: (date?: Date) => void;
  onOpen?: () => void;
  onClose?: () => void;
  isNullable?: boolean;
  disabled?: boolean;
  InputComponent?: React.ElementType<InputProps>;
  DoneBarComponent?: React.ElementType<DoneBarProps>;
  backdropAnimation?: BackdropAnimationType;
  style?: ViewStyle;
  textInputStyle?: TextStyle;
  containerStyle?: ViewStyle;
};
