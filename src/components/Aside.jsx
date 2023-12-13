import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div>
      <div className='gradient h-screen rounded-r-lg z-10 relative'>
        <nav className='p-6'>
          <ul className='flex flex-col gap-4 text-2xl mt-4'>
            <li>Intro</li>
            <Link to="/Part1"><li>Partie 1</li></Link>
            <li>Partie 2</li>
            <li>Partie 3</li>
            <li>Conclusion</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Aside