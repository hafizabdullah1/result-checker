// Action
import axios from 'axios'
export const AddRollNum = (obj) => async (dispatch) => {

    dispatch({ type: 'ADD_ROLLNUM_REQUEST'});

    await dispatch({ type: 'ADD_ROLLNUM_SUCCESFULLY', payload: obj }); 

  };
  
  export const addMarks = (marks) => async (dispatch) =>{
    try {

      dispatch({ type: 'ADD_MARKS_REQUEST'});

      const res = await axios.post('http://localhost:5000/students', marks);
      
      dispatch({ type: 'ADD_MARKS_SUCCESFULLY', payload: res.data });
    } 
      catch (error) {
        dispatch({ type: 'ADD_MARKS_FAIL', payload: error.message });
    }

  } 


  export const getStudent=(no)=> async (dispatch)=> {
    try {
      
      dispatch({ type: 'GET_STUDENT_REQUEST'});

      const res = await axios.get(`http://localhost:5000/students/${no}`);
  
      dispatch({ type: 'GET_STUDENT_SUCCESFULLY', payload: res.data });
  
    } 
    catch (error) {
      dispatch({ type: 'GET_STUDENT_FAIL', payload: error.message });
    }

   

  }