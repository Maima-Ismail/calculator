import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './cal.css'
import CButton from './CButton'

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
  const buttons = [
    {
      id: 'clear',
      className: 'highlights',
      onClick: clear,
      value: 'AC',
    },
    {
      id: 'delete',
      className: 'highlights',
      onClick: handleDelete,
      value: 'DEL',
    },
    {
      className: 'highlights',
      onClick: () => handleClick('/'),
      value: '\u00F7',
    },
    {
      onClick: () => handleClick('7'),
      value: '7',
    },
    {
      onClick: () => handleClick('8'),
      value: '8',
    },
    {
      onClick: () => handleClick('9'),
      value: '9',
    },
    {
      className: 'highlights',
      onClick: () => handleClick('*'),
      value: '\u00D7',
    },
    {
      onClick: () => handleClick('4'),
      value: '4',
    },
    {
      onClick: () => handleClick('5'),
      value: '5',
    },
    {
      onClick: () => handleClick('6'),
      value: '6',
    },
    {
      className: 'highlights',
      onClick: () => handleClick('+'),
      value: '+',
    },
    {
      onClick: () => handleClick('1'),
      value: '1',
    },
    {
      onClick: () => handleClick('2'),
      value: '2',
    },
    {
      onClick: () => handleClick('3'),
      value: '3',
    },
    {
      className: 'highlights',
      onClick: () => handleClick('-'),
      value: '-',
    },
    {
      onClick: () => handleClick('0'),
      value: '0',
    },
    {
      onClick: () => handleClick('.'),
      value: '.',
    },
    {
      id: 'equal',
      className: 'highlights',
      onClick: calculate,
      value: '=',
    },
  ]
  return (
    <div className="box">
      <div className="screen">
        <form>
          <input type="text" value={result} readOnly />
        </form>
      </div>
      <div className="container">
        {buttons.map((cbutton) => {
          return <CButton {...cbutton} />
        })}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)
