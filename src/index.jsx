import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './cal.css'
import CButton from './CButton'
import { getButtons } from './lib/buttonData'

const Calculator = () => {
  const [result, setResult] = useState('')

  const clear = () => {
    setResult('')
  }

  const handleDelete = () => {
    setResult((prevResult) => prevResult.slice(0, -1))
  }

  const handleClick = (value) => {
    setResult((prevResult) => prevResult.concat(value.toString()))
  }

  const calculate = () => {
    try {
      if (result) {
        setResult((prevResult) => eval(prevResult).toString())
      }
    } catch (error) {
      setResult('Error')
    }
  }
  const buttons = getButtons(clear, handleDelete, handleClick, calculate)

  return (
    <div className="box">
      <div className="screen">
        <form>
          <input type="text" value={result} readOnly />
        </form>
      </div>
      <div className="container">
        {buttons.map((cbutton) => (
          <CButton
            key={cbutton.id}
            {...cbutton}
            handleClick={handleClick}
            clear={clear}
            handleDelete={handleDelete}
            calculate={calculate}
          />
        ))}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)
