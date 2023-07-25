import styles from './Button.module.css'
import {
  ButtonThemes,
  ButtonVariants,
} from '@/components/Button/types/buttonTypes'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames, Mods } from '@/utils/classNames/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonThemes
  variant: ButtonVariants
  children?: ReactNode
  disabled?: boolean
  className?: string
  handleClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { theme, disabled, variant, children, className, handleClick } = props
  const mods: Mods = {
    [styles[theme]]: true,
    [styles.disabled]: disabled,
    [styles[variant]]: variant,
  }
  return (
    <button
      className={classNames(styles.Button, mods, [className])}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
