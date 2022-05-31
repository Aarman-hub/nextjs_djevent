import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';

const about = () => {
  return (
    <Layout title={"About"}>
        <h1>About</h1>
        <Link href='/'>Home</Link>
    </Layout>
  )
}

export default about