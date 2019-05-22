This is a wrapper of 4 different components:

- SizedContainer: Div container with size prop.
- InputText: Native input text.
- InputLabel: Label text. Only rendered if the prop `label` is filled in.
- HelpText: Addition information.
- SizedContainer: Error message. Only rendered if the prop `errorMessage` is filled in.

`inputProps.name` must be set so it's used to automatically set:

- `htmlFor` in the `InputLabel` component.
- `data-automation` in the `ErrorMessage`
- `id` in `InputText` for automation test purposes.

All the designs follows the conventions specified in [Marvel](https://marvelapp.com/9hj9j4b/screen/48160210/handoff).

#### Default

```jsx
<TextField inputProps={{ name: 'text1' }} />
```

#### Specific size

```jsx
<TextField size="short" inputProps={{ name: 'text2' }} />
```

#### With label

```jsx
<TextField label="First name" inputProps={{ name: 'text3' }} />
```

#### With error message

```jsx
<TextField errorMessage="Oops ! Error !" inputProps={{ name: 'text4' }} />
```

#### isValid

```jsx
<TextField isValid={true} inputProps={{ name: 'text5' }} />
```

#### With label, helpText, errorMessage and size props

```jsx
<TextField
  label="Label"
  helpText="Additional info"
  errorMessage="Not ok!"
  size="short"
  inputProps={{ name: 'text6' }}
/>
```
