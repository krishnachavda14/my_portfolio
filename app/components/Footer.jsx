import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'></Image>

            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'></Image> krishnachavda543@gmail.com
            </div>
        </div>
        

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 krishna. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_black' href='https://github.com/krishnachavda14'>Github</a></li>
                <li><a target='_black' href='https://linkedin.com/in/krishna-chavda-04967725b'>LinkedIn</a></li>
                <li><a target='_black' href='https://leetcode.com/u/krishnachavda14/'>Leetcode</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer