import React from 'react'

const primaryBtn = ({data, images}) => {
  return (
    <button className='bg-[#030303] py-[1.25rem] px-[2.28rem] text-white text-[1rem] leading-[0.85rem] flex items-center font-[900]  '>
        {data.title}
        <img src={images.leftarr} alt="" className='ml-[2.06rem]' />
    </button>
  )
}

export default primaryBtn