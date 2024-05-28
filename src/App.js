import React from 'react'
import MainPage from './Components/MainPage'
import AdminPanel from './Components/AdminPanel'
import {Route, Routes} from 'react-router-dom'
import RollNum from './Components/RollNum'
import MarksSheet from './Components/MarksSheet'
import Result from './Components/Result'
import ResultSerch from './Components/ResultSerch'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/admin_panel" element={<AdminPanel/>}/>
        <Route path="/roll_num" element={<RollNum/>}/>
        <Route path="marks_sheet" element={<MarksSheet/>}/>
        <Route path='/serchResult' element={<ResultSerch/>} />
        <Route path="/result/:id" element={<Result/>}/>
      </Routes>
    </>
  )
}

export default App
