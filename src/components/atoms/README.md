Atoms are simple components.

Usually made with only one html element.

Atoms are extendable. That means the atom should be able to be used as a parameter in the function `extend()` of `styled-components`.

These components can be used in molecules (more complex components than atoms).

Every atom component must extend of it's native html element. For example the `Button` component extends from `React.ButtonHTMLAttributes<HTMLButtonElement>`.
