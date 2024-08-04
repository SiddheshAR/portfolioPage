import React from "react";
import profImg from "../assets/images/profile1.png";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";;
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function AboutSection() {
  const aboutData = {
    name: "Siddhesh Acharekar",
    desc: "Highly motivated React Developer with a passion for creating responsive and user-centric web applications. Proficient in leveraging ReactJS to build intuitive interfaces and dynamic user experiences.",
    img: "",
    links: [
      {
        link: "https://github.com/SiddheshAR",
        icons: <FaGithub/>,
        alt: "Github",
        color:'text-indigo-900'
      },
      {
        link: "mailto:siddheshfr@gmail.com",
        icons: <MdOutlineMail/>,
        alt: "EMail",
        color:'text-orange-600'
      },
      {
        link: "https://www.linkedin.com/in/frsiddhesh/",
        icons: <FaLinkedin/>,
        alt: "Linkedin",
        color:'text-blue-600'
      },
      {
        link:"https://wa.me/919321644323",
        icons:<FaWhatsapp/>,
        alt:"Whatsapp",
        color:"text-green-600"
      }
    ],
  };

  return <div className="p-6 bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.10)_0px_3px_8px]">
        <div className="flex flex-col gap-3">
            <div >
              <img className=" rounded-full w-[130px] h-[130px]" src={profImg} />
            </div>
            <div><h2 className="text-3xl font-semibold text-indigo-900">{aboutData.name}</h2></div>
            <div><p className="text-slate-600">{aboutData.desc}</p></div>
            <div>
              <ul className="flex flex-row gap-2 text-[32px]">
                {aboutData.links.map((e,index)=>{
                return(
                    <li className={`cursor-pointer ${e?.color} `} href={e?.link} key={index}>
                       <a href={e?.link}>{e?.icons}</a>
                    </li>
                )
            })}
            </ul>
            </div>

        </div>
  </div>;
}

export default AboutSection;
