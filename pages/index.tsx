import {
  Navbar, Main, AboutME, Skills, Projects,
  TimeLine, ContactMe, Certificate, Slider
} from '@/components/Index'
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from 'react';

type ComponentData = {
  id: number;
  content: ReactNode;
  name: string
};

const components: ComponentData[] = [
  { id: 1, content: <Main />, name: "خانه" },
  { id: 2, content: <Slider />, name: "پروژه‌ها" },
  { id: 3, content: <TimeLine />, name: "تایم لاین" },
  { id: 4, content: <AboutME />, name: "درباره من" },
  { id: 5, content: <Projects />, name: "پروژه‌ها" },
  { id: 6, content: <Certificate />, name: "گواهی" },
  { id: 7, content: <Skills />, name: "مهارت‌ها" },
  { id: 8, content: <ContactMe />, name: "تماس با من" },
];


export default function Home() {
  const [activeComponent, setActiveComponent] = useState<number>(0);

  return (
    <div>
      <Head>
        <title>Mahan | front-end Developer</title>
      </Head>
      <div className="h-screen flex flex-col">
        <Navbar
          components={components}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
        <div className="flex-grow relative overflow-hidden">
          <AnimatePresence mode="wait">
            {components.map((comp, index) =>
              index === activeComponent ? (
                <motion.div
                  key={comp.id}
                  className="absolute inset-0 flex items-center justify-center "
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  {comp.content}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
