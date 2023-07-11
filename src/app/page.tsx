import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.sass'
import Intro from '@/components/sections/intro/Intro'
import About from '@/components/sections/about/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
    </>
  )
}
