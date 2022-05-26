import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Cards from './Cards'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Worked as a Political Strategist and Analyst in the previous
            Assembly and Lok Sabha elections in the past.
          </p>
          <p align="LEFT">
            Our predictions were very prompt and worked out as per our Analysis
            of the elections as per the pulse of the public opinions.
          </p>
          <p>
            Our results were absolutely correct as we predicted through our
            wonderful Team with the technical tools of today.
          </p>
        </div>

        <div className="stage-cube-cont">
          <Cards />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
