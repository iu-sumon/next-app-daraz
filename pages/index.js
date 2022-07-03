import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Items from './Components/Items'

export default function Home() {
  return (
   <div>
     <Header></Header>
     <Banner></Banner>
     <Items></Items>
     <Footer></Footer>
   </div>
  )
}
