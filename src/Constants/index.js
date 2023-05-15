// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
} from 'react-icons/io';

import { android, angular, cognizantLogo,
     facebook, firebase, instagram, ionic, linkdin,
     react, typescript, wellsLogo, wiuLogo, youtube, } from "../assets"
import Ram from '../assets/drowing.jpg'
import web1 from '../assets/web1.png'

export const AppText={
    h:'H',
    hello:'ello,',
    Iam:'I am ',
    pin:'Pintu Sharma',
    des:'I',
    About:'About',
    Me:'Me',
    aboutMeDescripion:' am Web-developer working in IT industry from  last 2 Years as Front-end developer. Expert in Web design, React, JavaScript, Web3.0, Front-end Development.',
    Skills:'Skills & ',
    Experties:'Experties',
    Artist:'Sketches Artist',
    BackendDeveloper:'Backend Dev',
    FrontedDeveloper:'Frontend Dev',
    Portfolio:'Portfolio',
    Creative:'My Creative ',
    CompaniesI:'Companies I ',
    WorkedFor:'Worked For',
    Contact:'Contact ',
    Us:'Us',
    copywriteText:'Copyright by Pintu_Sharma@2023'

}

export const aboutSection=[
    {
        id:1,
        image:Ram,
        title:'Art of Drawing',
        desc:'Expert in any types of Design & Drowing'
    },
    {
        id:2,
        image:'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
        title:'Frontend Developer',
        desc:'I specialize in websites, such as e-commerce, corporate sites, etc.'
    },
    {
        id:3,
        image:'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
        title:'Back-end Developer',
        desc:'Expert in UI/UX designing software like figma'
    }
]

export const skillsList=[
    {
        id:1,
        icon:angular
    },
    {
        id:1,
        icon:react
    },
    {
        id:1,
        icon:typescript
    },
    {
        id:1,
        icon:firebase
    },
    {
        id:1,
        icon:android
    },
    {
        id:1,
        icon:ionic
    },
   
]

export const workDetail=[
    { 
        id:1,
        year:'2023',
        compnayName:'Tanthetaa Software',
        position:'Intern'
    },
    { 
        id:1,
        year:'2022',
        compnayName:'SVMIT',
        position:'Frontend Developer'
    }
]

export const portfolio=[
    {
        id:1,
        title:'SharmaShop',
        type:'website',
        desc:"Sharmashop is E-comerce web-app build using react & tailwind css",
        imageUrl: web1
    },
    {
        id:4,
        title:'UI/UX Desing',
        type:'ui/ux',
        desc:"Expert in UI/UX designing software like figma",
        imageUrl:"https://miro.medium.com/max/1400/0*GWvV5kcuVATUfs2r.png"
    },
    {
        id:3,
        title:'Linkdingrama',
        type:'website',
        desc:"In this Project, you can Downloader LinkedIn Photos Using API. ",
        imageUrl:"https://cdn.dribbble.com/users/2892962/screenshots/14273462/nlytical_mockup_4x.png"
    },
]

export const CompanyImage=[
    {
        id:1,
        imageUrl:cognizantLogo
    },
    {
        id:1,
        imageUrl:wellsLogo
    },
    {
        id:1,
        imageUrl:wiuLogo
    }
]

export const socialNetwork= [
      {
        icon: <IoLogoYoutube />,
        href: 'https://www.youtube.com/watch?v=QyUSPLXb_pU',
      },
      {
        icon: <IoLogoInstagram />,
        href: '#',
      },
      {
        icon: <IoLogoGithub />,
        href: 'https://github.com/pintu130', 
      },
      {
        icon: <IoLogoFacebook />,
        href: 'https://www.facebook.com/',
      },
    ]