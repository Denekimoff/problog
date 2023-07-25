import styles from './Tag.module.css'
import { classNames } from '@/utils/classNames/classNames'
import CloseIcon from '@/components/icons/CloseIcon/CloseIcon'
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

export const Tag = (props: TagProps) => {
  const { children } = props
  return (
    <div className={classNames(styles.Tag, {}, [])}>
      <p className={styles.text}>{children}</p>
      <CloseIcon className={styles.icon} />
    </div>
  )
}
