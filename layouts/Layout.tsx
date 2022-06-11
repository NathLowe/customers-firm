import React from 'react'

import Head from 'next/head'

const Layout = ({title,description,children,...other}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        <main>
            {children}
        </main>
    </>
  )
}

export default Layout