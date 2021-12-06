import React, { useEffect, useState } from "react"
import {
    Link
  } from "react-router-dom";
import { counter } from "canisters/counter"
import { Auth } from "./Auth"
import logo from "@/assets/logo-dark.svg"
import tailwindlogo from "@/assets/tailwindcss.svg"

export function About() {
  const [count, setCount] = useState<string>()

  const refreshCounter = async () => {
    const res = await counter.getValue()
    setCount(res.toString())
  }

  useEffect(() => {
    refreshCounter()
  }, [])

  const onIncrementClick = async () => {
    await counter.increment()
    refreshCounter()
  }

  return (
    <>
      <Auth />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="text-center text-2xl mt-5">Ready. Lets build the new web3.0 dApp , Vite + React + Motoko + Tailwind2</p>

        <button className="demo-button" onClick={onIncrementClick}>
          Count is: {count}
          
        </button>
        <p className="text-xs mt-3 ">Test the consistency data by clicking Count in a different browser window.</p>
       
        <button className="demo-button">
            React Router About
        </button>

        <div className="p-6 max-w-sm mx-auto bg-purple-600 rounded-xl shadow-md flex items-center space-x-4 mt-5">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src={tailwindlogo} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-white ">tailwindcss</div>
            <p className="text-white">You have a ready!</p>
          </div>
        </div>

        <button className="mt-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to="/">Click Go Home</Link>
        </button>



      </header>
    </>
  )
}