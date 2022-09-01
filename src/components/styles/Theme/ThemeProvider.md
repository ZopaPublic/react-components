Using the `<ThemeProvider>` component will make a user-defined theme object available to its child components and they will use this object rather than the default theme.

Begin by defining a theme object. For an example of what this looks like, please consult the [AppTheme interface](https://github.com/zopaUK/react-components/blob/master/src/components/styles/Theme.tsx#L248) and the [default Zopa theme](https://github.com/zopaUK/react-components/blob/master/src/components/styles/Theme.tsx#L272).

Finally, wrap the components in your application requiring themeing with the `<ThemeProvider>` component and pass in the custom theme object.

```tsx static
<ThemeProvider theme={customTheme}>
  // ZRC components requiring themeing go here. Internally they will use the useThemeContext hook which uses the React
  // Context API to access the object passed via the theme prop
</ThemeProvider>
```
