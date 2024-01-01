
// Definición del componente funcional principal llamado App
const App = () => {  

  // Definición de un objeto 'course' que contiene información sobre el curso
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  
  // Definición del componente funcional Header que muestra el nombre del curso
  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.courseName}</h1>
      </>
    )  
  }

  // Definición del componente funcional Part que muestra información sobre una parte del curso
  const Part = (props) => {
    console.log(props)
    return (
      <>
        <p>{props.part} {props.exercises}</p>
      </>
    )  
  }

  // Definición del componente funcional Content 
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map((parte, i) => (
          <Part key={i} part={parte.name} exercises={parte.exercises} />
        ))}
      </>
    )
  }

  // Definición del componente funcional Total que muestra el número total de ejercicios
  const Total = () => { 
    // Cálculo del total de ejercicios sumando la cantidad de ejercicios de cada parte
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
    console.log(total)
    return (
      <>
        <p>Number of exercises {total}</p>
      </>
    )  
  }

  // Renderizado del componente principal con sus componentes hijos
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App
