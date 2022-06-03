import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('сменить текст')
  
  return (
    <div className="App">

      <PostItem post={{id: 1, title: 'React', body: 'Description'}} />
      
    </div>
  );
}

export default App;