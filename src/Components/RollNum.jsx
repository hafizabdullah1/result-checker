import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {AddRollNum} from '../Action/action'
import { useNavigate } from 'react-router-dom'

function RollNum() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [roll, setRoll] = useState({});

    const { id } = roll
    

  let local;
    const checkId=()=>{
          local = JSON.parse(localStorage.getItem('roll_no'))
        if(!local){
          localStorage.setItem("roll_no", JSON.stringify([id]))
          navigate('/marks_sheet');
       }
        if (local) {
          local = JSON.parse(localStorage.getItem('roll_no'))

          if (local.includes(id)) {
            alert('This Roll_no. Already Add')
          } 
          else {
            localStorage.setItem("roll_no", JSON.stringify([...local, id]))
            dispatch(AddRollNum(roll)); 
            navigate('/marks_sheet');
          }
        }
    }

    const handleRollNo = (e) => {
      setRoll({
        ...roll,
        [e.target.name]: e.target.value
      });
    };
  
    const handleObj =()=> {
      checkId()
    };

  return (
    <div className='text-center flex flex-col justify-center items-center h-screen bg-[url(https://mian-ali.github.io/result-checking-webApp/static/media/pic2.f2d1d59a.jpg)]'>
        <h1 className='text-4xl animate-bounce p-2 bg-indigo-500 text-white rounded capitalize mb-5'>enter student details</h1>
        <div className='flex flex-col gap-5 items-center'>
        <input type="number"
        value={roll.class}
        name='class'
       placeholder='enter class in digit'
       onChange={handleRollNo}
       id='inp'
        className='focus:shadow-lg border border-green-500 focus:duration-100 duration-100 laceholder:text-transparent tracking-widest text-center text-green-500 placeholder:text-green-500 focus:outline-none capitalize rounded focus:w-72 px-6 py-2'/>
        <input type="text"
        value={roll.name}
        name='name'
       placeholder='enter student name'
       onChange={handleRollNo}
       id='inp'
        className='focus:shadow-lg border border-green-500 focus:duration-100 duration-100 laceholder:text-transparent tracking-widest text-center text-green-500 placeholder:text-green-500 focus:outline-none capitalize rounded focus:w-72 px-6 py-2'/>
        <input type="number"
       onChange={handleRollNo}
       value={roll.id}
       name='id'
       id='inp'
       placeholder='enter student rollnumber'
        className='focus:shadow-lg border border-green-500 focus:duration-100 duration-100 laceholder:text-transparent tracking-widest text-center text-green-500 placeholder:text-green-500 focus:outline-none capitalize rounded focus:w-72 px-6 py-2'/>
        <button className={roll.name && roll.id && roll.class > 1 ?'capitalize rounded-lg border px-6 py-2 bg-green-600 text-white w-1/2  focus:scale-90 shadow-lg' : 'hidden'} onClick={handleObj}>Next</button>
        </div>
    </div>
  )
}

export default RollNum
