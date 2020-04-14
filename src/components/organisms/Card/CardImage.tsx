import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TCardImageProps = {
  url: string;
  renderWith?: ReactNode;
};

export const CardImageContainer = styled.div`
  position: relative;
  & > a,
  & > button,
  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const Image = styled.div<Pick<TCardImageProps, 'url'>>`
  height: 100%;
  width: 100%
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardImage = ({ renderWith, url }: TCardImageProps) => (
  <CardImageContainer>
    <Image url={url} />
    {renderWith}
  </CardImageContainer>
);

export default CardImage;
