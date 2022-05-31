import Head from 'next/head'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({title, keywords, description, children}) => {
  return (
    <div>
        <Head>
            <title> ArNa | {title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <Header />
        <div className={styles.container}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
    title:"ArNa DJ Event",
    description:"Find DJ and other party",
    keywords:"DJ, Events, Arna, Nextjs"
}