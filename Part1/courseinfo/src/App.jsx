const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )  
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )  
}

const Content = () => {  
  return (
    <>      
      <Part  part={parts[0].name} exercises={parts[0].exercises}/>
      <Part  part={parts[1].name} exercises={parts[1].exercises}/>
      <Part  part={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )  
}


const Total = () => { 
  const total = parts.reduce((acc, part) => acc + part.exercises,0)
  console.log(total)
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )  
}

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


export default App
