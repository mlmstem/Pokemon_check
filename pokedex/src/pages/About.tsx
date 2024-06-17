import React from 'react'
import Wrapper from '../sections/Wrapper';
import fluffcat from "../assets/fluffCat.png"
import { FaGithub} from 'react-icons/fa';

function About() {
  return (
    <div className='profile'>
      <img src={fluffcat} alt="avatar" className='profile-image' />
      <h1 className='profile-text'>Hi I am Chris </h1>
      <h2 className='profile-text'>The creator of this awesome pokedex</h2>
      <h4 className='profile-text'> This project is created for fun</h4>

      <div className="profile-links">
        <a href="https://github.com/mlmstem/Pokemon_check.git">
          <FaGithub />
        </a>
        
      </div>

    </div>
  )
}

export default Wrapper(About);