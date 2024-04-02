import {
  Navbar, Main, AboutME, Skills, Projects,
  TimeLine, ContactMe, Certificate,
} from '@/components/Index'
import Head from 'next/head'
import { useTheme } from '@/context/ThemeContext'

export default function Home() {
  const { dark } = useTheme()

  return (
    <div className={`${dark ? 'bg-[#0C0A09] text-white' : 'bg-[#FAFAFA] text-[#1f2937]'}`}>
      <Head>
        <title>Mahan | front-end Developer</title>
      </Head>
      <Navbar />
      <Main />
      <Projects />
      <Certificate />
      <TimeLine />
      <AboutME />
      <Skills />
      <ContactMe />
    </div>
  )
}
