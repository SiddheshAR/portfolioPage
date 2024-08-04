import React from 'react'

function SkillsSection() {
    const skillsArray = ["Javascript","NextJs","React","Typescript","ExpressJS","RESTAPIs","MongoDB","Styled Components"]
  return (
    <div className='p-6 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div>
            <h2  className="text-3xl font-semibold text-indigo-900">Skills</h2>
        </div>
        <div className='flex flex-row flex-wrap gap-2 py-4'>
            {skillsArray.map((e,index)=><div className='border  font-semibold border-gray-300 bg-gray-100 inline-block rounded-md text-indigo-900 py-[4px] px-2' key={index}>{e}</div>)}
        </div>
    </div>
)
}
export default SkillsSection