import Hero from './components/Hero';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import Community from './components/Community';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Experience />
      <Work />
      <Skills />
      <Education />
      <Community />
      <Contact />
    </main>
  )
}

export default App
