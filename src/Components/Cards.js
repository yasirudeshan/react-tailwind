import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt = "" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </div>
            </div>

            <div className='w-full shadow-xl flex bg-gray-100 flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt = "" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
                </div>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt = "" />
                <h2 className='text-2xl font-bold text-center py-8'>Trible User</h2>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards