Iconography related to Zopa's brand.

- [`<AlertIcon />`](#/Components/Icons/Alert)
- [`<ArrowIcon />`](#/Components/Icons/Arrow)
- [`<CheckMarkIcon />`](#/Components/Icons/CheckMark)
- [`<ChevronIcon />`](#/Components/Icons/Chevron)
- [`<HamburgerIcon />`](#/Components/Icons/Hamburger)
- [`<ProfileIcon />`](#/Components/Icons/Profile)
- [`<ZopaIcon />`](#/Components/Icons/ZopaIcon)

### Tips

- Note that every component has the word `"Icon"` on their name
  - so that when importing we can easily understand it's meant to render an SVG icon.
- We perfer to use SVG to ensure good display on any device resolution
  - please compress them with [SVGOMG](https://jakearchibald.github.io/svgomg/).
- Every component in this folder must extend of `React.SVGProps<SVGSVGElement>` for proper typing.
