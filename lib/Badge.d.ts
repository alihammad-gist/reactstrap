/// <reference types="react" />

import { Color } from '../index'

interface Props {
  color?: Color
  pill?: boolean
  tag?: React.ReactType
  className?: string
}

declare var Badge: React.StatelessComponent<Props>
export default Badge