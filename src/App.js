import React, {useState} from 'react'
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter"

function App() {
  const [value, setValue] = useState('сменить текст')
  
  return (
    <div className="App">
      <ClassCounter></ClassCounter>
    </div>
  );
}

export default App;
