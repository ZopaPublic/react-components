### Summary

`<ProductTemplate />` is an overall page template.

### Example

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
