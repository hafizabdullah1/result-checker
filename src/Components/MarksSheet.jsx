import React, {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { addMarks } from '../Action/action'
import {useNavigate} from 'react-router-dom'

function MarksSheet() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { roll } = useSelector((state) => state?.rollNum);

    const [marks, setMarks] = useState({})

    const handleMarks=(e)=>{
        setMarks({
            ...marks ,[e.target.name] : e.target.value
        })
    }

    const obj = { ...marks, name: roll.name, class: roll.class, id: roll.id }

    const {urdu, english, islamiyat, pak_studies, math, physics, chemistry, computer} = marks

    const [error, setError] = useState()
    const handleValidation=()=>{
        const errors = {}

        if(!urdu || urdu > 75){
            errors.urdu = "please add the valid marks for urdu subject max marks is: 75"
        }
        if(!english || english > 75){
            errors.english = "please add the valid marks for english subject max marks is: 75"
        }
        if(!islamiyat || islamiyat > 50){
            errors.islamiyat = "please add the valid marks for islamiyat subject max marks is: 50"
        }
        if(!pak_studies || pak_studies > 50){
            errors.pak_studies = "please add the valid marks for pak_studies subject max marks is: 50"
        }
        if(!math || math > 75){
            errors.math = "please add the valid marks for math subject max marks is: 75"
        }
        if(!physics || physics > 60){
            errors.physics = "please add the valid marks for physics subject max marks is: 60"
        }
        if(!chemistry || chemistry > 60){
            errors.chemistry = "please add the valid marks for chemistry subject max marks is: 60"
        }
        if(!computer || computer > 50){
            errors.computer = "please add the valid marks for computer subject max marks is: 50"
        }   
       
        setError(errors)

        if(Object.keys(errors).length === 0){
            return true
        }else{
            return false
        }
    }

    const handleSubmit = () => {
      const isValid = handleValidation();
      if (isValid) {
          dispatch(addMarks(obj));

          var confirmation = window.confirm("Student Add\nWanna Add More Students ? Press 'OK'\nOtherwise Press 'CANCEL'");
          if (confirmation) {
              navigate('/roll_num');
          } else {
              navigate('/');
          }
      }
  }
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Marks Sheet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['urdu', 'english', 'islamiyat', 'pak_studies', 'math', 'physics', 'chemistry', 'computer'].map((subject) => (
          <div key={subject} className="mb-4">
            <label className="block text-gray-600 capitalize">{subject} marks:</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Add num..." 
              name={subject}
              value={marks[subject]}
              onChange={handleMarks}
            />
            {error && <p className="text-red-500 text-xs italic absolute">{error[subject]}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default MarksSheet;
