### Summary

This library exports **Tailwind** flavoured [atomic classes](https://css-tricks.com/lets-define-exactly-atomic-css/) for dealing with spacing within components.

Here's a guide on how to use them:

- [https://night-tailwindcss.vercel.app/docs/display](https://night-tailwindcss.vercel.app/docs/display)

The avalible properties are:

- `.{displayProperty}`
- `.{s|m|l|xl}:{displayProperty}`

### Examples

```tsx static
// Some examples

<>
  <div className="hidden m:block">I am hidden at mobile but visible on desktop</div>
  <div className="hidden m:block l:hidden">I am hidden at mobile but visible on tablet and hidden on desktop</div>
  <div className="flex">I am a flexible div</div>
  <div className="hidden m:flex">I am hidden at mobile but a flexible div at tablet and desktop</div>
</>
```
