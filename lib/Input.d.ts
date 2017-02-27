/// <reference types='react' />

type InputType =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color'

interface Props extends React.ChangeTargetHTMLProps<HTMLInputElement> {
  type?: InputType
  size?: string
  state?: string
  tag?: React.ReactType
  static?: boolean
  addon?: boolean
  className?: string
}

declare var Input: React.StatelessComponent<Props>
export default Input