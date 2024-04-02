import { useState } from 'react'
import './App.css'
import MiniDrawer from './Components/MiniDrawer'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <MiniDrawer />
    </RecoilRoot>

  )
}

export default App
