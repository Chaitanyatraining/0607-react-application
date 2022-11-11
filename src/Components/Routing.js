import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactus from './contactus/Contactus'
import Pagination from './Pagination/Pagination'
import Users from './Users'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/user" element={<Users />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/contactus" element={<Contactus />} />
        </Routes>
    </div>
  )
}

export default Routing