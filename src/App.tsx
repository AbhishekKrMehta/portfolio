import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <div id="top">
      <Header name="Abhishek" />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App