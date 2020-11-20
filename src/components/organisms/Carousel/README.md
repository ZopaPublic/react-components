## Summary

Carousel component to be used together with `<Carousel.Slide />`, `<Carousel.SlideIcon />`, `<Carousel.SlideText />`.

The Carousel kicks in for widths which are smaller than `grid.breakpoints.m` (768px).

**To test the following examples resize your window and refresh\*.**

\*To prevent the page from jumping up and down when browsing through slides of different height each slide is given a minimum height equal to the height of the highest slide - hence the need to refresh after resizing.

## Example

With 3 slides:

```tsx
import { Carousel, Trustpilot } from '@zopauk/react-components';
import { faCar, faHeart, faPoundSign } from '@fortawesome/free-solid-svg-icons';

<Carousel>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faCar} />
    <Carousel.SlideText>We check your car and dealership so you can buy with confidence</Carousel.SlideText>
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faHeart} />
    <Carousel.SlideText>Rated excellent based on 14,899 reviews</Carousel.SlideText>
    <Trustpilot className="mt-6" />
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faPoundSign} />
    <Carousel.SlideText>No fees now or later. Even if you repay early.</Carousel.SlideText>
  </Carousel.Slide>
</Carousel>;
```

With different number of slides and custom initial slide:

```tsx
import { Carousel, Trustpilot } from '@zopauk/react-components';
import { faCar, faHeart, faPoundSign, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

<Carousel initialSlideIndex={2}>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faCar} />
    <Carousel.SlideText>We check your car and dealership so you can buy with confidence</Carousel.SlideText>
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faHeart} />
    <Carousel.SlideText>Rated excellent based on 14,899 reviews</Carousel.SlideText>
    <Trustpilot className="mt-6" />
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faPoundSign} />
    <Carousel.SlideText>No fees now or later. Even if you repay early.</Carousel.SlideText>
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faPiggyBank} />
    <Carousel.SlideText>Save up to £85,000</Carousel.SlideText>
  </Carousel.Slide>
</Carousel>;
```

```tsx
import { Carousel, Trustpilot } from '@zopauk/react-components';
import { faCar, faHeart, faPoundSign, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

<Carousel initialSlideIndex={0}>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faHeart} />
    <Carousel.SlideText>Rated excellent based on 14,899 reviews</Carousel.SlideText>
    <Trustpilot className="mt-6" />
  </Carousel.Slide>
  <Carousel.Slide>
    <Carousel.SlideIcon variant={faPoundSign} />
    <Carousel.SlideText>No fees now or later. Even if you repay early.</Carousel.SlideText>
  </Carousel.Slide>
</Carousel>;
```
