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

Ya se realizó en 1.7: unicafe, paso 2
<br></br>

### 1.9: unicafe, paso 4

Cambia tu aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.

![imagen1_paso4](./images/Consignas/imagen1_paso4.png)
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

  if (total == 0) {
    return <p>No feedback given</p>;
  }
  
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

![solucion_imagen1](./images/solucion_imagen1_paso4.png)
<br></br>

### 1.10: unicafe, paso 5

Continuemos refactorizando la aplicación. Extrae los siguiente dos componentes:

Button para definir los botones utilizados para enviar comentarios
StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.
Para ser claros: el componente StatisticLine siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:

```jsx
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```

El estado de la aplicación aún debe mantenerse en el componente raíz App.
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

const StatisticLine = (props) => <div>{props.text} {props.value} {props.text2}</div>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad || 0;
  const average = (good + bad * -1) / total || 0;
  const positive = (good / total) * 100 || 0;

  if (total == 0) {
    return <p>No feedback given</p>;
  }
  
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} text2="%"/>       
    </div>
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
<br></br>

### 1.11: unicafe, paso 6

Muestra las estadísticas en una tabla HTML, de modo que tu la aplicación se ve más o menos así:

![imagen1_paso6](./images/Consignas/imagen1_paso6.png)
<br>

Recuerda mantener la consola abierta en todo momento. Si ves esta advertencia en tu consola:

![imagen2_paso6](./images/Consignas/imagen2_paso6.png)
<br>

Entonces realiza las acciones necesarias para que la advertencia desaparezca. Intenta buscar en Google el mensaje de error si te quedas atascado.

Una fuente típica de un error Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist. es la extensión de Chrome. Intenta ir a chrome://extensions y deshabilitarlos uno por uno y luego actualizar la página de la aplicación React; el error debería desaparecer eventualmente.

¡Asegúrate de que a partir de ahora no veas ninguna advertencia en tu consola!
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

```

La aplicación se ve así:

![solucion_imagen1](./images/solucion_imagen1_paso6.png)
<br></br>