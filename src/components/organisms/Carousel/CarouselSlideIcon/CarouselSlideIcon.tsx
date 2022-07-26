import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants/colors';
import Icon, { IconProps } from '../../../atoms/Icon/Icon';

const StyledIcon = styled(Icon).attrs<IconProps>({ className: 'm-4' })``;

const SlideIcon = (props: IconProps) => <StyledIcon color={colors.brand} size="lg" {...props} />;

export default SlideIcon;
