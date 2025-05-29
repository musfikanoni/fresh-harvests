import React from 'react'
import about from '../../../../public/assets/about me.png'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <div className="flex">
        <div className=''>
            <Image src={about} className='h-[680px]' />
        </div>
      </div>
    </div>
  )
}
