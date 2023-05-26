import { InputHTMLAttributes, ReactNode } from 'react';
import { AppTheme } from './styles/Theme';

/**
 * GLOBAL TYPES ACROSS COMPONENTS
 */

export type ContainerSizes = 'short' | 'medium' | 'long' | 'fullLength';

export interface InputStatus {
  /**
   * If set to true the border color would be green unless there's an error.
   */
  isValid?: boolean;

  /**
   *  If set to true the border color would be red
   */
  hasError?: boolean;
}

export interface InputProps extends InputStatus, InputHTMLAttributes<HTMLInputElement> {
  /**
   * Attribute used for testing purposes
   */
  'data-automation'?: string;
  /**
   * Slot for an icon on the left
   */
  startIcon?: ReactNode;
  /**
   * Slot for an icon on the right
   */
  endIcon?: ReactNode;

  fontWeight?: keyof AppTheme['typography']['weights'];

  fontSize?: keyof AppTheme['typography']['text']['sizes'];
}

export interface SelectProps extends InputStatus, InputHTMLAttributes<HTMLSelectElement> {
  /**
   * Attribute used for testing purposes
   */
  'data-automation'?: string;
}

export interface FieldProps {
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
   * Input size
   */
  inputSize?: ContainerSizes;
}

export interface GroupingControlsProps {
  /**
   * hide/show the control
   */
  hideControl?: boolean;
}
