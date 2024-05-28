import React from 'react'
import {useNavigate} from 'react-router-dom'

function MainPage() {


    const navigate= useNavigate()
  return (
    <div  className='flex justify-center items-center h-screen w-full flex-col gap-5 bg-cover bg-[url(https://mian-ali.github.io/result-checking-webApp/static/media/pic2.f2d1d59a.jpg)] '>
     <h1 className='text-5xl animate-bounce p-2 bg-indigo-500 text-white rounded'>Result Checking</h1>
     <div>
        <button className='rounded-lg border px-6 py-2 bg-pink-600 text-white capitalize mr-5 focus:scale-90'
        onClick={()=>navigate("/admin_panel")}>admin panel</button>
        <button className='capitalize rounded-lg border px-6 py-2 bg-green-600 text-white  focus:scale-90'
        onClick={()=>navigate('/serchResult')}>result check</button>
     </div>
    </div>
  )
}

export default MainPage
