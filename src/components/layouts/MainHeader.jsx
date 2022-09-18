import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import mocks from './mocks'

const MainHeader = () => {
  return (
    <div>
        <div className='hidden md:block'>
            <DesktopNav data={mocks.desktopNav} images={mocks?.images}/>
        </div>
        <div className='block md:hidden'>
            <MobileNav data={mocks.mobileNav} images={mocks?.images}/>
        </div>

    </div>
  )
}

export default MainHeader