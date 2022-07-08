import React from 'react';
import { colors } from '../../../../constants/colors';
import Text, { TextProps } from '../../../atoms/Text/Text';

const SlideText = (props: TextProps) => <Text color={colors.greyDark} as="p" {...props} />;

export default SlideText;
