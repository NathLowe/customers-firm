import Head from 'next/head'
import {GlobalStyles} from "@shared/globals"

import { Global } from '@emotion/react'

import Layout from '@layouts/Layout'

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyles} />
      
      <Layout
        title={"Customer's Firm"}
        description={"CUSTOMER’S FIRM est entreprise camerounaise spécialisée dans la fabrication des produits de beauté."}
      >
        Bonjour ici
      </Layout>
    </>
  )
}

