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

With 4 slides and custom initial slide:

```tsx
import { Carousel, Trustpilot } from '@zopauk/react-components';
import { faCar, faHeart, faPoundSign, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

<Carousel initialSlide={2}>
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
