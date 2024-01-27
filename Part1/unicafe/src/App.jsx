import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tbody>
    <tr>
      <td>{props.text}</td> 
      <td>{props.value} {props.text2}</td>
    </tr>
  </tbody>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad || 0;
  const average = (good + bad * -1) / total || 0;
  const positive = (good / total) * 100 || 0;

  if (total == 0) {
    return <p>No feedback given</p>;
  }
  
  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} text2="%"/>       
    </table>
  );
};

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
