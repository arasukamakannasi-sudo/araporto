import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
