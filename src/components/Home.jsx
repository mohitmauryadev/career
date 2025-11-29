import React from 'react'
import Hero from './Hero.jsx'
import Science from './Science.jsx'
import Commerce from './Commerce.jsx'
import Arts_Humanities from './Arts_Humanities.jsx'
import JobToolkit from './JobToolkit.jsx'
import Insights from './Insights.jsx'

const Home = () => {
  return (
    <div >
      <div id='home'><Hero /></div>
      <div id='science'><Science/></div>
      <div id='commerce'><Commerce/></div>
      <div id='arts'> <Arts_Humanities/></div>
      <div id='job'><JobToolkit/></div>
      <div id='insights'><Insights/></div>
      
    </div>
  )
}

export default Home
