import {
  Navbar, Main, AboutME, Skills, Projects,
  TimeLine, ContactMe, Certificate, Slider
} from '@/components/Index'
import Head from 'next/head'
import Swiper from 'swiper'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Mahan | front-end Developer</title>
      </Head>
      <Navbar />
      <Main />
      <Slider />
      <TimeLine />
      <AboutME />
      <Projects />
      <Certificate />
      <Skills />
      <ContactMe />
    </div>
  )
}
