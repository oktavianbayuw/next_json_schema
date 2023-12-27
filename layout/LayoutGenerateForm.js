import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header.js'
import Footer from '@/components/Footer.js'
import FormGenerate from '@/components/FormGenerate.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <FormGenerate></FormGenerate>
      <Footer></Footer>
    </>
  )
}
