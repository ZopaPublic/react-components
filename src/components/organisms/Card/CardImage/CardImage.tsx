import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface CardImageProps {
  /**
   * url of the background image
   */
  url: string;
  /**
   * allows you to overlay the image with a button or link
   */
  overlayWith?: ReactNode;
}

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

const Image = styled.div<Pick<CardImageProps, 'url'>>`
  height: 100%;
  width: 100%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardImage = ({ overlayWith, url }: CardImageProps) => (
  <CardImageContainer>
    <Image url={url} />
    {overlayWith}
  </CardImageContainer>
);

export default CardImage;
