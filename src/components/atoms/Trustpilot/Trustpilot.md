### Summary

Use this to render Trustpilot logo with stars.

### Examples

- It defaults to 5 stars...

```tsx
import { Trustpilot } from '@zopauk/react-components';

<Trustpilot />;
```

- ...but you can decide the number as well.

```tsx
import { useState, useEffect } from 'react';
import { Trustpilot } from '@zopauk/react-components';

const RatingsRoulette = () => {
  const [rating, setRating] = useState(0);

  const shuffleRating = () => {
    setRating((r) => (r === 5 ? 0 : r === 0 ? r + 1 : r + 0.5));
  };

  useEffect(() => {
    const interval = setInterval(shuffleRating, 750);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Trustpilot rating={rating} />;
};

<RatingsRoulette />;
```
