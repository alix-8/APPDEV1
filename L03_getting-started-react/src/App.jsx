import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <h1>Alexandrian Bon</h1>
      <h2>Bachelor of Science in Information Systems</h2>

      <span>
        <p>
          Fun Fact: An aspiring web-developer.
        </p>
      </span>

      <span className='learned-container'>
        <p className='learned'>
          <b className='learned-title'>
            What I've learned so far?
          </b>
          <br />
          <br />
          So far, I have leared the basics of Git and GitHub commands. I have used the commands on our previous projects, but I'm more confident with what I know now. I've also learned how to use SSH setup and how to link it on my GitHub account. Also, the teaching strategy of our instructor is very effective for me. I've learned that I understands concept more if I'll practice it instead of just memorizing syntaxes and definitions. I'm looking forward to learning more about React and other things that this course will offer. : D
        </p>
      </span>

    </>
  )
}

export default App

