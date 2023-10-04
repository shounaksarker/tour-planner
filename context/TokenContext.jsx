'use client'
import { createContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export const TokenContext = createContext()

export const TokenProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(false)
  const [token_id, setTok_id] = useState();
    useEffect(() => {
      localStorage.getItem("token") && setTok_id(localStorage.getItem("token"))
    },[hasToken, setHasToken])

  return (
    <TokenContext.Provider value={{ hasToken, setHasToken, token_id}}>
      <ToastContainer 
      autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      {children}
    </TokenContext.Provider>
  )
}
