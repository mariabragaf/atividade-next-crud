import Card from '@components/Card'
import { crud, examples } from '@/data/crud';
import styles from "./page.module.css";

export default function Page() {
    return (
    <>
        <main className={styles.main}>
                {examples.map(({ id, method, verb, description, color, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        color={color}
                        Icon={Icon}
                    />
                ))}
                {crud.map(({ id, method, verb, description, color, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        color={color}
                        Icon={Icon}
                    />
            ))}
        </main>
        <footer className={styles.footer}>
            <p>Pedro &copy {new Date().getFullYear()}</p>
            <p>Next.js - Axiso - Ant Design - Lucite</p>
        </footer>
    </>
  )
}