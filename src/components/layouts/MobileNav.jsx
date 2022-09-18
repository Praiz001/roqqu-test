import React from 'react'
import { Link, NavLink } from "react-router-dom";

const MobileNav = ({data, images}) => {
  const [showNav, setShowNav] = React.useState(false);
  const show = () => setShowNav(true);

  return (
    <div className='w-full'>
      <div className="w-full px-[1.8rem] bg-[#080F24] py-[0.6rem] flex justify-between items-center  ">
        <Link to="/" className='rounded '>
          <img src={images.brand} alt="brandlogo" width={100} height={73}  />
        </Link>
        <div onClick={show} className="cursor-pointer ">
          <img src={images.Hamburger} alt="navigationicon" />
        </div>
      </div>


      {showNav ? (
        <div className="fixed top-0 left-0 bg-[#080F24] text-[#FFFFFFE8] p-[3rem] z-30 min-h-[100vh] w-full ">
          <div>
            <button
              onClick={() => setShowNav(false)}
              className="font-bold text-[#FFFFFFE8] text-[1.7rem] absolute top-[20px] right-[20px] "
            >
              X
            </button>
          </div>
          <div className="mt-[4rem] space-y-[1rem] flex flex-col ">
          {data.navs.map((nav, index) => (
              <NavLink
                to={nav.path}
                key={index}
                className="flex space-x-[2.3rem] px-[0.8rem] py-[0.67rem] rounded-[0.5rem] hover:bg-light-purple"
              >   
              <img src={nav.icon} alt="" />
              <p className='text-[0.88rem] leading-[1.19rem] font-normal'>{nav.title}</p>  
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav