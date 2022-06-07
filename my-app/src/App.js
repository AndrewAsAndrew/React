import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/button/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'React 2', body: 'Description'},
    {id: 3, title: 'React 3', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 4, title: 'React 4', body: 'Description'},
    {id: 5, title: 'React 5', body: 'Description'},
    {id: 6, title: 'React 6', body: 'Description'},
  ])

  const [title, setTitle] = useState('Название поста')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">

      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder='Название поста' 
        />
        <MyInput type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title='Список постов 1'/>
      <PostList posts={posts2} title='Список постов 2'/>
      
    </div>
  );
}

export default App;