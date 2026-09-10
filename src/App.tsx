import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'

function App() {
  return (
    <>
      <Header name="Abhishek" />

      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default App