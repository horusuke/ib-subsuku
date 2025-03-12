import { useState } from 'react'
import Header from './header'
import First_view from './first_view'
import Price from './Price'
import Reason from './Reason'
import Explanation from './Explanation'
import Menu from './Menu'
import Store_info from './Store_info'
import Regist_step from './Regist_step'
import How_use from './How_use'
import Regist_button from './Regist_button'
import Question from './Question'
import Footer_info from './Footer_info'
import How_use2 from './How_use2'
import Machine from './Machine'

function LP() {

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

export default LP
