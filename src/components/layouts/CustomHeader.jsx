import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import mocks from './mocks'

const CustomHeader = () => {
  return (
    <div>
        <div className='hidden md:block'>
            <DesktopNav data={mocks.customDesktopNav} images={mocks?.images}/>
        </div>
        <div className='block md:hidden '>
            <MobileNav data={mocks.customMobileNav} images={mocks?.images}/>
        </div>

    </div>
  )
}

export default CustomHeader