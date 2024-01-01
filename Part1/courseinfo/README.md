# Desarrollo de la aplicación courseinfo

### 1.1: información del curso, paso 1

La aplicación en la que comenzaremos a trabajar en este ejercicio se desarrollará más a fondo en algunos de los siguientes ejercicios. En este y otros conjuntos de ejercicios futuros de este curso, es suficiente enviar solo el estado final de la aplicación. Si lo desea, también puedes crear un commit para cada ejercicio de la serie, pero esto es completamente opcional.

Usa Vite para inicializar una nueva aplicación. Modifica main.jsx para que coincida con lo siguiente

```jsx
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

y App.jsx para que conincida con lo siguiente

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

y elimina los archivos adicionales App.css, y index.css, y el directorio assets.

Desafortunadamente, toda la aplicación está en el mismo componente. Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.

Define los nuevos componentes en el archivo App.jsx.

El cuerpo del componente App será aproximadamente como lo siguiente:

```jsx
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```
<br>

**Solución**  
Se modificó el código del archivo App.jsx obteniendo:  

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )  
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )  
}

const Total = () => { 
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )  
}

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total />
    </div>
  )
}


export default App
```
<br>

### 1.2: información del curso, paso 2

Refactoriza el componente Content para que no renderice ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Nuestra aplicación pasa información de una manera bastante primitiva en este momento, ya que se basa en variables individuales. Esta situación mejorará pronto en la parte 2, pero antes de eso, vamos a la parte 1b para aprender acerca de JavaScript.
<br>

**Solución**  
Se modificó el código del archivo App.jsx obteniendo:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


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

const Content = (props) => {
  console.log(props)
  return (
    <>      
      <Part  part={part1} exercises={exercises1}/>
      <Part  part={part2} exercises={exercises2}/>
      <Part  part={part3} exercises={exercises3}/>
    </>
  )  
}

const Total = () => { 
  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )  
}

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}


export default App
```
<br>

### 1.3: información del curso, paso 3

Avancemos para usar objetos en nuestra aplicación. Modifica las definiciones de las variables del componente App de la siguiente manera y también refactoriza la aplicación para que siga funcionando:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```
<br>

**Solución**  
Se modificó el código del archivo App.jsx obteniendo:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

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

const Content = (props) => {
  console.log(props)
  return (
    <>      
      <Part  part={part1.name} exercises={part1.exercises}/>
      <Part  part={part2.name} exercises={part2.exercises}/>
      <Part  part={part3.name} exercises={part3.exercises}/>
    </>
  )  
}

const Total = () => { 
  return (
    <>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </>
  )  
}

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}


export default App
```
<br>

### 1.4: información del curso, paso 4

Y luego coloca los objetos en un array. Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras partes de la aplicación en respectivamente:

```jsx
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

  return (
    <div>
      ...
    </div>
  )
}
```
**Nota**: en este punto puedes asumir que siempre hay tres elementos, por lo que no es necesario pasar por las matrices usando bucles. Volveremos al tema de la representación de componentes basados en elementos dentro de arrays con una exploración más profunda en la siguiente parte del curso.

Sin embargo, no pases diferentes objetos como props separados del componente App a los componentes Content y Total. En su lugar, pásalos directamente como una matriz:

```jsx
const App = () => {
  // definiciones de const

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```
<br>

**Solución**  
Se modificó el código del archivo App.jsx obteniendo:

```jsx
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
```
<br>

### 1.5: información del curso, paso 5

Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript. Arregla todo lo que se rompa.

```jsx
const App = () => {
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

  return (
    <div>
      ...
    </div>
  )
}
```
<br>

**Solución**  
Se modificó el código del archivo App.jsx obteniendo:

```jsx
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
```