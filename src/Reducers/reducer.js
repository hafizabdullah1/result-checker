const rollNoState = {
    loading: null,
    roll: {}
  };

export const addRollNumReducer = (state = rollNoState, action) => {
    switch (action.type) {

      case 'ADD_ROLLNUM_REQUEST':
        return { loading: true, ...state };

      case 'ADD_ROLLNUM_SUCCESFULLY':
        return { loading: false, roll: action.payload }; 
        
      default:
        return state;
    }
  }

  const marksState = {
    loading: null,
    marks: {}
  };

  export const addMarksReducer = (state = marksState, action) => {
    switch (action.type) {
        
      case 'ADD_MARKS_REQUEST':
        return { loading: true,...state };

     case 'ADD_MARKS_SUCCESFULLY':
        return { loading: false, marks: action.payload };

        case 'ADD_MARKS_FAIL':
          return { loading: false, error: action.payload };

    default:
        return state;
    }
  }
  

  export const getStudentReducer=(state={}, action)=>{

    switch (action.type) {
      case 'GET_STUDENT_REQUEST':
          return { loading: true,...state}

          case 'GET_STUDENT_SUCCESFULLY':
            return {loading : false, student: action.payload}

              case 'GET_STUDENT_FAIL':
                return {loading : false, error: action.payload}
      default:
        return state;
    }

  }