### Summary

...

### Example

```tsx
import { ProductTemplate } from '@zopauk/react-components';

const ProductTemplateExample = () => (
  <ProductTemplate title="Product title" subtitle="Product subtitle">
    <ProductTemplate.Progress
      prevStepUrl="https://zopa.com"
      nextStepUrl="https://zopa.com"
      progress={{ currentStep: 2, totalSteps: 4 }}
    >
      Body of the progress component
    </ProductTemplate.Progress>
    <ProductTemplate.Card title="Title of the card" subtitle="subtitule of the card">
      This is the body of the card
    </ProductTemplate.Card>
  </ProductTemplate>
);
<ProductTemplateExample />;
```
