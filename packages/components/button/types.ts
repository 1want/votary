export interface ButtonProps {
  type?: 'default' | 'primary' | 'danger'
  size?: 'large' | 'normal' | 'small'
  icon?: string
  hairline?: boolean
  plain?: boolean
  disabled?: boolean
  children?: any
  className?: string
  onClick?: () => any
}
