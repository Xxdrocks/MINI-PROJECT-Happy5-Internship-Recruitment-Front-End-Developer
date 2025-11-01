import React from 'react'
import Sidebar from '../components/Sidebar'
import Task from '../components/Task'

const Home = () => {
    return (
        <div>
            <div className='flex flex-row gap-[50px]'>
                <Sidebar />
                <div className='w-[68px] h-screen'></div>
                <div className='flex flex-col gap-[24px]'>
                    <div className='mt-[20px]'>
                        <h1 className='font-SemiBold text-[20px]'>
                            Product Roadmap
                        </h1>
                    </div>
                    <Task />
                    {/* <p>test</p> */}
                </div>
            </div>
        </div>
    )
}

export default Home
