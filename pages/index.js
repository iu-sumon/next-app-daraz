import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
 
import Items from '../Components/Items'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

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
