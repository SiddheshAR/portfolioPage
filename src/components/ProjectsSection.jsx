import React from 'react'
import XboxImg from '../assets/images/XboxLogo.png';
import InnerBalance from '../assets/images/InnerBalanceLogo.png';
import HuskiWiski from '../assets/images/HuskiwiskiLogo.png';
import AiContentGen from '../assets/images/AiGen.png'
const projectsData = [
  {
  "img": AiContentGen,
  "title": "AI Content Generator",
  "links": [
    {"label": "Live Demo", "url": "https://ai-content-generator-pied.vercel.app/"},
    {"label": "GitHub Repository", "url": "https://github.com/SiddheshAR/AiContentGenerator"}
  ],
  "desc": "Powered by Next.js and Gemini, this platform enables diverse content creation and dynamic storytelling.",
  "highlight": "This project is highlighted because of its innovative approach.",
  "skills": ["Next 14", "PostgresSql", "Drizzle", "Gemini"]
},
{
  "img": HuskiWiski,
  "title": "Huski Wiski - Ecomm Store",
  "links": [
    {"label": "Live Demo", "url": "https://huski-wiskii.vercel.app/"},
    {"label": "GitHub Repository", "url": "https://github.com/SiddheshAR/HuskiWiskii"}
  ],
  "desc": "An e-commerce platform for pet products, providing a seamless shopping experience with its user-friendly and visually appealing interface",
  "highlight": "This project is highlighted because of its innovative approach.",
  "skills": ["React","Redux", "Firebase", "TailwindCss"]
},
{
  "img": InnerBalance,
  "title": "InnerBalance Landing Page",
  "links": [
    {"label": "Live Demo", "url": "https://inner-balance-five.vercel.app/"},
    {"label": "GitHub Repository", "url": "https://github.com/SiddheshAR/innerBalance"}
  ],
  "desc": "Crafted a visually stunning landing page for InnerBalance using React and Styled Components. This project highlights my ability to create engaging and responsive user interfaces. ",
  "highlight": "This project is highlighted because of its innovative approach.",
  "skills": ["React", "Styled Components"]
},
{
  "img": XboxImg,
  "title": "Xbox Landing Page",
  "links": [
    {"label": "Live Demo", "url": "https://xbox-ui.vercel.app/"},
    {"label": "GitHub Repository", "url": "https://github.com/SiddheshAR/xbox-ui"}
  ],
  "desc": "Created a sleek and modern landing page for Xbox using React and Styled Components. This project showcases my skill in designing and developing immersive brand experiences. ",
  "highlight": "This project is highlighted because of its innovative approach.",
  "skills": ["React", "Styled Components"]
}
]

function ProjectsSection() {
  return (
    <div className=" p-3 md:p-6 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.10)_0px_3px_8px]">
      <h2 className='text-3xl font-semibold text-indigo-900'>Recent Projects</h2>
        <div className='  flex flex-col gap-1'>
          {projectsData.map((e,index)=>{
            return(<div className='border-b-2 py-4 border-b-slate-300 flex md:flex-row gap-4 last:border-none' key={index}>
              <div>
                <img className='hidden md:block  rounded-full max-w-[52px] max-h-[52px] md:w-[70px] md:h-[70px]  lg:min-w-[70px] lg:min-h-[70px]' src={e.img} />
              </div>
              
                <div className='flex flex-col gap-2'>
                    <div className=' flex flex-col md:flex-row md:items-end gap-2 leading-none font-semibold text-indigo-800'>
                      <div className='flex flex-row gap-2 items-center'>
                        <img className='block md:hidden  rounded-full max-w-[52px] max-h-[52px] md:w-[50px] md:h-[50px]  lg:w-[80px] lg:h-[80px]' src={e.img} />
                        <p className='text-[22px] text-gray-900 break-words'>{e.title}        
                          <span className='flex flex-row mt-2'>
                            <a target="_blank" href={e.links[0].url}> <p className='className=cursor-pointer text-blue-600 text-[14px] md:text-[15px]'>(Live Demo,</p></a>
                            <a target="_blank" href={e.links[1].url}> <p  className='className=cursor-pointer text-blue-600 text-[14px] md:text-[15px]'>Git repo)</p></a>
                          </span>
                        </p>
                      </div>

                    </div>
                    <div className=' '>{e.desc}</div>
                    <div className='flex flex-col md:flex-row gap-3'><p className='text-gray-800 font-semibold text-lg'>Technology used :</p><ul className='flex flex-row flex-wrap gap-2'>{e.skills.map((e,index)=>{return(<div className='border  font-semibold border-gray-300 bg-gray-100 inline-block rounded-md text-indigo-900 py-[3px] px-2 cursor-pointer' key={index}>{e}</div>)})}</ul></div>
                </div>
            </div>)
          })}
        </div>
    </div>
  )
}

export default ProjectsSection