import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
import {FaExclamationTriangle} from 'react-icons/fa';

const Error = () => {
  return (
    <Layout title="Page Not Found">
        <div className={styles.error}>
            <h1><FaExclamationTriangle /> 404</h1>
            <h4>Sorry, there is nothing found</h4>
            <Link href='/'>
                <a>Go Home</a>
            </Link>
        </div>
    </Layout>
  )
}

export default Error