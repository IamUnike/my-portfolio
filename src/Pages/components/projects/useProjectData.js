import { useState } from "react";

//image imports
import jobarcv from '../../../assets/jobarcv.jpg'
import weather from '../../../assets/weather.jpg'
import panthera from '../../../assets/panthera.jpg'
import edustreak from '../../../assets/edustreak.jpg'
import wordbeater from '../../../assets/wordbeater2.jpg'
import quote from '../../../assets/quote.jpg'


const useProjectData = () => {
    const [projects, setProjects] = useState([
        {
            title: 'JobarCV',
            description: 'JobarCV is an online web app that allows job hunters to create their CV easily and faster with ready-made templates',
            image: jobarcv,
            github: 'https://github.com/IamUnike/jobarcv',
            website: 'https://jobarcv.netlify.app/'
        },

        {
            title: 'Weather App',
            description: 'This weather app allows you to discover the weather information of any city in the world as well as forecasts',
            image: weather,
            github: 'https://github.com/IamUnike/Weather-App',
            website: 'https://iamunike.github.io/Weather-App/'
        },

        {
            title: 'Edustreak',
            description: ' Edustreak is a sleek online educational site template with a great user interface ',
            image: edustreak,
            github: 'https://github.com/IamUnike/edustreak',
            website: 'https://edstreak.netlify.app/'
        },


        {
            title: 'WordBeater',
            description: 'Want to increase your typing speed? WordBeater can help you do that! A simple game that allows you type random words within a given time  ',
            image: wordbeater,
            github: 'https://github.com/IamUnike/wordBeater',
            website: 'https://iamunike.github.io/wordBeater/'
        },

        {
            title: 'PantheraNFT',
            description: 'Official site for the Panthera NFT brand with info about their NFT collections',
            image: panthera,
            github: 'https://github.com/IamUnike/PantheraNFT',
            website: 'https://iamunike.github.io/PantheraNFT/'
        },

        {
            title: 'Quotes',
            description: 'This website allows you to get access to unlimited random quotes, default quotes, and also add your quote and share to you socials!',
            image: quote,
            github: 'https://github.com/IamUnike/Quote-Generator',
            website: 'https://quote-create.netlify.app/'
        },  
    ])

    return { projects }
}
 
export default useProjectData;