import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contactus from './contactus/Contactus'
import Pagination from './Pagination/Pagination'
import UseEffectUsers from './UseEffectUsers'
import Users from './Users'
import Usestatecomp from './Usestatecomp'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/user" element={<Users />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/usestate" element={<Usestatecomp />} />
            <Route path="/useeffect" element={<UseEffectUsers />} />
        </Routes>
    </div>
  )
  
}

export default Routing