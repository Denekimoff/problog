import styles from './page.module.css'
import { Button, ButtonThemes, ButtonVariants } from '@/components/Button'
import { Tag } from '@/components/Tag'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello ProBlog</h1>

      <Button theme={ButtonThemes.PRIMARY} variant={ButtonVariants.GENERAL}>
        Primary
      </Button>

      <Tag>Sale</Tag>
      <Tag>Revenue</Tag>
    </main>
  )
}
