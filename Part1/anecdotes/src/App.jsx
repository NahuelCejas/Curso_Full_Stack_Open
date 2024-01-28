import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// Componente que muestra la anécdota y el número de votos
const Anecdote = ({ anecdote, votes }) => (
  <>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
  </>
)

const App = () => { 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // Estado para almacenar el índice de la anécdota actual seleccionada
  const [selected, setSelected] = useState(0)

  //se crea un array de la longitud de anecdotes con sus elementos inicializados en 0
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  // Manejador para cambiar a la siguiente anécdota de manera aleatoria
  const handleNextAnecdote = () => {
    // genera un número entero aleatorio entre 0 y la longitud de anecdotes - 1
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  } 
  
  //obtención del indice de la anecdota mas votada
  const maxVotesIndex = votes.indexOf(Math.max(...votes));

  // Manejador para incrementar el número de votos de la anécdota actual
  const handleVote = () => {
    // Utiliza el método map para crear un nuevo array de votos
    // Comprueba si el índice actual es igual al índice de la anécdota actualmente seleccionada
    // Si es igual, incrementa el voto en 1 y devuelve el nuevo valor
     // Si no es igual, devuelve el voto sin cambios
    setVotes(votes.map((v, index) => (index === selected ? v + 1 : v)));
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>       
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNextAnecdote} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[maxVotesIndex]} votes={votes[maxVotesIndex]}/>
    </>
    
  )
}

export default App
