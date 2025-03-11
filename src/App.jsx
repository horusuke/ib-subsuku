import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import First_view from './component/first_view'
import Price from './component/Price'
import Reason from './component/Reason'
import Explanation from './component/Explanation'
import Menu from './component/Menu'
import Store_info from './component/Store_info'
import Regist_step from './component/Regist_step'
import How_use from './component/How_use'
import Regist_button from './component/Regist_button'
import Question from './component/Question'
import Footer_info from './component/Footer_info'
import How_use2 from './component/How_use2'
import Machine from './component/Machine'

function App() {

  return (
    <>
    <Header/>
    <First_view/>
    <Explanation/>
    <Reason/>
    <Machine/>
    <Price/>
    <Menu/>
    <Store_info/>
    <Regist_step/>
    <How_use/>
    <How_use2/>
    <Regist_button/>
    <Question/>
    <Footer_info/>
    </>
  )
}

export default App
