import {
  Navbar, Main, AboutME, Skills, Projects,
  TimeLine, ContactMe, Certificate,
} from '@/components/Index'
import Head from 'next/head'
import { useTheme } from '@/context/ThemeContext'

export default function Home() {
  const { dark } = useTheme()

  return (
    <div>
      <Head>
        <title>Mahan | front-end Developer</title>
      </Head>
      <Navbar />
      <Main />
      <TimeLine />
      <AboutME />
      <Projects />
      <Certificate />
      <Skills />
      <ContactMe />
    </div>
  )
}
