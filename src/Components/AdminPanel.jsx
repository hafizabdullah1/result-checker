import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AdminPanel() {
    const navigate= useNavigate()
    const [password,setPassword] = useState('')
    
  return (
    <div className='flex justify-center items-center h-screen w-full flex-col gap-3 overflow-hidden bg-[url(https://mian-ali.github.io/result-checking-webApp/static/media/pas.044ee978.jpg)] bg-cover '>
        <h1 className='text-5xl animate-bounce p-2 bg-indigo-500 truncate text-white rounded capitalize admin'>Hi Admin Please enter you password</h1>
      <input type="text"
       placeholder='enter your password'
       onChange={(e)=>setPassword(e.target.value)}
        className='focus:shadow-lg border border-green-500 focus:duration-100 duration-100 laceholder:text-transparent tracking-widest text-center text-green-500 placeholder:text-green-500 focus:outline-none capitalize rounded focus:w-96 px-6 py-2'/>
        <button 
        className={password == 123 ? 'capitalize rounded-lg border px-6 py-2 bg-green-600 text-white  focus:scale-90 shadow-lg' : 'hidden'} 
        onClick={()=>navigate("/roll_num")}>Go...!</button>
    </div>
  )
}

export default AdminPanel
