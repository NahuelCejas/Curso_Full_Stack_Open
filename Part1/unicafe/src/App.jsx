import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => (
  <>
    <div>good {good}</div>
    <div>neutral {neutral}</div>
    <div>bad {bad}</div>
  </>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1)}
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}

  return (
    <>
      <h1>give feedback</h1>
      <div>      
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />      
      </div>
      <h2>statistics</h2>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
    
  )
}

export default App
