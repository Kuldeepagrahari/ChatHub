import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom"

const Home = lazy(() => {
  return import("./pages/home.jsx")
})
const Login = lazy(() => {
  return import("./pages/Login.jsx")
})
const Chat = lazy(() => {
  return import("./pages/Chat.jsx")
})
const Groups = lazy(() => {
  return import("./pages/Groups.jsx")
})



const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/groups" element={<Groups></Groups>}></Route>
        <Route path="/chat/:chatId" element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
