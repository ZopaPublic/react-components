import { HTMLAttributes, InputHTMLAttributes } from 'react';

/**
 * GLOBAL TYPES ACROSS COMPONENTS
 */

export type TContainerSizes = 'short' | 'medium' | 'long' | 'fullLength';

export interface IInputStatus {
  /**
   * If set to true the border color would be green unless there's an error.
   */
  isValid?: boolean;

  /**
   *  If set to true the border color would be red
   */
  hasError?: boolean;
}

export interface IInput extends IInputStatus, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Attribute used for testing porpuses
   */
  'data-automation'?: string;
}

export interface IField extends HTMLAttributes<HTMLDivElement> {
  /**
   * The text to be shown on the label. If this is not set it doesn't render the label.
   */
  label?: string | React.ReactNode;
  /**
   * Help text placed between the label and the input
   */
  helpText?: string;
  /**
   * Error message. If set it shows an error message above the input.
   */
  errorMessage?: string;
  /**
   * It passes isValid to InputText
   */
  isValid?: boolean;
  /**
   * Props for the native input element
   */
  inputProps: IInput;
  /**
   * Container size
   * @default fullLength
   */
  size?: TContainerSizes;
}
