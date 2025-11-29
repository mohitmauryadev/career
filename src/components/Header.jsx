import React from 'react'
import "./Header.css";

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        { ({ isActive }) => ({ color: isActive ? 'blue' : '#90E0EF' }) }

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const burger = document.querySelector('.burger');
       
       function toggleNav() {
           const right = document.querySelector('.right');
           right.classList.toggle('nav-active');
       }
    return (
        <div className='header'>
            <header className=' flex justify-between items-center px-20 py-5'>
                {/* Left Nav */}
                <div className="left"><button onClick={() => scrollToSection('home')}>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center font-sans bg-clip-text text-transparent 
               bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 cursor-pointer"> CareerHub</h1>
                </button>

                </div>

                {/* Right Nav */}
                <div className='right flex space-x-5 '>
                    <button onClick={() => scrollToSection('home')} className='hover:text-green-700 font-bold cursor-pointer'>Home</button>
                    <button onClick={() => scrollToSection('science')} className='hover:text-green-700 font-bold cursor-pointer'>Science</button>
                    <button onClick={() => scrollToSection('commerce')} className='hover:text-green-700 font-bold cursor-pointer'> Commerce</button>
                    <button onClick={() => scrollToSection('arts')} className='hover:text-green-700 font-bold cursor-pointer'>Arts & Humanities</button>
                    <button onClick={() => scrollToSection('job')} className='hover:text-green-700 font-bold'>Job Toolkit</button>
                    <button onClick={() => scrollToSection('insights')} className='hover:text-green-700 font-bold cursor-pointer'>Insights</button>

                   
                </div>
                 <div  className="burger nav-active" onClick={toggleNav}>
                        <li className='lines'></li>
                        <li className='lines'></li>
                        <li className='lines'></li>
                    </div>
            </header>
        </div>
    )
}

export default Header
