# Desarrollo de la aplicación unicafe

### 1.6: unicafe, paso 1

Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. Tu aplicación final podría verse así:

![imagen1](./images/Consignas/imagen1_paso1.png)
<br></br>

Ten en cuenta que tu aplicación debe funcionar solo durante una única sesión del navegador. Una vez que se actualice la página, los comentarios recopilados pueden desaparecer.

Te recomendamos usar la misma estructura usada en el material y en el anterior ejercicio. El archivo main.jsx sería asi:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

Podrias usar el siguiente código como punto de partida para el archivo App.jsx:

```jsx
import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```
<br>

**Solución** 
Se modificó el código del archivo App.jsx obteniendo:

```jsx
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

```

La aplicación se ve así:

![solucion_imagen1](./images/solucion_imagen1_paso1.png)
<br></br>

### 1.7: unicafe, paso 2

Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.

![imagen1_paso2](./images/Consignas/imagen1_paso2.png)
<br>

**Solución** 
Se modificó el código del archivo App.jsx obteniendo:

```jsx
import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad || 0;
  const average = (good + bad * -1) / total || 0;
  const positive = (good / total) * 100 || 0;
  
  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
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
```

La aplicación se ve así:

![solucion_imagen1](./images/solucion_imagen1_paso2.png)
<br></br>

### 1.8: unicafe, paso 3

Refactoriza tu aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

Recuerda que los componentes no deben definirse dentro de otros componentes:

```jsx
// un lugar adecuado para definir un componente
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // no defina componentes adentro de otro componente
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```
<br>

**Solución** 
Se modificó el código del archivo App.jsx obteniendo:

```jsx

```



