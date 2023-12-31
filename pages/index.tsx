import { Navbar, Main, AboutME, Skills, Projects, TimeLine, ContactMe, } from '@/components/Index'
import Head from 'next/head'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Mahan | front-end Developer</title>
      </Head>
      <Navbar />
      <Main />
      <Projects />
      <TimeLine />
      <AboutME />
      <Skills />
      <ContactMe />
    </>
  )
}
