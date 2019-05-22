RadioField is a single radio button element.

The error message is not shown because it's mean to be shown in a group of radio buttons.

It's build with 3 html elements:

- `input`: Input radio component. It is hidden for styling purposes. The label component is the one in charge of this styling.
- `label`: Text to show next to the radio button. It's attached to the input and not build as an standalone component because
  it uses `after` and `before` to style the circle of the radio button.
- `div`: Container

`inputProps.value` must be set so it's used to automatically set:

- `htmlFor` in the `InputLabel` component.
- `id` in `InputRadio` for automation test purposes.

#### Default

```jsx
<RadioField label="Option 1" inputProps={{ value: 'radio1', name: 'radio1' }} />
```

#### hasError

```jsx
<RadioField hasError={true} label="Option 2" inputProps={{ value: 'radio2', name: 'radio2' }} />
```

#### isValid

```jsx
<RadioField isValid={true} label="Option 2" inputProps={{ value: 'radio3', name: 'radio2' }} />
```

#### defaultChecked

```jsx
  <RadioField label="Option 3" inputProps={{value: 'radio3', name: 'radio4', defaultChecked: true}} />
  <RadioField label="Option 4" inputProps={{value: 'radio4', name: 'radio4'}} />
```

#### Disabled + defaultChecked

```jsx
  <RadioField label="Option 5" inputProps={{value: 'radio5', name: 'radio5', disabled: true, defaultChecked: true }}/>
  <RadioField label="Option 6" inputProps={{value: 'radio6', name: 'radio5', disabled: true}} />
```

#### Disabled + defaultChecked + isValid

```jsx
  <RadioField label="Option 5" isValid={true} inputProps={{value: 'radio5', name: 'radio6', disabled: true, defaultChecked: true }}/>
  <RadioField label="Option 6" isValid={true} inputProps={{value: 'radio6', name: 'radio6', disabled: true}} />
```

## Long list

```jsx
<div style={{ margin: '24px 0px', maxHeight: '150px', overflow: 'auto' }}>
  <RadioField label="Option 1" inputProps={{ value: 'radio 1', name: 'radio7' }} />
  <RadioField label="Option 2" inputProps={{ value: 'radio 2', name: 'radio7' }} />
  <RadioField label="Option 3" inputProps={{ value: 'radio 3', name: 'radio7' }} />
  <RadioField label="Option 4" inputProps={{ value: 'radio 4', name: 'radio7' }} />
  <RadioField label="Option 5" inputProps={{ value: 'radio 5', name: 'radio7' }} />
  <RadioField label="Option 6" inputProps={{ value: 'radio 6', name: 'radio7' }} />
  <RadioField label="Option 7" inputProps={{ value: 'radio 7', name: 'radio7' }} />
  <RadioField label="Option 8" inputProps={{ value: 'radio 8', name: 'radio7' }} />
  <RadioField label="Option 9" inputProps={{ value: 'radio 9', name: 'radio7' }} />
  <RadioField label="Option 10" inputProps={{ value: 'radio 10', name: 'radio7' }} />
  <RadioField label="Option 11" inputProps={{ value: 'radio 11', name: 'radio7' }} />
  <RadioField label="Option 12" inputProps={{ value: 'radio 12', name: 'radio7' }} />
  <RadioField label="Option 13" inputProps={{ value: 'radio 13', name: 'radio7' }} />
  <RadioField label="Option 14" inputProps={{ value: 'radio 14', name: 'radio7' }} />
  <RadioField label="Option 15" inputProps={{ value: 'radio 15', name: 'radio7' }} />
  <RadioField label="Option 16" inputProps={{ value: 'radio 16', name: 'radio7' }} />
  <RadioField label="Option 17" inputProps={{ value: 'radio 17', name: 'radio7' }} />
  <RadioField label="Option 18" inputProps={{ value: 'radio 18', name: 'radio7' }} />
  <RadioField label="Option 20" inputProps={{ value: 'radio 20', name: 'radio7' }} />
  <RadioField label="Option 21" inputProps={{ value: 'radio 21', name: 'radio7' }} />
</div>
```
