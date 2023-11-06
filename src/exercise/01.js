// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {useReducer} from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  const [count, countChange] = useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => countChange(count + 1)
  return <button onClick={increment}>{count}</button>
}

function countReducer(currentstate, newState){
  return newState;
}

// countChange is a function returned by React.useReducer. It's used to dispatch actions that update the state by calling the countReducer.
// When you call countChange(step), it sends the "step" value as an action to the countReducer. The "countDifference" in the countReducer is effectively set to the "step" value when you call countChange(step).

function App() {
  return <Counter />
}

export default App
