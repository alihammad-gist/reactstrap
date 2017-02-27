### Errors
- `static` is a reserved keyword in Typescript (used inside classes) and cannot be 
a property of `Input` component
- `size: string` in `Input` used to set the grid size is
in conflict with  `size: number` for `input` and `button` elements.