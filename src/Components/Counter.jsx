import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

  return (
    <div className="Counter">
        <h1>Counter App</h1>
        <p className="count">{count}</p>
        <div className="buttons">
        <button onClick={increment} className='fa fa-plus' aria-hidden="true" style={{fontSize: '50px', border: 'none', background: 'none'}}></button>
        <button onClick={decrement} className='fa fa-minus' aria-hidden="true" style={{fontSize: '50px', border: 'none', background: 'none'}}></button>
        <button onClick={reset} className='fa fa-refresh' aria-hidden="true" style={{fontSize: '50px', border: 'none', background: 'none'}}></button>
        </div>
    </div>
    
  )
}

export default Counter