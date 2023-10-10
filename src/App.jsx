import { useEffect } from 'react'
import React from 'react'
import LogIn from './component/Login'

const App = () => {
  useEffect(()=>{
   const hash=window.location.hash
   if(hash){
    const token=hash.substring(1).split("&")
    console.log(token)
   }

  },[])
  return (
   <> 
   <LogIn/>
   </>
  )
}

export default App