import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
    return(
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a>
                    <time>12 de março de 2023</time>
                    <strong>Criando coisas insanas para pessoas insanas</strong>
                    <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
                </a>
                <a>
                    <time>12 de março de 2023</time>
                    <strong>Criando coisas insanas para pessoas insanas</strong>
                    <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
                </a>
                <a>
                    <time>12 de março de 2023</time>
                    <strong>Criando coisas insanas para pessoas insanas</strong>
                    <p>Nesse guia eu nào sei oque estou fazendo apenas estou fazedno</p>
                </a>
            </div>
        </main>
        </>
    )
}