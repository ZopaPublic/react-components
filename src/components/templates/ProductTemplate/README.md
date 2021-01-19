### Summary

`<ProductTemplate />` is an overall page template.

### Example

- Basic

```tsx { "props": { "style": {  "padding": "0" } } }
import { ProductTemplate, Text } from '@zopauk/react-components';

const onBackPressed = (event) => {
  event.preventDefault();
  alert('Back button pressed');
};

const ProductTemplateExample = () => (
  <ProductTemplate
    title="Product title"
    subtitle="Product subtitle"
    prevStep="prevStep"
    progress={{ currentStep: 2, totalSteps: 4 }}
    onBackPressed={onBackPressed}
  >
    <ProductTemplate.Card>This is the body of the card</ProductTemplate.Card>
    <Text className="mt-4">You can also put content outside of a card</Text>
  </ProductTemplate>
);
<ProductTemplateExample />;
```

- With additional content

```tsx { "props": { "style": {  "padding": "0" } } }
import { ProductTemplate, Text, Carousel, Trustpilot } from '@zopauk/react-components';
import { faCar, faHeart, faPoundSign } from '@fortawesome/free-solid-svg-icons';

const onBackPressed = (event) => {
  event.preventDefault();
  alert('Back button pressed');
};

const ProductTemplateExample = () => (
  <ProductTemplate
    title="Product title"
    subtitle="Product subtitle"
    content={
      <div className="my-4">
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
        </Carousel>
      </div>
    }
    prevStep="prevStep"
    progress={{ currentStep: 2, totalSteps: 4 }}
    onBackPressed={onBackPressed}
  >
    <ProductTemplate.Card>This is the body of the card.</ProductTemplate.Card>
  </ProductTemplate>
);
<ProductTemplateExample />;
```
