import React from 'react'
import Aside from './Aside'
import Main from './Main'
import AsideRight from './AsideRight'

const Mainlayout = () => {
  return (
    <div>
        <div className='grid-template-areas'>
            <Aside className="grid-s1"></Aside>
            <Main className="grid-main"/>
            <AsideRight className="grid-s2" />
        </div>
    </div>
  )
}

export default Mainlayout