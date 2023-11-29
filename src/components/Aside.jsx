import React from 'react';
import menu_open from '../icons/menu_open.svg';


const Aside = () => {
  return (
    <div>
      <div className='gradient h-screen rounded-r-lg z-10 relative'>
        <nav className='p-6'>
          <img 
          src={menu_open} 
          alt="" 
          height={35}
          width={35}
          />
          <ul className='flex flex-col gap-4 text-2xl mt-4'>
            <li>Intro</li>
            <li>Partie 1</li>
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