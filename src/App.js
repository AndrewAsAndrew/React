import React, {useState} from 'react'

function App() {
  //деструктурируем аргументы функции useState (значение, функция)
  const [likes, setLikes] = useState(0) //useState() - в реальном времени позволяет вносить изменения на странице приложения
  const [value, setValue] = useState('сменить текст')

  const increment = () => {
    setLikes(likes + 1)
  }
  const decrement = () => {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>

     <input
      type="text" 
      value={value} 
      onChange={event => setValue(event.target.value)}
      />
     <button onClick={increment}>Лайк)</button>
     <button onClick={decrement}>Дизлайк(</button>
    </div>
  );
}

export default App;
