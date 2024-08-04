import { useState } from 'react'
import AboutSection from "./components/AboutSection";
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {


  return (
    <div className='min-h-screen bg-slate-50'>
      <div className=' py-10 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 lg:gap-7 lg:max-w-7xl mx-7 md:mx-4 md:px-10 lg:mx-auto'>
        <div className='col-span-1 flex flex-col gap-6 top-5'>
          <AboutSection/>
          <SkillsSection/>
        </div>
        <div  className='col-span-2  flex flex-col flex-wrap gap-6 '>
          <ProjectsSection/>
          <ContactSection/> 
        </div>
      </div>
    </div>
  )
}

export default App
