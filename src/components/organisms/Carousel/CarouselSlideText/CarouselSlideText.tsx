import React, { FC } from 'react';
import { colors } from '../../../../constants/colors';
import Text, { TextProps } from '../../../atoms/Text/Text';

const SlideText: FC<TextProps> = (props) => <Text color={colors.greyDark} as="p" {...props} />;

export default SlideText;
